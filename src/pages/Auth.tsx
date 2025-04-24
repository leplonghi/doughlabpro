
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Pizza } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AuthForm } from '@/components/auth/AuthForm';
import LoadingSpinner from '@/components/ui/loading-spinner';

const Auth: React.FC = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  React.useEffect(() => {
    if (user) {
      console.log("User already authenticated, redirecting to home page");
      navigate('/home');
    }
  }, [user, navigate]);
  
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center space-y-6 bg-white dark:bg-gray-900 shadow-sm rounded-lg p-8">
            <Pizza className="h-12 w-12 mx-auto" />
            <div className="space-y-2">
              <h1 className="text-2xl font-bold">
                Welcome to DoughLab Pro
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Sign in to access professional pizza dough calculations and recipes
              </p>
            </div>
            
            <AuthForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
