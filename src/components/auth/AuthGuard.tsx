
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import LoadingSpinner from '@/components/ui/loading-spinner';

interface AuthGuardProps {
  children: React.ReactNode;
  fallbackPath?: string;
}

export function AuthGuard({ children, fallbackPath = '/auth' }: AuthGuardProps) {
  const { user, loading, bypassAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Skip auth check if bypassing
    if (bypassAuth) return;

    if (!loading && !user) {
      // Redirect to auth page with return URL
      navigate(fallbackPath, { 
        state: { returnUrl: location.pathname },
        replace: true 
      });
    }
  }, [user, loading, navigate, location, fallbackPath, bypassAuth]);

  // Skip loading state if bypassing auth
  if (loading && !bypassAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  // Always render children if bypassing auth, otherwise check for authenticated user
  return (bypassAuth || user) ? <>{children}</> : null;
}
