
import * as React from 'react';
import AuthContext from '@/context/AuthContext';

// This component is just a re-export of the main AuthProvider from context
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return <AuthContext>{children}</AuthContext>;
};

export default AuthProvider;
