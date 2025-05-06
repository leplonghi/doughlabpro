
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { doughTypes, recipePresets } from '@/data/learnData';
import LearnContent from '@/components/learn/LearnContent';
import AdBanner from '@/components/monetization/AdBanner';
import { BookOpen, Info } from 'lucide-react';

const Learn: React.FC = () => {
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <AdBanner />
        
        <div className="flex items-center mb-2 text-green-600">
          <BookOpen className="mr-2 h-6 w-6" />
          <h1 className="text-3xl font-bold">Learn to Bake</h1>
        </div>
        
        <p className="text-lg text-muted-foreground mb-6">
          Master the art of dough making with our comprehensive visual guides
        </p>
        
        <div className="bg-green-50 border border-green-100 rounded-lg p-6 mb-8">
          <div className="flex items-start">
            <Info className="h-5 w-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-green-800 text-lg">Beginner&apos;s Interactive Guide</h3>
              <p className="mt-2 text-green-700">
                This visual learning experience will teach you the fundamentals of making different types of dough.
                Each step includes detailed photos, expert tips, and helpful explanations to help you understand 
                the science behind great bread and pizza dough.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <h4 className="font-medium text-green-800 mb-1">Visual Learning</h4>
                  <p className="text-sm text-green-700">Step-by-step photos guide you through each technique</p>
                </div>
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <h4 className="font-medium text-green-800 mb-1">Expert Knowledge</h4>
                  <p className="text-sm text-green-700">Understand the science and principles behind baking</p>
                </div>
                <div className="bg-white p-3 rounded-md shadow-sm">
                  <h4 className="font-medium text-green-800 mb-1">Practical Tips</h4>
                  <p className="text-sm text-green-700">Real-world advice from experienced bakers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <LearnContent doughTypes={doughTypes} recipePresets={recipePresets} />
      </div>
    </PageLayout>
  );
};

export default Learn;
