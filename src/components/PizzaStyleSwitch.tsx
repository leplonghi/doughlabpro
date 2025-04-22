
import React from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { PizzaStyle } from "./PizzaStyleSelect";

interface PizzaStyleSwitchProps {
  pizzaStyle: PizzaStyle;
  setPizzaStyle: (value: PizzaStyle) => void;
}

const PizzaStyleSwitch: React.FC<PizzaStyleSwitchProps> = ({ pizzaStyle, setPizzaStyle }) => (
  <div className="space-y-2 mb-2">
    <div className="flex items-center justify-between">
      <div className="space-y-0.5">
        <Label htmlFor="pizza-style" className="text-lg font-semibold">Estilo da Pizza</Label>
        <p className="text-sm text-muted-foreground">
          {pizzaStyle === "napoletana" 
            ? "Massa macia, leve e assada em alta temperatura"
            : "Massa mais grossa, elástica, com crosta crocante"
          }
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <Label htmlFor="pizza-style" className="text-sm">Napolitana</Label>
        <Switch
          id="pizza-style"
          checked={pizzaStyle === "newyork"}
          onCheckedChange={(checked) => setPizzaStyle(checked ? "newyork" : "napoletana")}
        />
        <Label htmlFor="pizza-style" className="text-sm">New York</Label>
      </div>
    </div>
  </div>
);

export default PizzaStyleSwitch;
