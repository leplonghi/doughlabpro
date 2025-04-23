
import React from "react";
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const DoughCalculatorHeader: React.FC = () => (
  <CardHeader className="bg-pizza-light bg-opacity-40">
    <CardTitle className="text-2xl text-gray-800">Calculadora de Massa</CardTitle>
    <CardDescription>
      Insira os ingredientes e escolha o método preferido de fermentação
    </CardDescription>
  </CardHeader>
);

export default DoughCalculatorHeader;
