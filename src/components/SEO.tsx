
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  pathname?: string;
  locales?: { [key: string]: string };
  canonicalUrl?: string;
  structuredData?: Record<string, any>;
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
  canonicalUrl,
  structuredData,
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

  useEffect(() => {
    // Set document title
    document.title = seoTitle;
    
    // Update or create meta tags
    updateMetaTag('description', seoDescription);
    updateMetaTag('keywords', seoKeywords);
    
    // Set viewport for mobile devices
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=5.0');
    
    // Update canonical link
    const canonicalHref = canonicalUrl || seoUrl;
    updateLink('canonical', canonicalHref);
    
    // Set language attribute on HTML tag
    document.documentElement.setAttribute('lang', currentLanguage);
    
    // Set Open Graph meta tags
    updateMetaTag('og:url', seoUrl, 'property');
    updateMetaTag('og:title', seoTitle, 'property');
    updateMetaTag('og:description', seoDescription, 'property');
    updateMetaTag('og:type', ogType, 'property');
    updateMetaTag('og:image', ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`, 'property');
    updateMetaTag('og:site_name', 'DoughLab Pro', 'property');
    
    // Set Twitter meta tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', seoTitle, 'name');
    updateMetaTag('twitter:description', seoDescription, 'name');
    updateMetaTag('twitter:image', ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`, 'name');
    
    // Set alternate language links
    if (locales) {
      // Remove any existing alternate links first
      removeExistingAlternateLinks();
      
      // Add new alternate language links
      Object.entries(locales).forEach(([lang, url]) => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = lang;
        link.href = `${baseUrl}${url}`;
        document.head.appendChild(link);
      });
    }
    
    // Add structured data if provided
    if (structuredData) {
      addStructuredData(structuredData);
    }
    
    return () => {
      // Cleanup function to remove alternate links when component unmounts
      if (locales) {
        removeExistingAlternateLinks();
      }
      
      // Remove structured data if it was added
      if (structuredData) {
        removeStructuredData();
      }
    };
  }, [
    seoTitle,
    seoDescription,
    seoKeywords,
    seoUrl,
    currentLanguage,
    ogType,
    ogImage,
    baseUrl,
    locales,
    canonicalUrl,
    structuredData
  ]);
  
  // Helper function to update meta tags
  const updateMetaTag = (name: string, content: string, attributeName = 'name') => {
    let metaTag = document.querySelector(`meta[${attributeName}="${name}"]`);
    
    if (metaTag) {
      // Update existing tag
      metaTag.setAttribute('content', content);
    } else {
      // Create new tag
      metaTag = document.createElement('meta');
      metaTag.setAttribute(attributeName, name);
      metaTag.setAttribute('content', content);
      document.head.appendChild(metaTag);
    }
  };
  
  // Helper function to update link tags
  const updateLink = (rel: string, href: string) => {
    let linkTag = document.querySelector(`link[rel="${rel}"]`);
    
    if (linkTag) {
      // Update existing link
      linkTag.setAttribute('href', href);
    } else {
      // Create new link
      linkTag = document.createElement('link');
      linkTag.setAttribute('rel', rel);
      linkTag.setAttribute('href', href);
      document.head.appendChild(linkTag);
    }
  };
  
  // Helper function to remove existing alternate links
  const removeExistingAlternateLinks = () => {
    const alternateLinks = document.querySelectorAll('link[rel="alternate"]');
    alternateLinks.forEach(link => {
      document.head.removeChild(link);
    });
  };
  
  // Helper function to add structured data
  const addStructuredData = (data: Record<string, any>) => {
    // Remove any existing structured data first
    removeStructuredData();
    
    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    script.id = 'structured-data';
    document.head.appendChild(script);
  };
  
  // Helper function to remove structured data
  const removeStructuredData = () => {
    const existingScript = document.getElementById('structured-data');
    if (existingScript) {
      document.head.removeChild(existingScript);
    }
  };
  
  // This component doesn't render anything visible
  return <>{children}</>;
};

export default SEO;
