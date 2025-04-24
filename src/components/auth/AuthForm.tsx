
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

interface AuthFormProps {
  onSuccess: () => void;
}

export function AuthForm({ onSuccess }: AuthFormProps) {
  const { signInWithGoogle } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      const { error } = await signInWithGoogle();
      if (error) throw error;
      onSuccess();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full">
      <Button
        className="w-full bg-black hover:bg-black/90 text-white h-12"
        onClick={handleGoogleSignIn}
        disabled={isLoading}
      >
        {isLoading ? 'Please wait...' : 'Continue with Google'}
      </Button>
    </div>
  );
}
