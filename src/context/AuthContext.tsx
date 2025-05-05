
import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import { supabase } from '@/lib/supabase';
import { Session, User } from '@supabase/supabase-js';

// Define the AuthContext type with needed properties
type AuthContextType = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signInWithGoogle: (returnUrl?: string) => Promise<{error: any | null}>;
  signOut: () => Promise<{error: any | null}>;
  isPro: boolean;
  bypassAuth: boolean; // Added for development
};

// Create the auth context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signInWithGoogle: async () => ({error: null}),
  signOut: async () => ({error: null}),
  isPro: false,
  bypassAuth: true, // Set to true to bypass auth by default
});

// Hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Provider component to wrap the app with auth context
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(false); // Set to false for quick loading
  const [isPro, setIsPro] = useState(false);
  const [bypassAuth, setBypassAuth] = useState(true); // Set to true to bypass auth
  const { t } = useTranslation();

  // Check for session on mount and setup auth listener
  useEffect(() => {
    if (bypassAuth) {
      // Skip auth checks if we're bypassing
      setLoading(false);
      return () => {};
    }

    // Regular authentication flow when not bypassed
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        console.log('Auth state changed:', event, currentSession?.user?.id);
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        setLoading(false);

        // Check pro status whenever auth state changes
        if (currentSession?.user) {
          setIsPro(false); // Remove pro status check for now
        } else {
          setIsPro(false);
        }
      }
    );

    // Check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      console.log('Initial session check:', currentSession?.user?.id);
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [bypassAuth]);

  // Google Sign In
  const signInWithGoogle = async (returnUrl = '/home') => {
    if (bypassAuth) {
      // Skip actual auth if bypassing
      console.log('Auth bypassed, simulating sign in');
      return { error: null };
    }

    setLoading(true);
    try {
      // Ensure returnUrl has the origin prefix
      const redirectTo = `${window.location.origin}${returnUrl.startsWith('/') ? returnUrl : '/' + returnUrl}`;
      console.log('Signing in with Google, redirect to:', redirectTo);
      
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo
        }
      });
      
      if (error) throw error;
      return { error: null };
    } catch (error: any) {
      console.error('Google Sign In Error:', error);
      toast.error(t('auth.signInFailed'), {
        description: error.message || t('auth.unexpectedError'),
      });
      setLoading(false);
      return { error };
    }
  };

  // Sign out
  const signOut = async () => {
    if (bypassAuth) {
      // Skip actual auth if bypassing
      console.log('Auth bypassed, simulating sign out');
      return { error: null };
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      return { error: null };
    } catch (error: any) {
      toast.error(t('auth.signOutFailed'), {
        description: error.message || t('auth.unexpectedError'),
      });
      setLoading(false);
      return { error };
    }
  };

  const value = {
    user: bypassAuth ? ({ 
      id: 'bypass-user-id',
      app_metadata: {},
      user_metadata: { full_name: 'Development User', avatar_url: null },
      aud: 'authenticated',
      created_at: new Date().toISOString()
    } as User) : user,
    session,
    loading,
    signInWithGoogle,
    signOut,
    isPro,
    bypassAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
