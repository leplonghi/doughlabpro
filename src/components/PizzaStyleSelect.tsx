
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export type PizzaStyle = "napoletana" | "newyork";

interface PizzaStyleSelectProps {
  style: PizzaStyle;
  onChange: (value: PizzaStyle) => void;
}

const PizzaStyleSelect: React.FC<PizzaStyleSelectProps> = ({ style, onChange }) => (
  <div className="space-y-2 mb-2">
    <Label className="text-lg font-semibold">Estilo da Pizza</Label>
    <RadioGroup
      value={style}
      onValueChange={(value) => onChange(value as PizzaStyle)}
      className="flex flex-row gap-6 mt-2"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="napoletana" id="pizza-napoletana" />
        <Label htmlFor="pizza-napoletana" className="cursor-pointer">
          Napolitana
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="newyork" id="pizza-newyork" />
        <Label htmlFor="pizza-newyork" className="cursor-pointer">
          New York Style
        </Label>
      </div>
    </RadioGroup>
    <div className="p-2 mt-2 rounded bg-gray-50 text-xs text-gray-600">
      {style === "napoletana"
        ? "Massa macia, leve e assada em alta temperatura por pouco tempo, típica de Nápoles."
        : "Massa mais grossa, elástica, com crosta crocante e fatias maiores, tradicional de Nova York."}
    </div>
  </div>
);

export default PizzaStyleSelect;
