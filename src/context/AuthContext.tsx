
import * as React from 'react';

// Define simplified auth state type
interface AuthState {
  isAuthenticated: boolean;
  user: null;
}

// Define simplified auth context type
interface AuthContextType {
  authState: AuthState;
  isLoading: boolean;
}

// Create context with default values
const defaultAuthContext: AuthContextType = {
  authState: {
    isAuthenticated: false,
    user: null,
  },
  isLoading: false,
};

// Create the context
const AuthContext = React.createContext<AuthContextType>(defaultAuthContext);

// Custom hook for using auth context
export const useAuth = () => React.useContext(AuthContext);

// Auth provider component - simplified
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // We maintain the basic structure but remove actual auth functionality
  const [authState] = React.useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });
  
  const [isLoading] = React.useState(false);

  // Simply provide the basic context values
  return (
    <AuthContext.Provider value={{ authState, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
