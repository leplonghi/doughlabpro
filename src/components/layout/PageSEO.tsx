
import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '@/components/SEO';
import { useLocation } from 'react-router-dom';

interface PageSEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  children?: React.ReactNode;
}

const PageSEO: React.FC<PageSEOProps> = ({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  children
}) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  
  // Define alternate language URLs
  const currentPath = location.pathname;
  const alternateLanguages = {
    en: currentPath,
    pt: currentPath,
    es: currentPath
  };
  
  return (
    <SEO
      title={title}
      description={description}
      keywords={keywords}
      ogImage={ogImage}
      ogType={ogType}
      pathname={currentPath}
      locales={alternateLanguages}
    >
      {children}
    </SEO>
  );
};

export default PageSEO;
