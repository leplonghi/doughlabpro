
import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from '../contexts/LanguageContext';

interface DoughCalculateButtonProps {
  onClick: () => void;
}

const DoughCalculateButton: React.FC<DoughCalculateButtonProps> = ({ onClick }) => {
  const { t } = useLanguage();
  
  return (
    <Button 
      onClick={onClick}
      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
    >
      {t('button.calculate')}
    </Button>
  );
};

export default DoughCalculateButton;
