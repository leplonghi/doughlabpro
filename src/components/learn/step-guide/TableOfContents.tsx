
import React from 'react';
import { List } from 'lucide-react';
import { BakingStep } from '../types';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

interface TableOfContentsProps {
  steps: BakingStep[];
  themeColor?: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ steps, themeColor = 'green' }) => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white p-4 rounded-lg border shadow-sm print:hidden">
      <div className="flex items-center mb-3">
        <List className="h-5 w-5 mr-2 text-gray-600" />
        <h3 className="text-lg font-medium">{t('recipe.quickNavigation')}</h3>
      </div>
      <ScrollArea className="h-auto max-h-48">
        <ul className="space-y-1">
          {steps.map((step, index) => (
            <li key={index}>
              <a 
                href={`#step-${index + 1}`} 
                className={cn(
                  "block px-3 py-1.5 text-sm rounded hover:bg-gray-100",
                  themeColor === 'green' ? 'hover:text-green-700' : 'hover:text-blue-700'
                )}
              >
                {index + 1}. {step.title}
              </a>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};
