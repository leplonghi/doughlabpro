
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enTranslations from './locales/en';
import ptTranslations from './locales/pt';
import esTranslations from './locales/es';

// Initialize i18next
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: enTranslations,
      pt: ptTranslations,
      es: esTranslations
    },
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
