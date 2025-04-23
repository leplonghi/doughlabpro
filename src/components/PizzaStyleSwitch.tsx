
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
            {pizzaStyle === "napoletana" 
              ? t('calculator.pizzaStyle.napoletanaDescription')
              : t('calculator.pizzaStyle.newyorkDescription')
            }
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
          />
          <Label htmlFor="pizza-style" className={`text-sm ${pizzaStyle === "newyork" ? "font-medium" : ""}`}>
            {t('calculator.pizzaStyle.newyork')}
          </Label>
        </div>
      </div>
    </div>
  );
};

export default PizzaStyleSwitch;
