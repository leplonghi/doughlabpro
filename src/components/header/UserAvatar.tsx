
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/context/AuthContext';

const UserAvatar: React.FC = () => {
  const { user } = useAuth();
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('avatar_url')
          .eq('id', user.id)
          .single();
        
        if (error) {
          console.error('Error fetching profile:', error);
          return;
        }
        
        if (data) {
          setAvatarUrl(data.avatar_url);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    
    fetchProfile();
  }, [user]);

  return (
    <Link to="/profile">
      <Avatar className="h-8 w-8 cursor-pointer">
        <AvatarImage src={avatarUrl || undefined} />
        <AvatarFallback className="bg-pizza text-white">
          <User size={16} />
        </AvatarFallback>
      </Avatar>
    </Link>
  );
};

export default UserAvatar;
