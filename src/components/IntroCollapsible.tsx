
import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Card } from '@/components/ui/card';
import { useLanguage } from '../hooks/useLanguage';

const IntroCollapsible: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const { t } = useLanguage();

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card className="p-4">
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h2 className="text-lg font-serif font-semibold">
            {t('calculator.description')}
          </h2>
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </CollapsibleTrigger>
        
        <CollapsibleContent className="mt-4">
          <div className="prose prose-slate">
            <p className="text-sm text-gray-700">
              A verdadeira pizza napolitana segue tradições de séculos, com proporções precisas que resultam em uma massa leve e aerada por dentro, mas com bordas crocantes cheias de sabor.
            </p>
            
            <div className="mt-4">
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
                <li>Calcule os ingredientes com precisão baseando-se na quantidade de farinha</li>
                <li>Escolha entre fermentação direta, poolish ou biga</li>
                <li>Ajuste hidratação para adaptar à sua técnica</li>
                <li>Utilize fermento fresco ou seco com as proporções corretas</li>
              </ul>
            </div>
          </div>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
};

export default IntroCollapsible;
