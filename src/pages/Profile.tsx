
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useProfile } from '@/hooks/useProfile';
import { useAuth } from '@/context/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User, Loader2 } from 'lucide-react';
import PageSEO from '@/components/layout/PageSEO';

const ProfilePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { profile, loading } = useProfile();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <PageSEO 
        title={t('profile.title', 'Profile')} 
        description={t('profile.description', 'Manage your account settings')}
        ogType="website"
      />
      <Header />
      
      <div className="container max-w-3xl mx-auto py-10 px-4 flex-grow">
        <h1 className="text-3xl font-bold mb-8">{t('profile.title', 'Profile')}</h1>
        
        <Card>
          <CardHeader>
            <CardTitle>{t('profile.personalInfo', 'Personal Information')}</CardTitle>
            <CardDescription>
              {t('profile.manageAccount', 'Manage your account information')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {loading ? (
              <div className="flex justify-center py-6">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : profile ? (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <Avatar className="h-24 w-24">
                    {profile.avatar_url ? (
                      <AvatarImage src={profile.avatar_url} alt={profile.full_name || 'User'} />
                    ) : (
                      <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                        {profile.full_name ? profile.full_name.charAt(0) : <User />}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  
                  <div className="space-y-2 text-center sm:text-left">
                    <h3 className="font-medium text-lg">{profile.full_name || t('profile.unnamed')}</h3>
                    <p className="text-muted-foreground">{profile.username || profile.id}</p>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <div className="flex justify-center sm:justify-end gap-4">
                    <Button onClick={handleSignOut} variant="outline" className="text-red-600">
                      {t('auth.signOut', 'Sign out')}
                    </Button>
                    <Button onClick={() => navigate('/calculator')}>
                      {t('profile.goToCalculator', 'Go to Dough Calculator')}
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center text-muted-foreground py-4">
                <p>{t('profile.notSignedIn', 'You are not signed in. Please sign in to view your profile.')}</p>
                <Button onClick={() => navigate('/auth')} className="mt-4">
                  {t('auth.signIn', 'Sign In')}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProfilePage;
