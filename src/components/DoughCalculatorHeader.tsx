
import React from "react";
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const DoughCalculatorHeader: React.FC = () => (
  <CardHeader className="bg-pizza-light bg-opacity-40">
    <CardTitle className="text-2xl text-gray-800">Dough Calculator</CardTitle>
    <CardDescription className="text-base">
      Enter ingredients and choose your preferred fermentation method
    </CardDescription>
  </CardHeader>
);

export default DoughCalculatorHeader;
