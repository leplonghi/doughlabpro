
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
    'language.label': 'Language',
    'pizza.napoletana': 'Neapolitan',
    'pizza.newyork': 'New York Style',
    'fermentation.direct': 'Direct',
    'fermentation.poolish': 'Poolish',
    'fermentation.biga': 'Biga',
    'ingredients.flour': 'Flour',
    'ingredients.water': 'Hydration',
    'ingredients.salt': 'Salt',
    'ingredients.yeast': 'Yeast',
    'ingredients.oil': 'Olive Oil',
    'ingredients.sugar': 'Sugar',
    'yeast.fresh': 'Fresh Yeast',
    'yeast.dry': 'Dry Yeast',
    'button.calculate': 'Calculate Recipe',
    'recipe.success.title': 'Recipe calculated',
    'recipe.success.description': 'Your pizza recipe was successfully calculated!',
    'error.flour.title': 'Invalid flour amount',
    'error.flour.description': 'Please enter a valid amount of flour.',
    'error.hydration.title': 'Invalid hydration',
    'error.hydration.description': 'Please enter hydration between 50% and 90%.',
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
    'ingredients.water': 'Hidratação',
    'ingredients.salt': 'Sal',
    'ingredients.yeast': 'Fermento',
    'ingredients.oil': 'Azeite',
    'ingredients.sugar': 'Açúcar',
    'yeast.fresh': 'Fermento Fresco',
    'yeast.dry': 'Fermento Seco',
    'button.calculate': 'Calcular Receita',
    'recipe.success.title': 'Receita calculada',
    'recipe.success.description': 'Sua receita de pizza foi calculada com sucesso!',
    'error.flour.title': 'Quantidade de farinha inválida',
    'error.flour.description': 'Por favor, insira uma quantidade válida de farinha.',
    'error.hydration.title': 'Hidratação inválida',
    'error.hydration.description': 'Por favor, insira uma hidratação entre 50% e 90%.',
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
    'ingredients.water': 'Hidratación',
    'ingredients.salt': 'Sal',
    'ingredients.yeast': 'Levadura',
    'ingredients.oil': 'Aceite de Oliva',
    'ingredients.sugar': 'Azúcar',
    'yeast.fresh': 'Levadura Fresca',
    'yeast.dry': 'Levadura Seca',
    'button.calculate': 'Calcular Receta',
    'recipe.success.title': 'Receta calculada',
    'recipe.success.description': '¡Tu receta de pizza se ha calculado con éxito!',
    'error.flour.title': 'Cantidad de harina no válida',
    'error.flour.description': 'Por favor, introduzca una cantidad válida de harina.',
    'error.hydration.title': 'Hidratación no válida',
    'error.hydration.description': 'Por favor, introduzca una hidratación entre 50% y 90%.',
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
    'ingredients.water': 'Hydratation',
    'ingredients.salt': 'Sel',
    'ingredients.yeast': 'Levure',
    'ingredients.oil': "Huile d'Olive",
    'ingredients.sugar': 'Sucre',
    'yeast.fresh': 'Levure Fraîche',
    'yeast.dry': 'Levure Sèche',
    'button.calculate': 'Calculer la Recette',
    'recipe.success.title': 'Recette calculée',
    'recipe.success.description': 'Votre recette de pizza a été calculée avec succès!',
    'error.flour.title': 'Quantité de farine invalide',
    'error.flour.description': 'Veuillez saisir une quantité valide de farine.',
    'error.hydration.title': 'Hydratation invalide',
    'error.hydration.description': 'Veuillez saisir une hydratation entre 50% et 90%.',
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
    'ingredients.water': '水分',
    'ingredients.salt': '盐',
    'ingredients.yeast': '酵母',
    'ingredients.oil': '橄榄油',
    'ingredients.sugar': '糖',
    'yeast.fresh': '新鲜酵母',
    'yeast.dry': '干酵母',
    'button.calculate': '计算配方',
    'recipe.success.title': '配方已计算',
    'recipe.success.description': '您的披萨配方已成功计算！',
    'error.flour.title': '面粉量无效',
    'error.flour.description': '请输入有效的面粉量。',
    'error.hydration.title': '水分无效',
    'error.hydration.description': '请输入50%到90%之间的水分。',
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
    'ingredients.water': '水分',
    'ingredients.salt': '塩',
    'ingredients.yeast': 'イースト',
    'ingredients.oil': 'オリーブオイル',
    'ingredients.sugar': '砂糖',
    'yeast.fresh': '生イースト',
    'yeast.dry': '乾燥イースト',
    'button.calculate': 'レシピを計算',
    'recipe.success.title': 'レシピ計算完了',
    'recipe.success.description': 'ピザのレシピが正常に計算されました！',
    'error.flour.title': '無効な小麦粉の量',
    'error.flour.description': '有効な小麦粉の量を入力してください。',
    'error.hydration.title': '無効な水分',
    'error.hydration.description': '水分は50%から90%の間で入力してください。',
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
  // Detecta o idioma do navegador ou usa 'en' como padrão
  const getBrowserLanguage = (): Language => {
    const browserLang = navigator.language.split('-')[0];
    return (browserLang as Language) in translations ? (browserLang as Language) : 'en';
  };
  
  const [language, setLanguage] = useState<Language>(() => {
    // Tenta obter o idioma do localStorage ou usa o idioma do navegador
    const savedLanguage = localStorage.getItem('appLanguage');
    return (savedLanguage as Language) in translations 
      ? (savedLanguage as Language) 
      : getBrowserLanguage();
  });
  
  // Efeito para salvar o idioma no localStorage sempre que mudar
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
