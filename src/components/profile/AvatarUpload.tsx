
import { useState, useRef } from 'react';
import { useToast } from "@/hooks/use-toast";
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
  const { toast } = useToast();
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const handleAvatarUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }

    setUploading(true);
    try {
      // Just simulate upload since we're not using auth
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      toast({
        title: t('profile.info'),
        description: t('profile.authDisabled', 'Profile features are currently disabled'),
      });
      onUploadComplete();
    } catch (error) {
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
