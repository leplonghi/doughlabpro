
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
  const [fermentationMethod, setFermentationMethod] = useState<FermentationMethod>('direct');
  const [flour, setFlour] = useState<number>(1000);
  // Sal ajustável: padrão 2,5% da farinha
  const [salt, setSalt] = useState<number>(Math.round(1000 * 2.5 / 100));
  const [hydration, setHydration] = useState<number>(65);
  const [yeastType, setYeastType] = useState<YeastType>('dry');
  const [recipe, setRecipe] = useState<DoughRecipe | null>(null);

  const { toast } = useToast();

  // Atualizar sal automaticamente ao mudar a farinha se o usuário ainda não mexeu
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

    let newRecipe: DoughRecipe = {
      flour,
      water,
      salt,
      yeast
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

  // Percentual de sal
  const saltPercent = flour > 0 ? ((salt / flour) * 100).toFixed(2) : "0.00";

  return (
    <div className="max-w-3xl mx-auto px-4">
      <Card className="mb-8">
        <CardHeader className="bg-pizza-light bg-opacity-40">
          <CardTitle className="text-2xl text-gray-800">Calculadora de Massa</CardTitle>
          <CardDescription>
            Insira os ingredientes e escolha o método preferido de fermentação
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6">
          <div className="space-y-6">

            {/* FERMENTAÇÃO -- AGORA PRIMEIRO ITEM */}
            <div className="space-y-3">
              <Label htmlFor="fermentation-method" className="text-lg font-semibold">
                Método de Fermentação
              </Label>
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
                  <>
                    <p><b>Método Direto</b>: todos os ingredientes são misturados de uma só vez.</p>
                    <ul className="list-disc ml-5 mt-2 text-gray-600">
                      <li>Tempo de fermentação: 8-24h (ambiente).</li>
                      <li>Massa desenvolve sabor suave.</li>
                    </ul>
                  </>
                )}
                {fermentationMethod === 'poolish' && (
                  <>
                    <p><b>Poolish</b>: faz-se um pré-fermento líquido usando 30% da farinha total (100% hidratação).</p>
                    <ul className="list-disc ml-5 mt-2 text-gray-600">
                      <li>Prepare o poolish 8-16h antes.</li>
                      <li>Adicione o poolish à massa final.</li>
                      <li>Massa ganha leveza, aroma e textura especial.</li>
                    </ul>
                  </>
                )}
                {fermentationMethod === 'biga' && (
                  <>
                    <p><b>Biga</b>: faz-se um pré-fermento firme usando 50% da farinha (50% hidratação).</p>
                    <ul className="list-disc ml-5 mt-2 text-gray-600">
                      <li>Prepare a biga 12-24h antes.</li>
                      <li>Adicione a biga à massa final.</li>
                      <li>Massa mais resistente e com aroma intenso.</li>
                    </ul>
                  </>
                )}
              </div>

              <div>
                {fermentationMethod === 'poolish' && (
                  <div className="mt-2 p-3 bg-yellow-50 rounded">
                    <b>Poolish:</b> Utilize fermento seco (0,1%) ou fresco (0,3%) apenas no pré-fermento.<br />
                    Misture 30% da farinha + mesma quantidade de água + fermento.<br />
                    <span className="text-xs text-gray-500">Depois de pronto, adicione o poolish à massa final.</span>
                  </div>
                )}
                {fermentationMethod === 'biga' && (
                  <div className="mt-2 p-3 bg-yellow-50 rounded">
                    <b>Biga:</b> Misture 50% da farinha + 50% de água + fermento.<br />
                    Sove e deixe fermentar antes de usar na massa final.<br />
                    <span className="text-xs text-gray-500">Ideal para quem busca textura mais rústica e sabor profundo.</span>
                  </div>
                )}
              </div>
            </div>

            {/* FARINHA */}
            <div className="space-y-2">
              <Label htmlFor="flour">Quantidade de Farinha (gramas)</Label>
              <Input 
                id="flour" 
                type="number" 
                value={flour} 
                onChange={(e) => {
                  setFlour(Number(e.target.value));
                }}
                min="0"
                placeholder="Ex: 1000"
              />
            </div>
            
            {/* SAL */}
            <div className="space-y-2">
              <Label htmlFor="salt">Sal (gramas)
                <span className="ml-2 text-xs text-gray-500">({saltPercent}% do peso da farinha)</span>
              </Label>
              <Input
                id="salt"
                type="number"
                value={salt}
                onChange={e => setSalt(Number(e.target.value))}
                min="1"
                className="w-32"
              />
            </div>

            {/* HIDRATAÇÃO */}
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
