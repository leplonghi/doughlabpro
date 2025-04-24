
import React, { useEffect } from 'react';
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
  
  useEffect(() => {
    // If user is already authenticated, redirect to home page
    if (user) {
      console.log("User already authenticated, redirecting to home page");
      navigate('/home');
    }
  }, [user, navigate]);
  
  // Show a loading spinner while checking authentication
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md mx-auto">
          <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg p-8 border border-gray-200 dark:border-gray-800">
            <div className="text-center mb-8">
              <Pizza size={56} className="mx-auto text-black dark:text-white" />
              <h1 className="text-2xl font-bold mt-4">
                {t('auth.welcomeMessage', 'Welcome to DoughLab Pro')}
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                {t('auth.accessDescription', 'Sign in to access professional pizza dough calculations and recipes')}
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
