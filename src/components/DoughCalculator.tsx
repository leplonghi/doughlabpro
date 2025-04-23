import React, { useState } from 'react';
import { 
  Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter 
} from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import DoughResults from './DoughResults';
import FermentationMethodSelect from './FermentationMethodSelect';
import DoughInputs from './DoughInputs';
import DoughCalculatorHeader from './DoughCalculatorHeader';
import DoughCalculateButton from './DoughCalculateButton';
import PizzaStyleSwitch from './PizzaStyleSwitch';
import LanguageSelector, { Language } from './LanguageSelector';
import { PizzaStyle } from './PizzaStyleSelect';

type FermentationMethod = 'direct' | 'poolish' | 'biga';
type YeastType = 'fresh' | 'dry';

interface DoughRecipe {
  flour: number;
  water: number;
  salt: number;
  yeast: number;
  oil: number;
  sugar?: number;
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
  const [yeastType, setYeastType] = useState<YeastType>("dry");
  const [recipe, setRecipe] = useState<DoughRecipe | null>(null);
  const [hydration, setHydration] = useState<number>(60);
  const [language, setLanguage] = useState<Language>("pt");

  const { toast } = useToast();

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

    const water = (flour * hydration) / 100;
    const salt = (flour * 2.5) / 100;
    const yeast = yeastType === 'fresh' ? (flour * 0.3) / 100 : (flour * 0.1) / 100;
    const oil = pizzaStyle === "napoletana" ? 0 : (flour * 2.5) / 100;
    const sugar = pizzaStyle === "napoletana" ? 0 : (flour * 2.5) / 100;

    let newRecipe: DoughRecipe = {
      flour,
      water,
      salt,
      yeast,
      oil,
      sugar
    };

    if (fermentationMethod === 'poolish') {
      const poolishFlour = (flour * 30) / 100;
      const poolishWater = poolishFlour;
      const poolishYeast = (poolishFlour * 0.1) / 100;

      newRecipe = {
        flour: flour - poolishFlour,
        water: water - poolishWater,
        salt,
        yeast: 0,
        oil,
        sugar,
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
        sugar,
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

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      <Card className="mb-8">
        <DoughCalculatorHeader />
        <CardContent className="pt-6 space-y-6">
          <LanguageSelector
            language={language}
            onChange={handleLanguageChange}
          />
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
            hydration={hydration}
            setHydration={setHydration}
            yeastType={yeastType}
            setYeastType={setYeastType}
            pizzaStyle={pizzaStyle}
          />
        </CardContent>
        <DoughCalculateButton onClick={calculateRecipe} />
      </Card>

      {recipe && (
        <DoughResults 
          recipe={recipe} 
          fermentationMethod={fermentationMethod}
          pizzaStyle={pizzaStyle}
          unit="grams"
        />
      )}
    </div>
  );
};

export default DoughCalculator;
