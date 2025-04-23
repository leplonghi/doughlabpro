import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '../hooks/useLanguage';

const IntroSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="max-w-3xl mx-auto mb-6 md:mb-10 px-4">
      <Card className="overflow-hidden">
        <div className="bg-pizza-light bg-opacity-40 p-4 md:p-6 text-center">
          <h1 className="text-2xl md:text-4xl font-serif font-bold text-gray-800 mb-2">
            {t('header.title')}
          </h1>
          <p className="text-gray-600 text-sm md:text-lg">
            {t('calculator.description')}
          </p>
        </div>
        <CardContent className="p-4 md:p-8">
          <div className="prose prose-slate mx-auto">
            <p className="text-sm md:text-base text-gray-700">
              A verdadeira pizza napolitana segue tradições de séculos, com proporções precisas que resultam em uma massa leve e aerada por dentro, mas com bordas crocantes cheias de sabor.
            </p>
            
            <div className="mt-4 space-y-4">
              <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-gray-700">
                <li>Calcule os ingredientes com precisão baseando-se na quantidade de farinha</li>
                <li>Escolha entre fermentação direta, poolish ou biga</li>
                <li>Ajuste hidratação para adaptar à sua técnica</li>
                <li>Utilize fermento fresco ou seco com as proporções corretas</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IntroSection;
