
import React from "react";
import { CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface DoughCalculateButtonProps {
  onClick: () => void;
}

const DoughCalculateButton: React.FC<DoughCalculateButtonProps> = ({ onClick }) => (
  <CardFooter className="bg-gray-50 pb-12 sm:pb-6">
    <Button 
      onClick={onClick}
      className="w-full bg-pizza hover:bg-pizza-dark focus-visible:ring-pizza-dark"
    >
      Calculate Recipe
    </Button>
  </CardFooter>
);

export default DoughCalculateButton;
