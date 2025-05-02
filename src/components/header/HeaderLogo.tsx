
import React from 'react';
import { Link } from 'react-router-dom';

export const HeaderLogo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center gap-2">
        <img src="/lovable-uploads/15936b17-7234-47a3-a949-d72c0d2932e6.png" className="h-8 w-auto" alt="DoughLab Pro" />
        <span className="font-medium text-sm"></span>
      </Link>
    </div>
  );
};
