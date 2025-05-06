
import * as React from 'react';
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
  bypassAuth: boolean; 
};

// Create the auth context with default values
const AuthContext = React.createContext<AuthContextType>({
  user: null,
  session: null,
  loading: true,
  signInWithGoogle: async () => ({error: null}),
  signOut: async () => ({error: null}),
  isPro: false,
  bypassAuth: false, // Authentication enabled
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
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [session, setSession] = React.useState<Session | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [isPro, setIsPro] = React.useState(false);
  const [bypassAuth, setBypassAuth] = React.useState(false); // Authentication enabled
  const { t } = useTranslation();

  // Check for session on mount and setup auth listener
  React.useEffect(() => {
    // Regular authentication flow
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        console.log('Auth state changed:', event, currentSession?.user?.id);
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        setLoading(false);

        // Check pro status whenever auth state changes
        if (currentSession?.user) {
          // This is where you'd check for pro status in a real app
          setIsPro(false);
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
  }, []);

  // Google Sign In
  const signInWithGoogle = async (returnUrl = '/home') => {
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
    setLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast.success(t('auth.signOutSuccess'), {
        description: t('auth.signedOut'),
      });
      
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
    user,
    session,
    loading,
    signInWithGoogle,
    signOut,
    isPro,
    bypassAuth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
