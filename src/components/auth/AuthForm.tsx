
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';
import { useTranslation } from 'react-i18next';

export function AuthForm() {
  const { signInWithGoogle } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      const { error } = await signInWithGoogle();
      
      if (error) throw error;
    } catch (error: any) {
      toast.error(error.message || t('auth.unexpectedError', 'An unexpected error occurred'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Button
        className="w-full bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 h-11"
        onClick={handleGoogleSignIn}
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            {t('common.pleaseWait')}
          </span>
        ) : (
          <span className="flex items-center gap-3">
            Continue with Google
          </span>
        )}
      </Button>
    </div>
  );
};
