
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pizza Dough Calculator
        </p>
        <p className="text-xs text-muted-foreground/80 mt-2">
          Crafted with love for pizza enthusiasts
        </p>
      </div>
    </footer>
  );
};

export default Footer;
