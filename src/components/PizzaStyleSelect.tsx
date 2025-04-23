
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTranslation } from "react-i18next";

export type PizzaStyle = "napoletana" | "newyork";

interface PizzaStyleSelectProps {
  style: PizzaStyle;
  onChange: (value: PizzaStyle) => void;
}

const PizzaStyleSelect: React.FC<PizzaStyleSelectProps> = ({ style, onChange }) => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-4">
      <Label className="text-lg font-semibold block mb-2">{t('calculator.pizzaStyle.title')}</Label>
      <RadioGroup
        value={style}
        onValueChange={(value) => onChange(value as PizzaStyle)}
        className="flex flex-col gap-3 mb-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="napoletana" id="pizza-napoletana" />
          <Label htmlFor="pizza-napoletana" className="cursor-pointer">
            {t('calculator.pizzaStyle.napoletana')}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="newyork" id="pizza-newyork" />
          <Label htmlFor="pizza-newyork" className="cursor-pointer">
            {t('calculator.pizzaStyle.newyork')}
          </Label>
        </div>
      </RadioGroup>
      <div className="p-2 rounded bg-gray-50 text-xs text-gray-600">
        {style === "napoletana"
          ? t('calculator.pizzaStyle.napoletanaDescription')
          : t('calculator.pizzaStyle.newyorkDescription')
        }
      </div>
    </div>
  );
};

export default PizzaStyleSelect;
