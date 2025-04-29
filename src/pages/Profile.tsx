
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

const ProfilePage = () => {
  const { t } = useTranslation();

  return (
    <div className="container max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">{t('profile.title', 'Profile')}</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>{t('profile.personalInfo', 'Personal Information')}</CardTitle>
          <CardDescription>
            {t('profile.personalInfoDescription', 'Authentication is currently disabled. All features are free to use!')}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-muted-foreground">
            {t('profile.authDisabled', 'User profiles are currently disabled as all features are free to use.')}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
