
import { TranslationsModule } from './types';

export const en: TranslationsModule = {
  translations: {
    'header.title': 'Neapolitan Pizza Calculator',
    'header.connect': 'Connect',
    'calculator.title': 'Dough Calculator',
    'calculator.description': 'Enter ingredients and choose your preferred fermentation method',
    'calculator.unitLabel': 'Measurement Unit',
    'units.grams': 'Grams',
    'units.ounces': 'Ounces',
    'units.cups': 'Cups',
    'fermentation.label': 'Fermentation Method',
    'fermentation.description': {
      direct: 'All ingredients are mixed at once.',
      poolish: 'Pre-ferment using 30% of total flour (100% hydration).',
      biga: 'Firm pre-ferment using 50% of flour (50% hydration).'
    },
    'fermentation.tips': {
      direct: 'Fermentation time: 8-24h (room temperature).',
      poolish: 'Prepare poolish 8-16h before. Adds lightness and special texture.',
      biga: 'Prepare biga 12-24h before. Creates more resistant dough with intense flavor.'
    },
    'recipe.final': 'Final Dough',
    'recipe.preliminary': {
      poolish: 'Poolish (Prepare 8-16h before)',
      biga: 'Biga (Prepare 12-24h before)'
    },
    'recipe.tips': 'Fermentation Tips',
    'button.calculate': 'Calculate Recipe'
  }
};
