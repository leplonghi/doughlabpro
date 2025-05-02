
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
        <LearnContent doughTypes={doughTypes} recipePresets={recipePresets} />
      </div>
    </PageLayout>
  );
};

export default Learn;
