
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { doughTypes, recipePresets } from '@/data/learnData';
import LearnContent from '@/components/learn/LearnContent';
import AdBanner from '@/components/monetization/AdBanner';

const Learn: React.FC = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <AdBanner />
        <h1 className="text-3xl font-bold mb-2">Learn to Bake</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Follow our step-by-step guides to make perfect dough every time
        </p>
        <LearnContent doughTypes={doughTypes} recipePresets={recipePresets} />
      </div>
    </PageLayout>
  );
};

export default Learn;
