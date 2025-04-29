
import React from "react";
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const DoughCalculatorHeader: React.FC = () => {
  return (
    <CardHeader className="space-y-3 p-6 bg-primary/10 rounded-t-xl border-b">
      <div className="flex justify-center mb-1">
        <img src="/lovable-uploads/15936b17-7234-47a3-a949-d72c0d2932e6.png" alt="DoughLab Pro logo" className="h-10 w-auto" />
      </div>
      <CardTitle className="text-2xl font-sans text-center">
        <span className="text-primary">Dough</span>Lab Pro Calculator
      </CardTitle>
      <CardDescription className="text-base text-center">
        Create pizza and bread dough recipes
      </CardDescription>
    </CardHeader>
  );
};

export default DoughCalculatorHeader;
