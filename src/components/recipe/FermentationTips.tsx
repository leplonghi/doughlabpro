
import React from 'react';

interface FermentationTipsProps {
  method: 'direct' | 'poolish' | 'biga';
}

const FermentationTips: React.FC<FermentationTipsProps> = ({ method }) => (
  <div className="bg-pizza-light bg-opacity-30 p-4 rounded-lg">
    <h3 className="font-medium text-gray-900 mb-2">Dicas de Fermentação</h3>
    {method === 'direct' && (
      <p className="text-sm text-gray-700">
        Deixe a massa fermentar por 8-24 horas em temperatura ambiente (20-22°C) ou na geladeira por mais tempo. 
        A massa deve dobrar de volume e desenvolver um aroma característico.
      </p>
    )}
    {method === 'poolish' && (
      <p className="text-sm text-gray-700">
        Após incorporar o poolish à massa final, deixe fermentar por 4-6 horas em temperatura ambiente.
        Este método confere leveza e sabor complexo à massa.
      </p>
    )}
    {method === 'biga' && (
      <p className="text-sm text-gray-700">
        Após incorporar a biga, deixe fermentar por 3-5 horas. Este método proporciona força à massa e sabor mais intenso.
        Ideal para massas com maior resistência.
      </p>
    )}
  </div>
);

export default FermentationTips;
