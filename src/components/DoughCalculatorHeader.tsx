
import React from "react";
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const DoughCalculatorHeader: React.FC = () => (
  <CardHeader className="space-y-1.5 bg-gradient-to-r from-pizza-light/30 to-background p-6 rounded-t-lg border-b">
    <CardTitle className="text-2xl font-serif">Pizza Dough Calculator</CardTitle>
    <CardDescription className="text-base text-muted-foreground">
      Create the perfect pizza dough with precision
    </CardDescription>
  </CardHeader>
);

export default DoughCalculatorHeader;
