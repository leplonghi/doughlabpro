
import { TranslationsModule } from './types';

export const pt: TranslationsModule = {
  translations: {
    'header.title': 'Calculadora de Pizza Napolitana',
    'header.connect': 'Conectar-se',
    'calculator.title': 'Calculadora de Massa',
    'calculator.description': 'Insira os ingredientes e escolha o método de fermentação preferido',
    'calculator.unitLabel': 'Unidade de Medida',
    'units.grams': 'Gramas',
    'units.ounces': 'Onças',
    'units.cups': 'Xícaras',
    'fermentation.label': 'Método de Fermentação',
    'fermentation.description': {
      direct: 'Todos os ingredientes são misturados de uma vez.',
      poolish: 'Pré-fermento líquido usando 30% da farinha total (100% hidratação).',
      biga: 'Pré-fermento firme usando 50% da farinha (50% hidratação).'
    },
    'fermentation.tips': {
      direct: 'Tempo de fermentação: 8-24h (temperatura ambiente).',
      poolish: 'Prepare o poolish 8-16h antes. Adiciona leveza e textura especial.',
      biga: 'Prepare a biga 12-24h antes. Cria massa mais resistente com sabor intenso.'
    },
    'recipe.final': 'Massa Final',
    'recipe.preliminary': {
      poolish: 'Poolish (Preparar 8-16h antes)',
      biga: 'Biga (Preparar 12-24h antes)'
    },
    'recipe.tips': 'Dicas de Fermentação',
    'button.calculate': 'Calcular Receita'
  }
};
