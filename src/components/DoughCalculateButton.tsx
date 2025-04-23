
import React from "react";
import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DoughCalculateButtonProps {
  onClick: () => void;
}

const DoughCalculateButton: React.FC<DoughCalculateButtonProps> = ({ onClick }) => (
  <CardFooter className="bg-gray-50">
    <Button 
      onClick={onClick}
      className="w-full bg-pizza hover:bg-pizza-dark"
    >
      Calcular Receita
    </Button>
  </CardFooter>
);

export default DoughCalculateButton;
