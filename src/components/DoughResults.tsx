
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Clock, FileText, Wheat, Droplet, Flask } from 'lucide-react';
import { PizzaStyle } from "./PizzaStyleSelect";

type FermentationMethod = 'direct' | 'poolish' | 'biga';

interface DoughRecipe {
  flour: number;
  water: number;
  salt: number;
  yeast: number;
  oil?: number; // azeite só na new york style
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

interface DoughResultsProps {
  recipe: DoughRecipe;
  fermentationMethod: FermentationMethod;
  pizzaStyle: PizzaStyle;
}

const DoughResults: React.FC<DoughResultsProps> = ({ recipe, fermentationMethod, pizzaStyle }) => {
  const formatValue = (value: number): string => {
    return value.toFixed(1).replace(/\.0$/, '');
  };

  return (
    <Card className="mb-8">
      <CardHeader className="bg-pizza-light bg-opacity-30">
        <CardTitle>
          {pizzaStyle === "newyork" ? "Sua Receita de Pizza New York Style" : "Sua Receita de Pizza Napolitana"}
        </CardTitle>
        <CardDescription>
          {fermentationMethod === 'direct'
            ? 'Método Direto'
            : fermentationMethod === 'poolish'
              ? 'Método Poolish'
              : 'Método Biga'}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="pt-6">
        <div className="space-y-6">
          {(fermentationMethod === 'poolish' && recipe.poolish) && (
            <div className="recipe-section bg-yellow-50 p-4 rounded-md">
              <h3 className="font-medium text-gray-900 flex items-center gap-2 mb-3">
                <Clock size={18} />
                Poolish (Preparar 8-16h antes)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span className="result-label flex items-center gap-2"><Wheat size={16} /> Farinha:</span>
                  <span className="result-value">{formatValue(recipe.poolish.flour)}g</span>
                </li>
                <li className="flex justify-between">
                  <span className="result-label flex items-center gap-2"><Droplet size={16} /> Água:</span>
                  <span className="result-value">{formatValue(recipe.poolish.water)}g</span>
                </li>
                <li className="flex justify-between">
                  <span className="result-label flex items-center gap-2"><Flask size={16} /> Fermento:</span>
                  <span className="result-value">{formatValue(recipe.poolish.yeast)}g</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">
                Misture e deixe fermentar em temperatura ambiente por 8-16h antes de incorporar à massa final.
              </p>
            </div>
          )}
          
          {(fermentationMethod === 'biga' && recipe.biga) && (
            <div className="recipe-section bg-yellow-50 p-4 rounded-md">
              <h3 className="font-medium text-gray-900 flex items-center gap-2 mb-3">
                <Clock size={18} />
                Biga (Preparar 12-24h antes)
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex justify-between">
                  <span className="result-label flex items-center gap-2"><Wheat size={16} /> Farinha:</span>
                  <span className="result-value">{formatValue(recipe.biga.flour)}g</span>
                </li>
                <li className="flex justify-between">
                  <span className="result-label flex items-center gap-2"><Droplet size={16} /> Água:</span>
                  <span className="result-value">{formatValue(recipe.biga.water)}g</span>
                </li>
                <li className="flex justify-between">
                  <span className="result-label flex items-center gap-2"><Flask size={16} /> Fermento:</span>
                  <span className="result-value">{formatValue(recipe.biga.yeast)}g</span>
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-3">
                Misture e deixe fermentar em temperatura ambiente por 12-24h antes de incorporar à massa final.
              </p>
            </div>
          )}

          <div className="recipe-section">
            <h3 className="font-medium text-gray-900 flex items-center gap-2 mb-3">
              <FileText size={18} />
              Massa Final
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex justify-between">
                <span className="result-label flex items-center gap-2"><Wheat size={16} /> Farinha:</span>
                <span className="result-value">{formatValue(recipe.flour)}g</span>
              </li>
              <li className="flex justify-between">
                <span className="result-label flex items-center gap-2"><Droplet size={16} /> Água:</span>
                <span className="result-value">{formatValue(recipe.water)}g</span>
              </li>
              <li className="flex justify-between">
                <span className="result-label flex items-center gap-2">🧂 Sal:</span>
                <span className="result-value">{formatValue(recipe.salt)}g</span>
              </li>
              {pizzaStyle === "newyork" && recipe.oil !== undefined && (
                <li className="flex justify-between">
                  <span className="result-label flex items-center gap-2">🫒 Azeite:</span>
                  <span className="result-value">{formatValue(recipe.oil)}g</span>
                </li>
              )}
              {fermentationMethod === 'direct' && (
                <li className="flex justify-between">
                  <span className="result-label flex items-center gap-2"><Flask size={16} /> Fermento:</span>
                  <span className="result-value">{formatValue(recipe.yeast)}g</span>
                </li>
              )}
              {(fermentationMethod === 'poolish' || fermentationMethod === 'biga') && (
                <li className="flex justify-between">
                  <span className="result-label flex items-center gap-2">
                    {fermentationMethod === 'poolish' ? '🧊 Poolish preparado:' : '🧊 Biga preparada:'}
                  </span>
                  <span className="result-value">Toda</span>
                </li>
              )}
            </ul>
          </div>

          <div className="bg-pizza-light bg-opacity-30 p-4 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">Dicas de Fermentação</h3>
            {fermentationMethod === 'direct' && (
              <p className="text-sm text-gray-700">
                Deixe a massa fermentar por 8-24 horas em temperatura ambiente (20-22°C) ou na geladeira por mais tempo. 
                A massa deve dobrar de volume e desenvolver um aroma característico.
              </p>
            )}
            {fermentationMethod === 'poolish' && (
              <p className="text-sm text-gray-700">
                Após incorporar o poolish à massa final, deixe fermentar por 4-6 horas em temperatura ambiente.
                Este método confere leveza e sabor complexo à massa.
              </p>
            )}
            {fermentationMethod === 'biga' && (
              <p className="text-sm text-gray-700">
                Após incorporar a biga, deixe fermentar por 3-5 horas. Este método proporciona força à massa e sabor mais intenso.
                Ideal para massas com maior resistência.
              </p>
            )}
          </div>

          <Separator />

          <div className="flex justify-center gap-4">
            <Button variant="outline">
              Salvar Receita
            </Button>
            <Button>
              Nova Receita
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoughResults;
