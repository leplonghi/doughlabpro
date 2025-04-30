import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, LogIn } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslation } from 'react-i18next';

const UserAvatar: React.FC = () => {
  const { user, signOut, isPro } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();

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
        <span className="hidden md:inline">{t('auth.signInWithGoogle')}</span>
      </Button>
    );
  }

  // Get the user's name
  const userName = user.user_metadata.full_name || user.email || 'User';

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
            {user.user_metadata.avatar_url ? (
              <AvatarImage src={user.user_metadata.avatar_url} alt={userName} />
            ) : (
              <AvatarFallback className="bg-pizza text-white">
                {user.user_metadata.full_name ? 
                  `${user.user_metadata.full_name.charAt(0)}` : 
                  <User size={16} />
                }
              </AvatarFallback>
            )}
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>
            {userName}
            {isPro && (
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">
                PRO
              </span>
            )}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate('/profile')}>
            {t('profile.title', 'Profile')}
          </DropdownMenuItem>
          {!isPro && (
            <DropdownMenuItem onClick={() => navigate('/upgrade')}>
              {t('upgradeToPro', 'Upgrade to Pro')}
            </DropdownMenuItem>
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem 
            onClick={async () => {
              await signOut();
              navigate('/');
            }}
            className="text-red-600 focus:text-red-600"
          >
            {t('auth.signOut', 'Sign out')}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserAvatar;
