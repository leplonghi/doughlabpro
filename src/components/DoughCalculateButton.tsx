import React from "react";
import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
interface DoughCalculateButtonProps {
  onClick: () => void;
}
const DoughCalculateButton: React.FC<DoughCalculateButtonProps> = ({
  onClick
}) => {
  const {
    t
  } = useTranslation();
  return <CardFooter className="bg-gray-50 pb-12 sm:pb-6">
      <Button onClick={onClick} className="w-full focus-visible:ring-pizza-dark bg-yellow-500 hover:bg-yellow-400 rounded-xl px-[9px] text-base">
        {t('calculator.calculate')}
      </Button>
    </CardFooter>;
};
export default DoughCalculateButton;