
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { doughTypes, recipePresets } from '@/data/learnData';
import LearnContent from '@/components/learn/LearnContent';
import AdBanner from '@/components/monetization/AdBanner';
import { Book, Info } from 'lucide-react';

const Learn: React.FC = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <AdBanner />
        
        <div className="flex items-center mb-2 text-green-600">
          <Book className="mr-2 h-6 w-6" />
          <h1 className="text-3xl font-bold">Learn to Bake</h1>
        </div>
        
        <p className="text-lg text-muted-foreground mb-6">
          Follow our step-by-step guides to make perfect dough every time
        </p>
        
        <div className="bg-green-50 border border-green-100 rounded-lg p-4 mb-8">
          <div className="flex items-start">
            <Info className="h-5 w-5 text-green-600 mt-0.5 mr-2" />
            <div>
              <h3 className="font-medium text-green-800">Beginner&apos;s Guide</h3>
              <p className="mt-2 text-green-700">
                This guided experience will teach you the basics of making different types of dough.
                We&apos;ll walk you through each step with detailed instructions, tips, and timers to help you achieve perfect results.
              </p>
            </div>
          </div>
        </div>
        
        <LearnContent doughTypes={doughTypes} recipePresets={recipePresets} />
      </div>
    </PageLayout>
  );
};

export default Learn;
