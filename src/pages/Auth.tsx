
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Pizza } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Auth: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <Card className="border-border/50 shadow-md overflow-hidden">
            <CardHeader className="text-center space-y-2 pb-2 pt-8">
              <div className="mx-auto bg-primary/10 p-3 rounded-full w-16 h-16 flex items-center justify-center">
                <Pizza className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl font-semibold mt-4">
                {t('auth.welcomeBack', 'Welcome to DoughLab Pro')}
              </CardTitle>
              <CardDescription className="text-foreground/70">
                {t('auth.signInPrompt', 'All features are currently free to use!')}
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-8 pt-4 text-center">
              <p className="mb-6">{t('auth.authDisabled', 'Authentication is currently disabled - all features are free!')}</p>
              <Button 
                onClick={() => navigate('/calculator')}
                className="bg-black text-white hover:bg-gray-800"
              >
                {t('auth.startUsing', 'Start Using DoughLab Pro')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Auth;
