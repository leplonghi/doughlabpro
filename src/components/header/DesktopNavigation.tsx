
import React from 'react';
import { Link } from 'react-router-dom';

type MenuItem = {
  title: string;
  path: string;
  icon?: React.ReactNode;
};

interface DesktopNavigationProps {
  menuItems: MenuItem[];
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ menuItems }) => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {menuItems.map(item => (
        <Link 
          key={item.path} 
          to={item.path} 
          className="text-base font-medium text-foreground hover:text-primary transition-colors flex items-center" 
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
    </nav>
  );
};
