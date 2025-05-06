
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  pathname?: string;
  locales?: { [key: string]: string };
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage = '/lovable-uploads/15936b17-7234-47a3-a949-d72c0d2932e6.png',
  ogType = 'website',
  pathname,
  locales,
  children
}) => {
  const { t, i18n } = useTranslation();
  
  // Default title and descriptions with translations
  const defaultTitle = t('seo.defaultTitle', 'DoughLab Pro - Your Perfect Dough Calculator');
  const defaultDescription = t('seo.defaultDescription', 'Calculate perfect pizza dough recipes, learn baking techniques, and master the art of dough making with DoughLab Pro.');
  const defaultKeywords = t('seo.defaultKeywords', 'dough calculator, pizza dough, bread recipe, baking, fermentation, hydration calculator');
  
  // Use provided values or defaults
  const seoTitle = title ? `${title} | DoughLab Pro` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;
  
  // Base URL and current URL
  const baseUrl = 'https://doughlabpro.lovable.app';
  const seoUrl = pathname ? `${baseUrl}${pathname}` : baseUrl;
  const currentLanguage = i18n.language;
  
  return (
    <Helmet>
      {/* Basic meta tags */}
      <html lang={currentLanguage} />
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={seoUrl} />
      
      {/* Open Graph meta tags */}
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:site_name" content="DoughLab Pro" />
      
      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />
      
      {/* Alternate language versions */}
      {locales && Object.entries(locales).map(([lang, url]) => (
        <link 
          rel="alternate" 
          hrefLang={lang} 
          href={`${baseUrl}${url}`} 
          key={lang} 
        />
      ))}
      
      {children}
    </Helmet>
  );
};

export default SEO;
