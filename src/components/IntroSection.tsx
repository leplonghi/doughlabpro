
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const IntroSection: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto mb-10 px-4">
      <Card className="overflow-hidden">
        <div className="bg-pizza-light bg-opacity-40 p-6 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-2">
            Calculadora de Pizza Napolitana
          </h1>
          <p className="text-gray-600 md:text-lg">
            Crie autênticas massas napolitanas com precisão
          </p>
        </div>
        <CardContent className="p-6 md:p-8">
          <div className="prose prose-slate mx-auto">
            <p className="text-gray-700">
              A verdadeira pizza napolitana segue tradições de séculos, com proporções precisas que resultam em uma massa leve e aerada por dentro, mas com bordas crocantes cheias de sabor.
            </p>
            
            <p className="text-gray-700 mt-4">
              Nossa calculadora permite que você:
            </p>
            
            <ul className="list-disc pl-5 space-y-1 text-gray-700 mt-2">
              <li>Calcule os ingredientes com precisão baseando-se na quantidade de farinha</li>
              <li>Escolha entre fermentação direta, poolish ou biga</li>
              <li>Ajuste hidratação para adaptar à sua técnica</li>
              <li>Utilize fermento fresco ou seco com as proporções corretas</li>
            </ul>
            
            <p className="text-gray-700 mt-4">
              Comece inserindo a quantidade de farinha desejada e personalize sua receita!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IntroSection;
