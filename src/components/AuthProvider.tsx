
import React from 'react';
import { AuthProvider as ContextAuthProvider } from '../context/AuthContext';

// Re-export the AuthProvider from context with proper React import
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <ContextAuthProvider>{children}</ContextAuthProvider>;
};

export default AuthProvider;
