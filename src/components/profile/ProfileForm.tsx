
import { useAuth } from '@/context/AuthContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useTranslation } from 'react-i18next';
import { Profile } from '@/hooks/useProfile';

interface ProfileFormProps {
  profile: Profile | null;
  onUsernameChange: (value: string) => void;
  onFullNameChange: (value: string) => void;
}

const ProfileForm = ({ profile, onUsernameChange, onFullNameChange }: ProfileFormProps) => {
  const { user } = useAuth();
  const { t } = useTranslation();

  return (
    <div className="flex-1 space-y-4 w-full">
      <div className="space-y-2">
        <Label htmlFor="username">{t('profile.username')}</Label>
        <Input
          id="username"
          placeholder={t('profile.enterUsername')}
          value={profile?.username || ''}
          onChange={(e) => onUsernameChange(e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="fullName">{t('profile.fullName')}</Label>
        <Input
          id="fullName"
          placeholder={t('profile.enterFullName')}
          value={profile?.full_name || ''}
          onChange={(e) => onFullNameChange(e.target.value)}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">{t('profile.email')}</Label>
        <Input
          id="email"
          value={user?.email || ''}
          disabled
          className="bg-muted"
        />
      </div>
    </div>
  );
};

export default ProfileForm;

