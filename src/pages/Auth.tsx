
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '@/components/auth/AuthForm';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const { t } = useTranslation();
  
  // If user is already authenticated, redirect to calculator
  useEffect(() => {
    if (user && !loading) {
      navigate('/calculator');
    }
  }, [user, loading, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-grow flex items-center justify-center py-10 px-4 bg-gradient-to-br from-white to-pizza-cream/30">
        <Card className="w-full max-w-md shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">{t('auth.signIn')}</CardTitle>
            <CardDescription>
              {t('auth.signInToAccess')}
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <AuthForm />
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-4">
            <p className="text-sm text-center text-gray-500">
              {t('auth.unlockProFeatures')}
            </p>
          </CardFooter>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Auth;
