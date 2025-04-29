
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Pizza } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Auth: React.FC = () => {
  const { t } = useTranslation();

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
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Auth;
