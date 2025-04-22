
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto px-4 text-center text-gray-600">
        <p className="text-sm">
          © {new Date().getFullYear()} Calculadora de Pizza Napolitana. Todos os direitos reservados.
        </p>
        <p className="text-xs mt-2">
          Inspirado pela autêntica tradição de pizza napolitana.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
