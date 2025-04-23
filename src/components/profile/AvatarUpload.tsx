
import { useState, useRef } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Loader2, Camera, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Profile } from '@/hooks/useProfile';

interface AvatarUploadProps {
  profile: Profile | null;
  onUploadComplete: () => void;
}

const AvatarUpload = ({ profile, onUploadComplete }: AvatarUploadProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0 || !user) {
      return;
    }

    setUploading(true);
    const file = event.target.files[0];
    const fileExt = file.name.split('.').pop();
    const filePath = `${user.id}/avatar.${fileExt}`;

    try {
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true });

      if (uploadError) {
        throw uploadError;
      }

      const { data: urlData } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      const { error: updateError } = await supabase
        .from('profiles')
        .update({ avatar_url: urlData.publicUrl })
        .eq('id', user.id);

      if (updateError) {
        throw updateError;
      }

      toast({
        title: t('profile.success'),
        description: t('profile.avatarUpdated'),
      });

      onUploadComplete();
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

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative">
      <Avatar className="w-24 h-24">
        {profile?.avatar_url ? (
          <AvatarImage src={profile.avatar_url} alt={profile.username || ''} />
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
  );
};

export default AvatarUpload;

