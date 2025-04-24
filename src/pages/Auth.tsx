
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '@/components/auth/AuthForm';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent } from '@/components/ui/card';
import LoadingSpinner from '@/components/ui/loading-spinner';

const Auth: React.FC = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user, navigate]);
  
  // Don't render the auth form if we're already authenticated
  if (user) {
    return <LoadingSpinner />;
  }

  // Show a loading spinner while checking authentication
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background to-pizza-light/10">
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter">DoughLab Pro</h1>
            <p className="text-muted-foreground">
              Sign in to access your personalized pizza dough calculator
            </p>
          </div>
          <Card className="border shadow-lg">
            <CardContent className="pt-6">
              <AuthForm />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Auth;
