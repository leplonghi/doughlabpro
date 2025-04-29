
import React from 'react';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { ExclamationTriangleIcon } from '@radix-ui/react-icons';
import ProButton from './ProButton';

const UsageWarning: React.FC = () => {
  return (
    <Alert variant="destructive" className="mb-6 bg-[#F1F1F1] border-[#ea384c] text-[#ea384c]">
      <ExclamationTriangleIcon className="h-4 w-4 mr-2" />
      <AlertTitle className="font-semibold">Recipe limit reached</AlertTitle>
      <AlertDescription className="mt-2">
        <p className="mb-3">You've reached the maximum recipe limit for the free plan. Upgrade to PRO for unlimited recipes.</p>
        <ProButton className="mt-2" />
      </AlertDescription>
    </Alert>
  );
};

export default UsageWarning;
