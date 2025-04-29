
import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import ProButton from './ProButton';

const UsageWarning: React.FC = () => {
  return (
    <Alert variant="destructive" className="mb-6 bg-[#F1F1F1] border-[#ea384c] text-[#ea384c]">
      <ExclamationTriangleIcon className="h-4 w-4 mr-2" />
      <AlertTitle className="font-semibold">Limite de receitas atingido</AlertTitle>
      <AlertDescription className="mt-2">
        <p className="mb-3">Você atingiu o limite máximo de receitas para o plano gratuito. Atualize para o plano PRO para criar receitas ilimitadas.</p>
        <ProButton className="mt-2" />
      </AlertDescription>
    </Alert>
  );
};

export default UsageWarning;
