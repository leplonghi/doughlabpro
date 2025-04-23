
import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export type Language = "pt" | "en";

interface LanguageSelectorProps {
  language: Language;
  onChange: (value: Language) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ language, onChange }) => (
  <div className="space-y-3">
    <Label>Idioma / Language</Label>
    <RadioGroup 
      value={language} 
      onValueChange={(value) => onChange(value as Language)}
      className="flex gap-4"
    >
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="pt" id="pt" />
        <Label htmlFor="pt">Português</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="en" id="en" />
        <Label htmlFor="en">English</Label>
      </div>
    </RadioGroup>
  </div>
);

export default LanguageSelector;
