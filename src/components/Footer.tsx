
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {t('common.calculator')}
        </p>
        <p className="text-xs text-muted-foreground/80 mt-2">
          {t('common.footer.tagline')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
