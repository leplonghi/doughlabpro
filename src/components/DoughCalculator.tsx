
import React, { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription,
  CardFooter 
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import DoughResults from './DoughResults';

type FermentationMethod = 'direct' | 'poolish' | 'biga';
type YeastType = 'fresh' | 'dry';

interface DoughRecipe {
  flour: number;
  water: number;
  salt: number;
  yeast: number;
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
  const [flour, setFlour] = useState<number>(1000);
  const [hydration, setHydration] = useState<number>(65);
  const [yeastType, setYeastType] = useState<YeastType>('dry');
  const [fermentationMethod, setFermentationMethod] = useState<FermentationMethod>('direct');
  const [recipe, setRecipe] = useState<DoughRecipe | null>(null);

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
    let yeast = 0;
    
    if (yeastType === 'fresh') {
      yeast = (flour * 0.3) / 100;
    } else {
      yeast = (flour * 0.1) / 100;
    }

    let newRecipe: DoughRecipe = {
      flour,
      water,
      salt,
      yeast
    };

    if (fermentationMethod === 'poolish') {
      const poolishFlour = (flour * 30) / 100;
      const poolishWater = poolishFlour; // 100% hydration
      const poolishYeast = (poolishFlour * 0.1) / 100;
      
      newRecipe = {
        flour: flour - poolishFlour,
        water: water - poolishWater,
        salt,
        yeast: 0,
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
      description: "Sua receita de pizza napolitana foi calculada com sucesso!",
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4">
      <Card className="mb-8">
        <CardHeader className="bg-pizza-light bg-opacity-40">
          <CardTitle className="text-2xl text-gray-800">Calculadora de Massa</CardTitle>
          <CardDescription>
            Insira a quantidade de farinha e escolha seu método de fermentação preferido
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="flour">Quantidade de Farinha (gramas)</Label>
              <Input 
                id="flour" 
                type="number" 
                value={flour} 
                onChange={(e) => setFlour(Number(e.target.value))}
                min="0"
                placeholder="Ex: 1000"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="hydration">Hidratação (%)</Label>
              <div className="flex items-center gap-4">
                <Input 
                  id="hydration" 
                  type="number" 
                  value={hydration} 
                  onChange={(e) => setHydration(Number(e.target.value))}
                  min="50"
                  max="90"
                  className="w-24"
                />
                <div className="flex-1">
                  <input
                    type="range"
                    min="50"
                    max="90"
                    value={hydration}
                    onChange={(e) => setHydration(Number(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>50%</span>
                    <span>65%</span>
                    <span>80%</span>
                    <span>90%</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-4" />
            
            <div className="space-y-3">
              <Label>Tipo de Fermento</Label>
              <RadioGroup 
                value={yeastType} 
                onValueChange={(value) => setYeastType(value as YeastType)}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fresh" id="fresh" />
                  <Label htmlFor="fresh">Fermento Fresco (0,3%)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dry" id="dry" />
                  <Label htmlFor="dry">Fermento Seco (0,1%)</Label>
                </div>
              </RadioGroup>
            </div>

            <Separator className="my-4" />
            
            <div className="space-y-3">
              <Label htmlFor="fermentation-method">Método de Fermentação</Label>
              <Select 
                value={fermentationMethod}
                onValueChange={(value) => setFermentationMethod(value as FermentationMethod)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um método" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="direct">Direto</SelectItem>
                  <SelectItem value="poolish">Poolish</SelectItem>
                  <SelectItem value="biga">Biga</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="p-3 bg-gray-50 rounded-md text-sm mt-2">
                {fermentationMethod === 'direct' && (
                  <p>Método direto: todos os ingredientes são misturados de uma só vez. Tempo de fermentação: 8-24h.</p>
                )}
                {fermentationMethod === 'poolish' && (
                  <p>Poolish: pré-fermento líquido (100% hidratação) usando 30% da farinha. Fermentação prévia: 8-16h.</p>
                )}
                {fermentationMethod === 'biga' && (
                  <p>Biga: pré-fermento firme (50% hidratação) usando 50% da farinha. Fermentação prévia: 12-24h.</p>
                )}
              </div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="bg-gray-50">
          <Button 
            onClick={calculateRecipe} 
            className="w-full bg-pizza hover:bg-pizza-dark"
          >
            Calcular Receita
          </Button>
        </CardFooter>
      </Card>

      {recipe && <DoughResults recipe={recipe} fermentationMethod={fermentationMethod} />}
    </div>
  );
};

export default DoughCalculator;
