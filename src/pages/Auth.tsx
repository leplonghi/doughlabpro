
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { useAuth } from '@/context/AuthContext';
import { GoogleSignInButton } from '@/components/auth/GoogleSignInButton';
import PageSEO from '@/components/layout/PageSEO';

interface LocationState {
  returnUrl?: string;
}

const Auth: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, loading } = useAuth();
  
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
        title="Sign In" 
        description="Sign in to DoughLab Pro to access all features"
        ogType="website"
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
              Welcome to DoughLab Pro
            </h1>
            
            <p className="text-center text-muted-foreground">
              Sign in to access your account and recipes
            </p>
            
            {/* Google Sign In Button */}
            <GoogleSignInButton />
            
            <div className="text-xs text-gray-500 text-center mt-6">
              By signing in, you agree to our 
              <a href="/privacy" className="text-blue-500 hover:underline ml-1">
                Privacy Policy
              </a> and 
              <a href="/terms" className="text-blue-500 hover:underline ml-1">
                Terms of Service
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
