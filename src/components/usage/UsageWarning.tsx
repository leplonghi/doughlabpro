
import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

interface UsageWarningProps {
  calculationsLeft: number;
}

const UsageWarning: React.FC<UsageWarningProps> = ({ calculationsLeft }) => {
  return (
    <Alert className="mb-6 border-amber-200 bg-amber-50">
      <Info className="h-5 w-5 text-amber-500" />
      <AlertTitle className="text-amber-800 font-medium">Free Plan</AlertTitle>
      <AlertDescription className="text-amber-700">
        You have {calculationsLeft} free calculations remaining. Upgrade to Pro for unlimited access.
      </AlertDescription>
    </Alert>
  );
};

export default UsageWarning;
