
import * as React from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';
import { toast } from '@/components/ui/sonner';
import { useTranslation } from 'react-i18next';

type AuthContextType = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<{ error: any | null }>;
  signOut: () => Promise<void>;
};

// Create the auth context with default values
const AuthContext = React.createContext<AuthContextType>({
  session: null,
  user: null,
  loading: true,
  signInWithGoogle: async () => ({ error: null }),
  signOut: async () => {},
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
  const { t } = useTranslation();

  React.useEffect(() => {
    // Set up auth state change listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        if (event === 'SIGNED_OUT') {
          setSession(null);
          setUser(null);
        } else if (currentSession && event === 'SIGNED_IN') {
          setSession(currentSession);
          setUser(currentSession.user);
        }
        
        if (loading && (event === 'SIGNED_IN' || event === 'SIGNED_OUT')) {
          setLoading(false);
        }
      }
    );

    // Then check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession }, error }) => {
      if (error) {
        console.error("Error getting session:", error);
        setLoading(false);
        return;
      }
      
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => subscription.unsubscribe();
  }, []);

  // Sign in with Google
  const signInWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: window.location.origin,
        }
      });
      
      if (error) {
        console.error("Google sign-in error:", error);
        toast.error(t('auth.googleSignInError', 'Failed to sign in with Google'));
        return { error };
      }
      
      return { error: null };
    } catch (error) {
      console.error("Unexpected error during Google sign-in:", error);
      toast.error(t('auth.unexpectedError', 'An unexpected error occurred'));
      return { error };
    }
  };

  // Sign out
  const signOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Sign out error:", error);
        toast.error(t('auth.signOutError', 'Failed to sign out'));
      } else {
        toast.success(t('auth.signedOut', 'Successfully signed out'));
      }
    } catch (error) {
      console.error("Unexpected error during sign out:", error);
      toast.error(t('auth.unexpectedError', 'An unexpected error occurred'));
    }
  };

  const value = {
    session,
    user,
    loading,
    signInWithGoogle,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
