
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Pizza } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import LoadingSpinner from '@/components/ui/loading-spinner';

const Auth: React.FC = () => {
  const { user, loading, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user, navigate]);
  
  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Google sign in error:", error);
    }
  };
  
  // Don't render the auth form if we're already authenticated
  if (user) {
    return <LoadingSpinner />;
  }

  // Show a loading spinner while checking authentication
  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950">
      <header className="container mx-auto flex items-center justify-between h-16 px-4 py-8">
        <div className="flex items-center">
          <Pizza size={32} className="text-black dark:text-white" />
          <span className="text-xl font-semibold ml-2">DoughLab Pro</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="/home" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">
            {t('common.menu.home')}
          </a>
          <a href="/toppings" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">
            {t('common.menu.toppings')}
          </a>
          <a href="/sauce" className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300">
            {t('common.menu.sauces')}
          </a>
        </nav>
      </header>
      
      <main className="flex-1 flex items-center justify-center p-6">
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
            
            <Button
              className="w-full py-6 bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 flex items-center justify-center gap-3"
              onClick={handleGoogleSignIn}
              size="lg"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              {t('auth.continueWithGoogle', 'Continue with Google')}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Auth;
