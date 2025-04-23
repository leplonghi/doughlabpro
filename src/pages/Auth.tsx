
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = async () => {
    setIsLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/`,
          queryParams: {
            // Explicitly requesting these scopes to ensure we have the right permissions
            access_type: 'offline',
            prompt: 'consent',
          }
        }
      });

      if (error) {
        console.error('Error signing in with Google:', error.message);
        toast({
          title: "Authentication Error",
          description: error.message,
          variant: "destructive"
        });
      }
    } catch (err) {
      console.error('Unexpected error during Google sign-in:', err);
      toast({
        title: "Authentication Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md p-8 space-y-6 bg-card rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-foreground">
          Welcome to Pizza Dough Calculator
        </h1>
        <p className="text-center text-muted-foreground">
          Sign in to save your recipes and preferences
        </p>
        <Button 
          onClick={signInWithGoogle} 
          className="w-full flex items-center justify-center gap-2"
          variant="outline"
          disabled={isLoading}
        >
          <LogIn className="w-4 h-4" />
          {isLoading ? "Connecting..." : "Continue with Google"}
        </Button>
        {/* Add troubleshooting info */}
        <div className="text-xs text-muted-foreground mt-4">
          <p className="text-center">
            Having trouble? Make sure you've properly configured Google OAuth credentials
            and enabled the necessary APIs in your Google Cloud Console.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
