
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="border-t border-border bg-background/95 py-8 mt-auto">
      <div className="container mx-auto px-4 md:flex md:items-center md:justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm text-foreground/70">
            © {new Date().getFullYear()} DoughLab Pro
          </p>
        </div>
        
        <div className="flex items-center justify-center md:justify-end space-x-4">
          <a href="/privacy" className="text-sm text-foreground/70 hover:text-primary transition-colors">
            {t('common.footer.privacy', 'Privacy Policy')}
          </a>
          <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
            {t('common.footer.terms', 'Terms of Service')}
          </a>
          <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors">
            {t('common.footer.contact', 'Contact')}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
