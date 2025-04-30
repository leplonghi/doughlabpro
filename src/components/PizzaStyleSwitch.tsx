
import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { PizzaStyle } from "./PizzaStyleSelect";
import { useTranslation } from "react-i18next";

interface PizzaStyleSwitchProps {
  pizzaStyle: PizzaStyle;
  setPizzaStyle: (value: PizzaStyle) => void;
}

const PizzaStyleSwitch: React.FC<PizzaStyleSwitchProps> = ({ pizzaStyle, setPizzaStyle }) => {
  const { t } = useTranslation();
  
  return (
    <div className="space-y-2 mb-2">
      <div className="flex flex-col space-y-4">
        <div>
          <Label htmlFor="pizza-style" className="text-lg font-semibold">{t('calculator.pizzaStyle.title')}</Label>
          <p className="text-sm text-muted-foreground">
            {getStyleDescription(pizzaStyle, t)}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Label htmlFor="pizza-style" className={`text-sm ${pizzaStyle === "napoletana" ? "font-medium" : ""}`}>
            {t('calculator.pizzaStyle.napoletana')}
          </Label>
          <Switch
            id="pizza-style"
            checked={pizzaStyle === "newyork"}
            onCheckedChange={(checked) => setPizzaStyle(checked ? "newyork" : "napoletana")}
            className="data-[state=checked]:bg-black data-[state=unchecked]:bg-black/50"
          />
          <Label htmlFor="pizza-style" className={`text-sm ${pizzaStyle === "newyork" ? "font-medium" : ""}`}>
            {t('calculator.pizzaStyle.newyork')}
          </Label>
        </div>
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

export default PizzaStyleSwitch;
