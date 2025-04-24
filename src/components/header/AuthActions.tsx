
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
        <DropdownMenuContent align="end" className="bg-white dark:bg-gray-900">
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
    <div className="flex gap-2">
      <Button 
        variant="outline" 
        onClick={() => navigate('/auth')}
        className="border-gray-300 dark:border-gray-700"
      >
        {t('auth.signUp')}
      </Button>
      <Button 
        variant="default" 
        onClick={() => navigate('/auth')}
        className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
      >
        <LogIn size={18} className="mr-2" />
        {t('auth.login')}
      </Button>
    </div>
  );
};

export default AuthActions;
