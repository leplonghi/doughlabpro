
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Utensils, Lightbulb } from 'lucide-react';

const NavLinks: React.FC = () => {
  return (
    <div className="hidden md:flex items-center gap-4">
      <Link to="/shop" className="text-muted-foreground hover:text-foreground transition-colors" title="Shop">
        <ShoppingCart size={20} />
      </Link>
      <Link to="/toppings" className="text-muted-foreground hover:text-foreground transition-colors" title="Toppings">
        <Utensils size={20} />
      </Link>
      <Link to="/tips" className="text-muted-foreground hover:text-foreground transition-colors" title="Tips">
        <Lightbulb size={20} />
      </Link>
    </div>
  );
};

export default NavLinks;
