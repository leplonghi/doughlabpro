
import * as React from 'react';
import { toast } from '@/components/ui/sonner';
import { useTranslation } from 'react-i18next';

// Define the AuthContext type with needed properties
type AuthContextType = {
  user: null;  // Set to null since we're not using auth
  loading: boolean;
  signInWithGoogle: () => Promise<{error: null}>;
};

// Create the auth context with default values
const AuthContext = React.createContext<AuthContextType>({
  user: null,
  loading: false,
  signInWithGoogle: async () => ({error: null}),
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
  const [loading, setLoading] = React.useState(false);
  const { t } = useTranslation();

  // Mock implementation of signInWithGoogle since auth is disabled
  const signInWithGoogle = async () => {
    setLoading(true);
    // Wait a bit to simulate network request
    await new Promise(resolve => setTimeout(resolve, 500));
    toast.info(t('auth.authDisabled', 'All features are free - no login needed'));
    setLoading(false);
    return { error: null };
  };

  const value = {
    user: null, // Always null since we're not using auth
    loading,
    signInWithGoogle,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
