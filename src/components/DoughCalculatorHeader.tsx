
import React from "react";
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Pizza } from 'lucide-react';

const DoughCalculatorHeader: React.FC = () => {
  return (
    <CardHeader className="space-y-3 p-6 bg-gradient-primary rounded-t-xl border-b">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-sm mb-3">
          <Pizza className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-2xl font-sans text-white text-center">
          DoughLab Pro Calculator
        </CardTitle>
        <CardDescription className="text-base text-white/90 text-center">
          Create pizza and bread dough recipes with precision
        </CardDescription>
      </div>
    </CardHeader>
  );
};

export default DoughCalculatorHeader;
