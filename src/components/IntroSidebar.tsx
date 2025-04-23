
import React from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from '../hooks/useLanguage';

const IntroSidebar: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <Sidebar variant="inset" className="w-[300px] border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t('calculator.description')}</SidebarGroupLabel>
          <SidebarGroupContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="intro">
                <AccordionTrigger className="text-sm">
                  Informações da Pizza Napolitana
                </AccordionTrigger>
                <AccordionContent>
                  <div className="prose prose-slate mx-auto text-sm">
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
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default IntroSidebar;
