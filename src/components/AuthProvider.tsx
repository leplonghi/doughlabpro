
import React from 'react';
import { AuthProvider as ContextAuthProvider } from '@/context/AuthContext';

// This component is just a re-export of the main AuthProvider from context
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <ContextAuthProvider>{children}</ContextAuthProvider>;
};

export default AuthProvider;
