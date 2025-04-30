
import { useState, useCallback } from 'react';
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from 'react-i18next';

export interface Profile {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  updated_at: string | null;
}

export const useProfile = () => {
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);

  const fetchProfile = useCallback(async () => {
    setLoading(true);
    try {
      // Simulate profile data since auth is disabled
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock profile data
      setProfile({
        id: '123',
        username: 'guest_user',
        full_name: 'Guest User',
        avatar_url: null,
        updated_at: new Date().toISOString()
      });
      
    } catch (error: any) {
      console.error('Error fetching profile:', error);
      toast({
        title: t('profile.error'),
        description: error.message || t('profile.errorFetchingProfile'),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast, t]);

  const updateProfile = useCallback(async (updates: Partial<Profile>) => {
    setLoading(true);
    try {
      // Simulate profile update since auth is disabled
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Mock updated profile
      setProfile(prev => prev ? { ...prev, ...updates } : null);
      
      toast({
        title: t('profile.info'),
        description: t('profile.authDisabled', 'Profile updates are disabled'),
      });
    } catch (error: any) {
      console.error('Error updating profile:', error);
      toast({
        title: t('profile.error'),
        description: error.message || t('profile.errorUpdatingProfile'),
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast, t]);

  return {
    profile,
    loading,
    fetchProfile,
    updateProfile
  };
};
