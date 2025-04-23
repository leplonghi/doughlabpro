
import React, { useState, useEffect } from 'react';
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
import { PizzaStyle } from './PizzaStyleSelect';
import SkipToContent from './SkipToContent';

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLiveCalculation, setIsLiveCalculation] = useState<boolean>(false);

  const { toast } = useToast();

  // Form validation
  const validateField = (field: string, value: any) => {
    const newErrors = {...errors};
    
    switch (field) {
      case 'flour':
        if (!value) {
          newErrors.flour = 'Flour amount is required';
        } else if (value < 100) {
          newErrors.flour = 'Minimum amount is 100g';
        } else if (value > 10000) {
          newErrors.flour = 'Maximum amount is 10,000g';
        } else {
          delete newErrors.flour;
        }
        break;
      case 'hydration':
        if (!value) {
          newErrors.hydration = 'Hydration percentage is required';
        } else if (value < 50) {
          newErrors.hydration = 'Minimum hydration is 50%';
        } else if (value > 90) {
          newErrors.hydration = 'Maximum hydration is 90%';
        } else {
          delete newErrors.hydration;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate all fields
  const validateForm = () => {
    const flourValid = validateField('flour', flour);
    const hydrationValid = validateField('hydration', hydration);
    return flourValid && hydrationValid;
  };

  // Calculate recipe function
  const calculateRecipe = () => {
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form.",
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

    if (!isLiveCalculation) {
      toast({
        title: "Recipe calculated",
        description:
          pizzaStyle === "napoletana"
            ? "Your Neapolitan pizza recipe has been calculated successfully!"
            : "Your New York Style pizza recipe has been calculated successfully!",
      });
    }
  };

  // Effect for live calculation
  useEffect(() => {
    // Only run calculation if set to live mode and there are no errors
    if (isLiveCalculation && Object.keys(errors).length === 0 && flour > 0) {
      calculateRecipe();
    }
  }, [flour, hydration, yeastType, pizzaStyle, fermentationMethod, isLiveCalculation]);

  // Enable live calculation after initial manual calculation
  useEffect(() => {
    if (recipe && !isLiveCalculation) {
      setIsLiveCalculation(true);
    }
  }, [recipe]);

  return (
    <div className="w-full max-w-3xl mx-auto px-4 md:px-6">
      <SkipToContent />
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
            hydration={hydration}
            setHydration={setHydration}
            yeastType={yeastType}
            setYeastType={setYeastType}
            pizzaStyle={pizzaStyle}
            errors={errors}
            validateField={validateField}
          />
        </CardContent>
        <DoughCalculateButton onClick={calculateRecipe} />
      </Card>

      <div id="results" tabIndex={-1}>
        {recipe && (
          <DoughResults 
            recipe={recipe} 
            fermentationMethod={fermentationMethod}
            pizzaStyle={pizzaStyle}
            unit="grams"
          />
        )}
      </div>
    </div>
  );
};

export default DoughCalculator;
