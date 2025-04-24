
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '@/components/auth/AuthForm';
import { useAuth } from '@/context/AuthContext';
import { Card } from '@/components/ui/card';
import { Pizza } from 'lucide-react';

const Auth: React.FC = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user) {
      console.log("User authenticated, redirecting to home");
      navigate('/home');
    }
  }, [user, navigate]);
  
  const handleSuccess = () => {
    console.log("Login successful, redirecting to home");
    navigate('/home');
  };

  if (user && !loading) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-[400px] mx-auto">
          <Card className="p-8 shadow-lg">
            <div className="flex flex-col items-center gap-6">
              <Pizza className="w-12 h-12" />
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold">Welcome to DoughLab Pro</h1>
                <p className="text-muted-foreground">
                  Sign in to access professional pizza dough calculations and recipes
                </p>
              </div>
              <AuthForm onSuccess={handleSuccess} />
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Auth;
