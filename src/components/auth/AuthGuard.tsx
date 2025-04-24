
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import LoadingSpinner from '@/components/ui/loading-spinner';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Only redirect if not loading and no user is found
    if (!loading && !user) {
      console.log("No authenticated user, redirecting to auth");
      navigate('/auth');
    }
  }, [user, loading, navigate]);

  if (loading) {
    return <LoadingSpinner />;
  }

  // Only render children if we have a user
  if (!user) {
    return null;
  }

  return <>{children}</>;
}
