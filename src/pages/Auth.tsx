
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthForm } from '@/components/auth/AuthForm';
import PageSEO from '@/components/layout/PageSEO';

interface LocationState {
  returnUrl?: string;
}

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, loading } = useAuth();
  const { t } = useTranslation();
  
  const state = location.state as LocationState;
  const returnUrl = state?.returnUrl || '/home';
  
  // If user is already authenticated, redirect to return URL or home
  useEffect(() => {
    if (user && !loading) {
      navigate(returnUrl, { replace: true });
    }
  }, [user, loading, navigate, returnUrl]);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <PageSEO 
        title={t('auth.signIn', 'Sign In')} 
        description={t('auth.pageDescription', 'Sign in to DoughLab Pro to access all features')}
      />
      
      <div className="flex-grow flex flex-col items-center justify-center py-10 px-4">
        {/* Logo */}
        <div className="mb-10">
          <img 
            src="/lovable-uploads/15936b17-7234-47a3-a949-d72c0d2932e6.png" 
            alt="DoughLab Pro" 
            className="h-12 w-auto"
          />
        </div>
        
        <Card className="w-full max-w-md border-0 shadow-lg p-6 rounded-lg">
          <div className="space-y-6">
            {/* Heading */}
            <h1 className="text-2xl font-bold text-center text-gray-900">
              {t('auth.welcomeTo')} DoughLab Pro
            </h1>
            
            <p className="text-center text-muted-foreground">
              {t('auth.signInToAccess')}
            </p>
            
            {/* Auth Form */}
            <AuthForm returnUrl={returnUrl} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
