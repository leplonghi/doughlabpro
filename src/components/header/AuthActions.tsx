
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, LogOut, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useTranslation } from 'react-i18next';
import UserAvatar from './UserAvatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const AuthActions: React.FC = () => {
  const { user, signOut, loading } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };
  
  const handleProfileClick = () => {
    navigate('/profile');
  };

  if (loading) {
    return (
      <Button variant="ghost" size="sm" disabled className="opacity-50">
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-foreground mr-2"></span>
        {t('common.loading')}
      </Button>
    );
  }

  if (user) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            <UserAvatar />
            <span className="hidden md:inline-block max-w-[100px] truncate">
              {user.email?.split('@')[0]}
            </span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={handleProfileClick}>
            <User className="mr-2 h-4 w-4" />
            {t('common.profile')}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            {t('common.logout')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      className="flex items-center gap-1"
      onClick={() => navigate('/auth')}
    >
      <LogIn size={18} />
      <span className="hidden md:inline">{t('common.login')}</span>
    </Button>
  );
};

export default AuthActions;
