
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTranslation } from "react-i18next";

export type PizzaStyle = "napoletana" | "newyork" | "chicago" | "focaccia" | "brioche" | "baguette";

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
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="chicago" id="pizza-chicago" />
          <Label htmlFor="pizza-chicago" className="cursor-pointer">
            {t('calculator.pizzaStyle.chicago', 'Chicago')}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="focaccia" id="pizza-focaccia" />
          <Label htmlFor="pizza-focaccia" className="cursor-pointer">
            {t('calculator.pizzaStyle.focaccia', 'Focaccia')}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="brioche" id="pizza-brioche" />
          <Label htmlFor="pizza-brioche" className="cursor-pointer">
            {t('calculator.pizzaStyle.brioche', 'Brioche')}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="baguette" id="pizza-baguette" />
          <Label htmlFor="pizza-baguette" className="cursor-pointer">
            {t('calculator.pizzaStyle.baguette', 'Baguette')}
          </Label>
        </div>
      </RadioGroup>
      <div className="p-2 rounded bg-gray-50 text-xs text-gray-600">
        {getStyleDescription(style, t)}
      </div>
    </div>
  );
};

const getStyleDescription = (style: PizzaStyle, t: any) => {
  switch (style) {
    case "napoletana":
      return t('calculator.pizzaStyle.napoletanaDescription');
    case "newyork":
      return t('calculator.pizzaStyle.newyorkDescription');
    case "chicago":
      return t('calculator.pizzaStyle.chicagoDescription', 'Deep-dish style with a thick crust and rich tomato sauce.');
    case "focaccia":
      return t('calculator.pizzaStyle.focacciaDescription', 'Italian flatbread with a crisp exterior and soft interior.');
    case "brioche":
      return t('calculator.pizzaStyle.briocheDescription', 'Rich, buttery French bread with a tender crumb.');
    case "baguette":
      return t('calculator.pizzaStyle.baguetteDescription', 'Long, thin loaf with a crisp crust and chewy interior.');
    default:
      return '';
  }
};

export default PizzaStyleSelect;
