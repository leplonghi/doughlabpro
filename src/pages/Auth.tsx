
import React from 'react';
import { Navigate } from 'react-router-dom';
import { AuthForm } from '@/components/auth/AuthForm';
import { useAuth } from '@/context/AuthContext';
import { Pizza } from 'lucide-react';

const Auth: React.FC = () => {
  const { user, loading } = useAuth();

  // If user is authenticated, redirect to home
  if (!loading && user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-pizza-light/10 p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2.5">
            <Pizza size={40} className="text-pizza" />
            <h1 className="text-2xl md:text-3xl font-serif font-bold bg-gradient-to-r from-pizza to-pizza-dark bg-clip-text text-transparent">
              Pizza Dough Calculator
            </h1>
          </div>
        </div>

        <div className="bg-card border rounded-lg shadow-lg p-6">
          <AuthForm onSuccess={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Auth;
