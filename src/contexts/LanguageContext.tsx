import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'pt' | 'es' | 'fr' | 'zh' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
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
  },
  pt: {
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
  },
  // Add other languages translations here...
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split('-')[0];
    return (browserLang as Language) in translations ? (browserLang as Language) : 'en';
  };
  
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('appLanguage');
    return (savedLanguage as Language) in translations 
      ? (savedLanguage as Language) 
      : getBrowserLanguage();
  });
  
  useEffect(() => {
    localStorage.setItem('appLanguage', language);
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
