
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DoughCalculator from '@/components/DoughCalculator';
import IntroSidebar from '@/components/IntroSidebar';
import { SidebarProvider } from '@/components/ui/sidebar';

const Index: React.FC = () => {
  return (
    <SidebarProvider>
      <div className="flex flex-col min-h-screen w-full bg-pizza-cream bg-opacity-30">
        <Header />
        
        <main className="flex-grow py-6 flex">
          <IntroSidebar />
          <div className="flex-grow px-4">
            <DoughCalculator />
          </div>
        </main>
        
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default Index;
