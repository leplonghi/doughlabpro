
import { useState, useCallback, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';

export interface Profile {
  id: string;
  username: string | null;
  full_name: string | null;
  avatar_url: string | null;
  updated_at: string | null;
}

export const useProfile = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);

  const fetchProfile = useCallback(async () => {
    if (!user) {
      setProfile(null);
      return;
    }

    setLoading(true);
    try {
      // Create a profile object from user data
      const userProfile: Profile = {
        id: user.id,
        username: user.email || null,
        full_name: user.user_metadata?.full_name || null,
        avatar_url: user.user_metadata?.avatar_url || null,
        updated_at: user.updated_at || null
      };
      
      setProfile(userProfile);
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
  }, [user, t]);

  // Fetch profile when user changes
  useEffect(() => {
    if (user) {
      fetchProfile();
    } else {
      setProfile(null);
    }
  }, [user, fetchProfile]);

  const updateProfile = useCallback(async (updates: Partial<Profile>) => {
    if (!user) return;
    
    setLoading(true);
    try {
      // Update user metadata through Supabase auth
      const { error } = await supabase.auth.updateUser({
        data: {
          full_name: updates.full_name,
          // Add other fields as needed
        }
      });
      
      if (error) throw error;
      
      // Update the local profile state
      setProfile(prev => prev ? { ...prev, ...updates } : null);
      
      toast({
        title: t('profile.success'),
        description: t('profile.profileUpdated'),
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
  }, [user, t]);

  return {
    profile,
    loading,
    fetchProfile,
    updateProfile
  };
};
