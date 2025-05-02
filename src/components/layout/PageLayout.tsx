
import React, { ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DoughGuideChat from '@/components/doughguide/DoughGuideChat';

interface PageLayoutProps {
  children: ReactNode;
  showFooter?: boolean;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  children, 
  showFooter = true,
  className = "min-h-screen bg-gradient-to-br from-white to-pizza-cream/30"
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <Header />
      
      <main className="flex-grow">
        {children}
      </main>
      
      {showFooter && <Footer />}
      
      {/* AI Assistant that appears on all pages */}
      <DoughGuideChat />
    </div>
  );
};

export default PageLayout;
