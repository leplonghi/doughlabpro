import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const UserMenu: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  // Handle sign out
  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  // If not logged in, show login button
  if (!user) {
    return (
      <Button 
        variant="ghost" 
        size="sm" 
        className="flex items-center gap-2"
        onClick={() => navigate('/auth')}
      >
        <LogIn size={18} />
        <span className="hidden md:inline">{t('auth.signIn', 'Sign in')}</span>
      </Button>
    );
  }

  // Get the user's name and avatar from Google auth
  const userName = user.user_metadata?.full_name || user.email || 'User';
  const avatarUrl = user.user_metadata?.avatar_url;

  // Otherwise, show user avatar with dropdown
  return (
    <div className="flex items-center gap-2">
      {/* Show user name */}
      <span className="hidden md:inline text-sm font-medium">
        {userName}
      </span>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="h-8 w-8 cursor-pointer">
            {avatarUrl ? (
              <AvatarImage src={avatarUrl} alt={userName} />
            ) : (
              <AvatarFallback className="bg-black text-white">
                {userName.charAt(0)}
              </AvatarFallback>
            )}
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => navigate('/profile')}>
            {t('profile.title', 'Profile')}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => navigate('/calculator')}>
            Dough Calculator
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem 
            onClick={handleSignOut}
            className="text-red-600 focus:text-red-600"
          >
            {t('auth.signOut', 'Sign out')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
