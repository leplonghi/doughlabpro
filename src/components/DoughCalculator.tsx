import React, { useState } from 'react';
import { 
  Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import DoughResults from './DoughResults';
import FermentationMethodSelect from './FermentationMethodSelect';
import DoughInputs from './DoughInputs';
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { PizzaStyle } from "./PizzaStyleSelect";
import { Wheat, Droplet, FlaskConical } from "lucide-react";
import DoughCalculatorHeader from './DoughCalculatorHeader';
import DoughCalculateButton from './DoughCalculateButton';
import PizzaStyleSwitch from './PizzaStyleSwitch';

type FermentationMethod = 'direct' | 'poolish' | 'biga';
type YeastType = 'fresh' | 'dry';

interface DoughRecipe {
  flour: number;
  water: number;
  salt: number;
  yeast: number;
  oil?: number; // azeite só para newyork
  poolish?: {
    flour: number;
    water: number;
    yeast: number;
  };
  biga?: {
    flour: number;
    water: number;
    yeast: number;
  };
}

const DoughCalculator: React.FC = () => {
  const [pizzaStyle, setPizzaStyle] = useState<PizzaStyle>("napoletana");
  const [fermentationMethod, setFermentationMethod] = useState<FermentationMethod>("direct");
  const [flour, setFlour] = useState<number>(1000);
  const [salt, setSalt] = useState<number>(Math.round(1000 * 2.5 / 100));
  const [hydration, setHydration] = useState<number>(65);
  const [yeastType, setYeastType] = useState<YeastType>("dry");
  const [recipe, setRecipe] = useState<DoughRecipe | null>(null);

  const { toast } = useToast();

  React.useEffect(() => {
    setSalt(Math.round(flour * 2.5 / 100));
  }, [flour]);

  const calculateRecipe = () => {
    if (!flour || flour <= 0) {
      toast({
        title: "Quantidade de farinha inválida",
        description: "Por favor, insira uma quantidade válida de farinha.",
        variant: "destructive"
      });
      return;
    }

    if (hydration < 50 || hydration > 90) {
      toast({
        title: "Hidratação inválida",
        description: "Por favor, insira uma hidratação entre 50% e 90%.",
        variant: "destructive"
      });
      return;
    }

    if (!salt || salt < 1) {
      toast({
        title: "Sal inválido",
        description: "Por favor, insira uma quantidade válida de sal.",
        variant: "destructive"
      });
      return;
    }

    const water = (flour * hydration) / 100;
    let yeast = 0;

    if (yeastType === 'fresh') {
      yeast = (flour * 0.3) / 100;
    } else {
      yeast = (flour * 0.1) / 100;
    }

    const oil = pizzaStyle === "napoletana" ? 0 : (flour * 2.5) / 100;
    console.log("Pizza style:", pizzaStyle, "Oil calculated:", oil);

    let newRecipe: DoughRecipe = {
      flour,
      water,
      salt,
      yeast,
      oil
    };

    if (fermentationMethod === 'poolish') {
      const poolishFlour = (flour * 30) / 100;
      const poolishWater = poolishFlour; // 100% hidratação
      const poolishYeast = (poolishFlour * 0.1) / 100;

      newRecipe = {
        flour: flour - poolishFlour,
        water: water - poolishWater,
        salt,
        yeast: 0,
        oil,
        poolish: {
          flour: poolishFlour,
          water: poolishWater,
          yeast: poolishYeast
        }
      };
    } else if (fermentationMethod === 'biga') {
      const bigaFlour = (flour * 50) / 100;
      const bigaWater = (bigaFlour * 50) / 100;
      const bigaYeast = (bigaFlour * 0.1) / 100;

      newRecipe = {
        flour: flour - bigaFlour,
        water: water - bigaWater,
        salt,
        yeast: 0,
        oil,
        biga: {
          flour: bigaFlour,
          water: bigaWater,
          yeast: bigaYeast
        }
      };
    }

    setRecipe(newRecipe);

    toast({
      title: "Receita calculada",
      description:
        pizzaStyle === "napoletana"
          ? "Sua receita de pizza napolitana foi calculada com sucesso!"
          : "Sua receita de pizza New York Style foi calculada com sucesso!",
    });
  };

  const saltPercent = flour > 0 ? ((salt / flour) * 100).toFixed(2) : "0.00";

  return (
    <div className="max-w-3xl mx-auto px-4">
      <Card className="mb-8">
        <DoughCalculatorHeader />
        <CardContent className="pt-6 space-y-6">
          <PizzaStyleSwitch
            pizzaStyle={pizzaStyle}
            setPizzaStyle={setPizzaStyle}
          />
          <FermentationMethodSelect
            fermentationMethod={fermentationMethod}
            onChange={setFermentationMethod}
          />
          <DoughInputs
            flour={flour}
            setFlour={setFlour}
            salt={salt}
            setSalt={setSalt}
            hydration={hydration}
            setHydration={setHydration}
            saltPercent={saltPercent}
            yeastType={yeastType}
            setYeastType={setYeastType}
          />
        </CardContent>
        <DoughCalculateButton onClick={calculateRecipe} />
      </Card>

      {recipe && (
        <DoughResults 
          recipe={recipe} 
          fermentationMethod={fermentationMethod}
          pizzaStyle={pizzaStyle}
        />
      )}
    </div>
  );
};

export default DoughCalculator;
