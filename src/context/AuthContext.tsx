
import React, { createContext, useContext, useEffect, useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { useTranslation } from 'react-i18next';
import { supabase } from '@/lib/supabase';
import { Session, User } from '@supabase/supabase-js';

// Define the AuthContext type with needed properties
type AuthContextType = {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signInWithGoogle: () => Promise<{error: any | null}>;
  signOut: () => Promise<{error: any | null}>;
  isPro: boolean;
};

// Create the auth context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signInWithGoogle: async () => ({error: null}),
  signOut: async () => ({error: null}),
  isPro: false,
});

// Hook to use the auth context
export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Provider component to wrap the app with auth context
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isPro, setIsPro] = useState(false);
  const { t } = useTranslation();

  // Check for session on mount and setup auth listener
  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        setLoading(false);

        // Check pro status whenever auth state changes
        if (currentSession?.user) {
          // For now, we'll simulate pro status
          // This would be replaced with an actual check against your subscription database
          setIsPro(false);
        } else {
          setIsPro(false);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession } }) => {
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setLoading(false);
      
      // Check pro status on initial load
      if (currentSession?.user) {
        // For now, we'll simulate pro status
        setIsPro(false);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Google Sign In
  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        }
      });
      
      if (error) throw error;
      return { error: null };
    } catch (error: any) {
      toast({
        title: t('auth.signInFailed'),
        description: error.message || t('auth.unexpectedError'),
        variant: 'destructive',
      });
      setLoading(false);
      return { error };
    }
  };

  // Sign out
  const signOut = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      return { error: null };
    } catch (error: any) {
      toast({
        title: t('auth.signOutFailed'),
        description: error.message || t('auth.unexpectedError'),
        variant: 'destructive',
      });
      setLoading(false);
      return { error };
    }
  };

  const value = {
    user,
    session,
    loading,
    signInWithGoogle,
    signOut,
    isPro,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
