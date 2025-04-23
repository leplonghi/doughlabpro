
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export type PizzaStyle = "napoletana" | "newyork";

interface PizzaStyleSelectProps {
  style: PizzaStyle;
  onChange: (value: PizzaStyle) => void;
}

const PizzaStyleSelect: React.FC<PizzaStyleSelectProps> = ({ style, onChange }) => (
  <div className="space-y-4">
    <Label className="text-lg font-semibold block mb-2">Pizza Style</Label>
    <RadioGroup
      value={style}
      onValueChange={(value) => onChange(value as PizzaStyle)}
      className="flex flex-col gap-3 mb-4"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="napoletana" id="pizza-napoletana" />
        <Label htmlFor="pizza-napoletana" className="cursor-pointer">
          Neapolitan
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="newyork" id="pizza-newyork" />
        <Label htmlFor="pizza-newyork" className="cursor-pointer">
          New York Style
        </Label>
      </div>
    </RadioGroup>
    <div className="p-2 rounded bg-gray-50 text-xs text-gray-600">
      {style === "napoletana"
        ? "Soft, light dough baked at high temperature for a short time, typical of Naples."
        : "Thicker, elastic dough with crispy crust and larger slices, traditional New York style."}
    </div>
  </div>
);

export default PizzaStyleSelect;
