
import React from "react";
import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DoughCalculateButtonProps {
  onClick: () => void;
}

const DoughCalculateButton: React.FC<DoughCalculateButtonProps> = ({
  onClick
}) => {
  return (
    <CardFooter className="bg-background pb-8 pt-4">
      <Button 
        onClick={onClick} 
        className="w-full rounded-lg py-6 text-base font-medium"
      >
        Calculate Recipe
      </Button>
    </CardFooter>
  );
};

export default DoughCalculateButton;
