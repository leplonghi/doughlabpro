
import React from 'react';
import { AuthProvider as ContextAuthProvider } from '../context/AuthContext';

// Re-export the AuthProvider from context
const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ContextAuthProvider>{children}</ContextAuthProvider>;
};

export default AuthProvider;
