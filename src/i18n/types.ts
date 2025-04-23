
export type Language = 'en' | 'pt' | 'es' | 'fr' | 'zh' | 'ja';

export interface Translations {
  [key: string]: string | { [key: string]: string };
}

export interface TranslationsModule {
  translations: Translations;
}
