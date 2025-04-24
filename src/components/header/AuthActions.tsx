
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useTranslation } from 'react-i18next';
import UserAvatar from './UserAvatar';

const AuthActions: React.FC = () => {
  const { user, signOut } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  if (user) {
    return (
      <div className="flex items-center gap-2">
        <UserAvatar />
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-1"
          onClick={handleSignOut}
        >
          <LogOut size={18} />
          <span className="hidden md:inline">{t('common.logout')}</span>
        </Button>
      </div>
    );
  }

  return (
    <Link to="/auth">
      <Button variant="ghost" size="sm" className="flex items-center gap-1">
        <LogIn size={18} />
        <span className="hidden md:inline">{t('common.login')}</span>
      </Button>
    </Link>
  );
};

export default AuthActions;
