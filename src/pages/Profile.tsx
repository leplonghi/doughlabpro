
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ProfilePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="container max-w-3xl mx-auto py-10 px-4 flex-grow">
        <h1 className="text-3xl font-bold mb-8">{t('profile.title', 'Profile')}</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>{t('profile.personalInfo', 'Personal Information')}</CardTitle>
            <CardDescription>
              {t('profile.personalInfoDescription', 'Authentication is currently disabled. All features are free to use!')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-center text-muted-foreground mb-6">
              {t('profile.authDisabled', 'User profiles are currently disabled as all features are free to use.')}
            </p>
            <div className="flex justify-center">
              <Button onClick={() => navigate('/calculator')}>
                {t('profile.goToCalculator', 'Go to Dough Calculator')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;
