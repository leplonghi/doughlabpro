
import React from 'react';
import { supabase } from "@/integrations/supabase/client";
import { Session, User } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

type AuthContextType = {
  session: Session | null;
  user: User | null;
  loading: boolean;
};

// Create context with default values
export const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = React.useState<Session | null>(null);
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  React.useEffect(() => {
    // Set up auth state listener first
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, currentSession) => {
        console.log('Auth state changed:', event);
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        
        if (event === 'SIGNED_IN') {
          toast({
            title: "Welcome back!",
            description: "You have successfully signed in.",
          });
          navigate('/');
        } else if (event === 'SIGNED_OUT') {
          toast({
            title: "Signed out",
            description: "You have been signed out successfully.",
          });
          navigate('/auth');
        } else if (event === 'USER_UPDATED') {
          setUser(currentSession?.user ?? null);
        } else if (event === 'TOKEN_REFRESHED') {
          console.log('Token refreshed successfully');
        }
      }
    );

    // Then check for existing session
    supabase.auth.getSession().then(({ data: { session: currentSession }, error }) => {
      if (error) {
        console.error('Error getting session:', error.message);
        toast({
          title: "Session Error",
          description: "Unable to retrieve your session. Please sign in again.",
          variant: "destructive"
        });
      }
      
      setSession(currentSession);
      setUser(currentSession?.user ?? null);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate, toast]);

  // Provide value to context
  const value = {
    session,
    user,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
