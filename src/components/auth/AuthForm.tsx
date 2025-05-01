
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import { Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AuthFormProps {
  returnUrl?: string;
}

export function AuthForm({ returnUrl = '/home' }: AuthFormProps) {
  const { signInWithGoogle } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const { t } = useTranslation();

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      // Clear previous errors from local storage if any
      localStorage.removeItem('supabase.auth.error');
      
      const { error } = await signInWithGoogle(returnUrl);
      
      if (error) throw error;
      
      toast.success(t('auth.signInSuccess'), {
        description: t('auth.redirecting'),
      });
      
    } catch (error: any) {
      console.error('Google Sign In Error:', error);
      toast.error(t('auth.signInFailed'), {
        description: error.message || t('auth.unexpectedError'),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailContinue = () => {
    // This would typically handle email sign-in
    // For now we'll just show a toast
    toast.info("Email sign-in not yet implemented");
  };

  return (
    <div className="space-y-6 w-full">
      {/* Google Sign In Button */}
      <Button
        className="w-full bg-white text-black border border-gray-300 h-12 font-medium flex items-center justify-center gap-3 hover:bg-gray-50"
        onClick={handleGoogleSignIn}
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" />
            {t('common.pleaseWait')}
          </span>
        ) : (
          <>
            <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z" />
                <path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z" />
                <path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z" />
                <path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z" />
              </g>
            </svg>
            {t('auth.continueWithGoogle')}
          </>
        )}
      </Button>

      {/* Separator */}
      <div className="flex items-center gap-4">
        <Separator className="flex-1" />
        <span className="text-sm text-gray-500">{t('common.or')}</span>
        <Separator className="flex-1" />
      </div>

      {/* Email Input */}
      <div className="space-y-4">
        <Input 
          type="email" 
          placeholder={t('auth.workEmailAddress')} 
          className="h-12"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <Button 
          className="w-full h-12 bg-blue-500 hover:bg-blue-600"
          onClick={handleEmailContinue}
          disabled={!email.trim() || isLoading}
        >
          {t('common.continue')}
        </Button>
      </div>
      
      {/* Terms */}
      <div className="text-xs text-gray-500 text-center">
        {t('auth.signingUpMeans')} 
        <Link to="/privacy" className="text-gray-900 hover:underline ml-1">
          {t('common.privacyPolicy')}
        </Link> {t('common.and')} 
        <Link to="/terms" className="text-gray-900 hover:underline">
          {t('common.termsOfService')}
        </Link>
      </div>

      {/* Sign In Link */}
      <div className="text-center">
        <p className="text-sm">
          {t('auth.alreadyHaveAccount')} 
          <Link to="/auth" className="text-blue-500 hover:underline ml-1">
            {t('auth.logIn')}
          </Link>
        </p>
      </div>
    </div>
  );
}
