
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-4 md:py-6 mt-8 md:mt-12">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p className="text-sm">
          © {new Date().getFullYear()} Pizza Dough Calculator
        </p>
        <p className="text-xs mt-2">
          Inspired by Pizza lovers!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
