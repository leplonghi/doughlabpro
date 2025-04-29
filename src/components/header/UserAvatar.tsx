
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const UserAvatar: React.FC = () => {
  return (
    <Link to="/profile">
      <Avatar className="h-8 w-8 cursor-pointer">
        <AvatarFallback className="bg-pizza text-white">
          <User size={16} />
        </AvatarFallback>
      </Avatar>
    </Link>
  );
};

export default UserAvatar;
