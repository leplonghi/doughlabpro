
import React from 'react';
import {
  Label
} from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

type FermentationMethod = 'direct' | 'poolish' | 'biga';

interface FermentationMethodSelectProps {
  fermentationMethod: FermentationMethod;
  onChange: (value: FermentationMethod) => void;
}

const FermentationMethodSelect: React.FC<FermentationMethodSelectProps> = ({
  fermentationMethod,
  onChange,
}) => (
  <div className="space-y-3">
    <Label htmlFor="fermentation-method" className="text-lg font-semibold">
      Método de Fermentação
    </Label>
    <Select
      value={fermentationMethod}
      onValueChange={val => onChange(val as FermentationMethod)}
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
);

export default FermentationMethodSelect;
