
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations
const resources = {
  en: {
    translation: {
      calculator: {
        flour: 'Flour',
        hydration: 'Hydration',
        ingredients: {
          amountDescription: 'The total amount of flour in grams',
          hydrationDescription: 'The water to flour ratio percentage',
          yeastType: 'Yeast Type',
          yeastDescription: 'Select the type of yeast you are using',
          freshYeast: 'Fresh Yeast',
          dryYeast: 'Dry Yeast',
          ballWeight: 'Dough Ball Weight',
          ballWeightDescription: 'Weight of each individual dough ball',
          ballCountResult: 'Makes approximately {{count}} dough ball(s)'
        }
      }
    }
  }
};

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // not needed for react
    },
    react: {
      useSuspense: false,
    }
  });

export default i18n;
