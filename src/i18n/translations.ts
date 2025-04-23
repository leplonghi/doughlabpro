
import { Language, Translations } from './types';
import { en } from './en';
import { pt } from './pt';

export const translations: Record<Language, Translations> = {
  en: en.translations,
  pt: pt.translations,
  es: {}, // To be implemented
  fr: {}, // To be implemented
  zh: {}, // To be implemented
  ja: {}  // To be implemented
};
