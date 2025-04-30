
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthForm } from '@/components/auth/AuthForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const { t } = useTranslation();
  
  // If user is already authenticated, redirect to home
  useEffect(() => {
    if (user && !loading) {
      navigate('/home');
    }
  }, [user, loading, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex-grow flex items-center justify-center py-10 px-4 bg-gradient-to-b from-white via-white to-pizza-cream/20">
        <Card className="w-full max-w-md rounded-xl shadow-xl border-0 overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-pizza-cream/5 to-pizza-cream/20 z-0"></div>
          
          <CardHeader className="space-y-2 text-center relative z-10 pb-6">
            <CardTitle className="text-3xl font-bold text-gray-800">{t('auth.signIn')}</CardTitle>
            <CardDescription className="text-gray-600 text-lg">
              {t('auth.signInToAccess')}
            </CardDescription>
          </CardHeader>
          
          <CardContent className="grid gap-6 relative z-10 px-8">
            <AuthForm />
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default Auth;
