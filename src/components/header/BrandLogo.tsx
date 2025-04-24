
import React from 'react';
import { Link } from 'react-router-dom';
import { Pizza } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const BrandLogo: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <Pizza size={32} className="text-black dark:text-white" />
      <h1 className="text-xl md:text-2xl font-medium">
        DoughLab Pro
      </h1>
    </Link>
  );
};

export default BrandLogo;
