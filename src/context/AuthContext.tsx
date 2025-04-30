
import * as React from 'react';
import { createContext, useContext } from 'react';

// Define auth state types
interface AuthState {
  isAuthenticated: boolean;
  user: null | {
    id: string;
    email: string;
    name?: string;
  };
}

// Define auth context type
interface AuthContextType {
  authState: AuthState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, name?: string) => Promise<void>;
  isLoading: boolean;
}

// Create context with default values
const defaultAuthContext: AuthContextType = {
  authState: {
    isAuthenticated: false,
    user: null,
  },
  login: async () => {},
  logout: async () => {},
  register: async () => {},
  isLoading: false,
};

// Create the context
const AuthContext = createContext<AuthContextType>(defaultAuthContext);

// Custom hook for using auth context
export const useAuth = () => useContext(AuthContext);

// Auth provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = React.useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });
  const [isLoading, setIsLoading] = React.useState(false);

  // Simplified login function for demo
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Set authenticated user
      setAuthState({
        isAuthenticated: true,
        user: {
          id: '1',
          email,
          name: 'Demo User'
        }
      });
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Reset auth state
      setAuthState({
        isAuthenticated: false,
        user: null
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Register function
  const register = async (email: string, password: string, name?: string) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Set authenticated user after registration
      setAuthState({
        isAuthenticated: true,
        user: {
          id: '1',
          email,
          name: name || 'New User'
        }
      });
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout, register, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
