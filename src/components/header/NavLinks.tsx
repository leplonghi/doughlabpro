
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Utensils, Lightbulb } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const NavLinks: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="hidden md:flex items-center gap-4">
      <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors" title={t('common.shop')}>
        <ShoppingCart size={20} />
      </Link>
      <Link to="/toppings" className="text-muted-foreground hover:text-foreground transition-colors" title={t('common.toppings')}>
        <Utensils size={20} />
      </Link>
      <Link to="/tips" className="text-muted-foreground hover:text-foreground transition-colors" title={t('common.tips')}>
        <Lightbulb size={20} />
      </Link>
    </div>
  );
};

export default NavLinks;
