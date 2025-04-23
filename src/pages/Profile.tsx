
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Loader2, Camera, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Profile {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  updated_at: string | null;
}

const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }

    fetchProfile();
  }, [user, navigate]);

  const fetchProfile = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user?.id)
        .single();

      if (error) {
        throw error;
      }

      if (data) {
        setProfile(data);
        setUsername(data.username || '');
        setFullName(data.full_name || '');
      }
    } catch (error) {
      console.error('Error fetching profile:', error);
      toast({
        title: t('profile.error'),
        description: t('profile.errorFetchingProfile'),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    setUploading(true);
    const file = event.target.files[0];
    const fileExt = file.name.split('.').pop();
    const filePath = `${user?.id}/avatar.${fileExt}`;

    try {
      // Upload to Storage
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true });

      if (uploadError) {
        throw uploadError;
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      // Update profile
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ avatar_url: urlData.publicUrl })
        .eq('id', user?.id);

      if (updateError) {
        throw updateError;
      }

      toast({
        title: t('profile.success'),
        description: t('profile.avatarUpdated'),
      });

      // Refresh profile
      fetchProfile();
    } catch (error) {
      console.error('Error uploading avatar:', error);
      toast({
        title: t('profile.error'),
        description: t('profile.errorUploadingAvatar'),
        variant: "destructive",
      });
    } finally {
      setUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const updateProfile = async () => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          username,
          full_name: fullName,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user?.id);

      if (error) {
        throw error;
      }

      toast({
        title: t('profile.success'),
        description: t('profile.profileUpdated'),
      });
      
      fetchProfile();
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: t('profile.error'),
        description: t('profile.errorUpdatingProfile'),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  if (!user) {
    return null; // Redirect handled in useEffect
  }

  return (
    <div className="container max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">{t('profile.title')}</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>{t('profile.personalInfo')}</CardTitle>
          <CardDescription>{t('profile.personalInfoDescription')}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="relative">
              <Avatar className="w-24 h-24">
                {profile?.avatar_url ? (
                  <AvatarImage src={profile.avatar_url} alt={username || user.email || ''} />
                ) : (
                  <AvatarFallback className="bg-pizza text-white text-xl">
                    <User />
                  </AvatarFallback>
                )}
              </Avatar>
              <Button 
                size="icon" 
                variant="outline" 
                className="absolute -bottom-2 -right-2 rounded-full" 
                onClick={triggerFileInput}
                disabled={uploading}
              >
                {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Camera className="h-4 w-4" />}
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleAvatarUpload}
                disabled={uploading}
              />
            </div>
            
            <div className="flex-1 space-y-4 w-full">
              <div className="space-y-2">
                <Label htmlFor="username">{t('profile.username')}</Label>
                <Input
                  id="username"
                  placeholder={t('profile.enterUsername')}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="fullName">{t('profile.fullName')}</Label>
                <Input
                  id="fullName"
                  placeholder={t('profile.enterFullName')}
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">{t('profile.email')}</Label>
                <Input
                  id="email"
                  value={user.email || ''}
                  disabled
                  className="bg-muted"
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={updateProfile} disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {t('profile.saving')}
              </>
            ) : (
              t('profile.saveChanges')
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProfilePage;
