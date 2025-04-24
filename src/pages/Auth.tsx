
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { Pizza } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { AuthForm } from '@/components/auth/AuthForm';
import LoadingSpinner from '@/components/ui/loading-spinner';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

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
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <Card className="border-border/50 shadow-md overflow-hidden">
            <CardHeader className="text-center space-y-2 pb-2 pt-8">
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                <Pizza className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-semibold mt-4">
                {t('auth.welcomeBack', 'Welcome to DoughLab Pro')}
              </CardTitle>
              <CardDescription className="text-foreground/70">
                {t('auth.signInPrompt', 'Sign in to access professional pizza dough calculations and recipes')}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="px-8 pb-8 pt-2">
              <AuthForm />
              
              <p className="mt-6 text-center text-sm text-foreground/70">
                {t('auth.termsNotice', 'By signing in, you agree to our')}
                {' '}
                <a href="/privacy" className="text-primary hover:underline">
                  {t('auth.termsLink', 'Terms of Service')}
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Auth;
