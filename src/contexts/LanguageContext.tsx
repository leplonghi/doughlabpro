
import React, { createContext, useContext, useState } from 'react';

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
    'language.label': 'Language',
    'pizza.napoletana': 'Neapolitan',
    'pizza.newyork': 'New York Style',
    'fermentation.direct': 'Direct',
    'fermentation.poolish': 'Poolish',
    'fermentation.biga': 'Biga',
    'ingredients.flour': 'Flour',
    'ingredients.water': 'Water',
    'ingredients.salt': 'Salt',
    'ingredients.yeast': 'Yeast',
    'ingredients.oil': 'Olive Oil',
    'ingredients.sugar': 'Sugar',
    'yeast.fresh': 'Fresh Yeast',
    'yeast.dry': 'Dry Yeast',
    'button.calculate': 'Calculate Recipe',
  },
  pt: {
    'header.title': 'Calculadora de Pizza Napolitana',
    'header.connect': 'Conectar-se',
    'calculator.title': 'Calculadora de Massa',
    'calculator.description': 'Insira os ingredientes e escolha o método de fermentação preferido',
    'language.label': 'Idioma',
    'pizza.napoletana': 'Napolitana',
    'pizza.newyork': 'New York',
    'fermentation.direct': 'Direto',
    'fermentation.poolish': 'Poolish',
    'fermentation.biga': 'Biga',
    'ingredients.flour': 'Farinha',
    'ingredients.water': 'Água',
    'ingredients.salt': 'Sal',
    'ingredients.yeast': 'Fermento',
    'ingredients.oil': 'Azeite',
    'ingredients.sugar': 'Açúcar',
    'yeast.fresh': 'Fermento Fresco',
    'yeast.dry': 'Fermento Seco',
    'button.calculate': 'Calcular Receita',
  },
  es: {
    'header.title': 'Calculadora de Pizza Napolitana',
    'header.connect': 'Conectar',
    'calculator.title': 'Calculadora de Masa',
    'calculator.description': 'Ingrese los ingredientes y elija su método de fermentación preferido',
    'language.label': 'Idioma',
    'pizza.napoletana': 'Napolitana',
    'pizza.newyork': 'New York',
    'fermentation.direct': 'Directo',
    'fermentation.poolish': 'Poolish',
    'fermentation.biga': 'Biga',
    'ingredients.flour': 'Harina',
    'ingredients.water': 'Agua',
    'ingredients.salt': 'Sal',
    'ingredients.yeast': 'Levadura',
    'ingredients.oil': 'Aceite de Oliva',
    'ingredients.sugar': 'Azúcar',
    'yeast.fresh': 'Levadura Fresca',
    'yeast.dry': 'Levadura Seca',
    'button.calculate': 'Calcular Receta',
  },
  fr: {
    'header.title': 'Calculatrice de Pizza Napolitaine',
    'header.connect': 'Se Connecter',
    'calculator.title': 'Calculatrice de Pâte',
    'calculator.description': 'Entrez les ingrédients et choisissez votre méthode de fermentation préférée',
    'language.label': 'Langue',
    'pizza.napoletana': 'Napolitaine',
    'pizza.newyork': 'New York',
    'fermentation.direct': 'Direct',
    'fermentation.poolish': 'Poolish',
    'fermentation.biga': 'Biga',
    'ingredients.flour': 'Farine',
    'ingredients.water': 'Eau',
    'ingredients.salt': 'Sel',
    'ingredients.yeast': 'Levure',
    'ingredients.oil': "Huile d'Olive",
    'ingredients.sugar': 'Sucre',
    'yeast.fresh': 'Levure Fraîche',
    'yeast.dry': 'Levure Sèche',
    'button.calculate': 'Calculer la Recette',
  },
  zh: {
    'header.title': '那不勒斯披萨计算器',
    'header.connect': '连接',
    'calculator.title': '面团计算器',
    'calculator.description': '输入配料并选择您喜欢的发酵方法',
    'language.label': '语言',
    'pizza.napoletana': '那不勒斯',
    'pizza.newyork': '纽约风格',
    'fermentation.direct': '直接发酵',
    'fermentation.poolish': '波兰种',
    'fermentation.biga': '老面团',
    'ingredients.flour': '面粉',
    'ingredients.water': '水',
    'ingredients.salt': '盐',
    'ingredients.yeast': '酵母',
    'ingredients.oil': '橄榄油',
    'ingredients.sugar': '糖',
    'yeast.fresh': '新鲜酵母',
    'yeast.dry': '干酵母',
    'button.calculate': '计算配方',
  },
  ja: {
    'header.title': 'ナポリピザ計算機',
    'header.connect': '接続',
    'calculator.title': '生地計算機',
    'calculator.description': '材料を入力し、好みの発酵方法を選択してください',
    'language.label': '言語',
    'pizza.napoletana': 'ナポリ風',
    'pizza.newyork': 'ニューヨーク風',
    'fermentation.direct': '直接発酵',
    'fermentation.poolish': 'ポーリッシュ',
    'fermentation.biga': 'ビガ',
    'ingredients.flour': '小麦粉',
    'ingredients.water': '水',
    'ingredients.salt': '塩',
    'ingredients.yeast': 'イースト',
    'ingredients.oil': 'オリーブオイル',
    'ingredients.sugar': '砂糖',
    'yeast.fresh': '生イースト',
    'yeast.dry': '乾燥イースト',
    'button.calculate': 'レシピを計算',
  },
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
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
