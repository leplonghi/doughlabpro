
import React from "react";
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const DoughCalculatorHeader: React.FC = () => {
  return (
    <CardHeader className="space-y-3 p-6 bg-red-500/90 rounded-t-xl border-b">
      <CardTitle className="text-2xl font-sans text-center text-white">
        Advanced Dough Calculator
      </CardTitle>
      <CardDescription className="text-base text-center text-white/80">
        Create the perfect dough recipe for your baking needs
      </CardDescription>
    </CardHeader>
  );
};

export default DoughCalculatorHeader;
