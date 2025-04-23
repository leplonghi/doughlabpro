
import React from 'react';
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from 'react-router-dom';
import { Google } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/`
      }
    });

    if (error) {
      console.error('Error signing in with Google:', error.message);
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
        >
          <Google className="w-4 h-4" />
          Continue with Google
        </Button>
      </div>
    </div>
  );
};

export default Auth;
