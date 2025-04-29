
import React from "react";
import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import UsageWarning from "./usage/UsageWarning"; 
import ProButton from "./usage/ProButton";

interface DoughCalculateButtonProps {
  onClick: () => void;
}

const DoughCalculateButton: React.FC<DoughCalculateButtonProps> = ({
  onClick
}) => {
  // For demo purposes, we'll show 5 calculations left
  // In a real app, this would come from a user state or API
  const calculationsLeft = 5;
  
  return (
    <>
      {calculationsLeft < 6 && <UsageWarning calculationsLeft={calculationsLeft} />}
      
      <CardFooter className="bg-background pb-8 pt-4 flex flex-col gap-4">
        <Button 
          onClick={onClick} 
          className="w-full rounded-lg py-6 text-base font-medium"
        >
          Calculate Recipe
        </Button>
        
        <div className="flex justify-end w-full">
          <ProButton />
        </div>
      </CardFooter>
    </>
  );
};

export default DoughCalculateButton;
