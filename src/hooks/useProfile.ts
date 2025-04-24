
import { useState, useCallback } from 'react';
import { useToast } from "@/hooks/use-toast";
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { useTranslation } from 'react-i18next';

export interface Profile {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  updated_at: string | null;
}

export const useProfile = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);

  const fetchProfile = useCallback(async () => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .maybeSingle();

      if (error) {
        throw error;
      }

      if (data) {
        setProfile(data);
      }
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
  }, [user, toast, t]);

  const updateProfile = useCallback(async (updates: Partial<Profile>) => {
    if (!user) return;
    
    setLoading(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          ...updates,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);

      if (error) {
        throw error;
      }

      toast({
        title: t('profile.success'),
        description: t('profile.profileUpdated'),
      });
      
      await fetchProfile();
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
  }, [user, toast, t, fetchProfile]);

  return {
    profile,
    loading,
    fetchProfile,
    updateProfile
  };
};
