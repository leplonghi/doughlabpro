
import * as React from 'react';
import { toast } from '@/components/ui/sonner';
import { useTranslation } from 'react-i18next';

// Define simpler AuthContext without Supabase since auth is currently disabled
type AuthContextType = {
  loading: boolean;
};

// Create the auth context with default values
const AuthContext = React.createContext<AuthContextType>({
  loading: false,
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

  const value = {
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
