
import React from "react";
import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

interface DoughCalculateButtonProps {
  onClick: () => void;
}

const DoughCalculateButton: React.FC<DoughCalculateButtonProps> = ({ onClick }) => {
  const { t } = useTranslation();
  
  return (
    <CardFooter className="bg-gray-50 pb-12 sm:pb-6">
      <Button 
        onClick={onClick}
        className="w-full bg-pizza hover:bg-pizza-dark focus-visible:ring-pizza-dark"
      >
        {t('calculator.calculate')}
      </Button>
    </CardFooter>
  );
};

export default DoughCalculateButton;
