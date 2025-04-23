
import React from 'react';

const SkipToContent: React.FC = () => {
  return (
    <a 
      href="#results"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:p-4 focus:bg-white focus:z-50 focus:text-pizza focus:border-2 focus:border-pizza focus:rounded-md"
    >
      Skip to Results
    </a>
  );
};

export default SkipToContent;
