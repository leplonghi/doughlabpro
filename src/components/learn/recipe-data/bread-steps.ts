
import { BakingStep } from '../types';

export const getBreadSteps = (recipeName: string, language: string = 'en'): BakingStep[] => {
  // Choose the correct language steps
  if (language === 'pt') {
    return getBreadStepsPt(recipeName);
  } else if (language === 'es') {
    return getBreadStepsEs(recipeName);
  } else {
    // Default to English
    return getBreadStepsEn(recipeName);
  }
};

// English bread steps
const getBreadStepsEn = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Country Loaf')) {
    return [
      {
        title: 'Mix Ingredients',
        description: 'In a large bowl, combine bread flour, whole wheat flour, and salt. In a separate container, dissolve yeast in water. Make a well in the flour and pour in the water mixture.',
        didacticInfo: 'The combination of bread flour and whole wheat gives country bread its characteristic flavor and texture. Bread flour provides structure while whole wheat adds flavor and nutrition.',
        image: '/lovable-uploads/bread-mixing.jpg',
        tip: 'Use room temperature water (around 70°F/21°C) for a balanced fermentation rate.'
      },
      {
        title: 'Initial Mix & Autolyse',
        description: 'Mix until no dry flour remains. Cover and let rest for 30 minutes to allow the flour to fully hydrate.',
        didacticInfo: 'The autolyse period allows enzymes in the flour to begin breaking down complex carbohydrates and proteins, making the dough more extensible and easier to work with later.',
        image: '/lovable-uploads/bread-autolyse.jpg',
        tip: 'Autolyse can be extended up to 2 hours for better flavor development.'
      },
      {
        title: 'Develop Gluten',
        description: 'Using the stretch and fold technique, perform 4-6 sets of folds at 30-minute intervals, stretching the dough and folding it over itself from each side.',
        didacticInfo: 'Unlike intensive kneading, the stretch and fold method gently develops gluten while preserving the delicate bubble structure that gives artisan bread its open crumb.',
        image: '/lovable-uploads/bread-stretch-fold.jpg',
        tip: 'Wet your hands before handling the dough to prevent sticking.'
      },
      {
        title: 'Bulk Fermentation',
        description: 'After completing the folds, allow the dough to rise at room temperature for 3-5 hours until it has increased in size by about 50% and shows signs of fermentation activity.',
        didacticInfo: 'During bulk fermentation, yeast produces carbon dioxide while bacteria produce acids. Together, they create flavor compounds and develop the structure of your bread.',
        image: '/lovable-uploads/bread-bulk-ferment.jpg',
        tip: 'The ideal temperature for bulk fermentation is about 75°F (24°C). In colder temperatures, fermentation will be slower, while warmer temperatures speed it up.'
      },
      {
        title: 'Pre-shape',
        description: 'Turn the dough onto a lightly floured surface. Using a bench scraper, gently shape it into a round by pulling the edges toward the center.',
        didacticInfo: 'Pre-shaping begins to create surface tension and gives the dough a chance to relax before the final shape, resulting in better form and oven spring.',
        image: '/lovable-uploads/bread-preshape.jpg',
        tip: 'Use minimal flour during this stage to maintain good surface friction.'
      },
      {
        title: 'Bench Rest',
        description: 'Let the pre-shaped dough rest for 15-30 minutes uncovered until it has relaxed somewhat but not completely spread out.',
        didacticInfo: 'This rest allows the gluten to relax, making final shaping easier and preventing the dough from fighting back and becoming too tight.',
        image: '/lovable-uploads/bread-bench-rest.jpg',
        tip: 'If the dough spreads out too much during the bench rest, your bulk fermentation may have gone too long.'
      },
      {
        title: 'Final Shape',
        description: 'Flip the dough over, pull the sides toward the center, then roll it up tightly. Place seam-side up in a floured proofing basket or bowl lined with a well-floured cloth.',
        didacticInfo: 'The final shape creates the structure and tension necessary for proper oven spring and determines the final form of your loaf.',
        image: '/lovable-uploads/bread-final-shape.jpg',
        tip: 'For a tighter seam, pinch the dough together at the bottom after shaping.'
      },
      {
        title: 'Final Proof',
        description: 'Cover the shaped loaf and let it proof for 1-2 hours at room temperature, or refrigerate overnight for 8-14 hours for a cold proof.',
        didacticInfo: 'The final proof allows the dough to rise one last time before baking. A cold proof slows fermentation, developing more flavor and making the dough easier to handle and score.',
        image: '/lovable-uploads/bread-final-proof.jpg',
        tip: 'Test if the dough is ready by gently pressing it with your finger - it should slowly spring back but leave a slight impression.'
      },
      {
        title: 'Score and Bake',
        description: 'Preheat oven to 475°F (245°C) with a Dutch oven inside. Turn the dough onto parchment, score the top with a sharp blade, then lower into the hot Dutch oven. Bake covered for 30 minutes, then uncovered for 15-20 minutes.',
        didacticInfo: 'Scoring allows the bread to expand in a controlled way during baking. The Dutch oven traps steam, creating a humid environment that develops a crackling crust and maximizes oven spring.',
        image: '/lovable-uploads/bread-scoring.jpg',
        tip: 'For a deeper color and flavor, brush the loaf with water before baking.'
      },
      {
        title: 'Cool and Enjoy',
        description: 'Remove the bread from the oven and let it cool on a wire rack for at least 1 hour before slicing.',
        didacticInfo: 'Cooling is an essential part of bread baking. During this time, moisture equalizes throughout the loaf, the crust sets, and the crumb continues to develop structure.',
        image: '/lovable-uploads/bread-cooling.jpg',
        tip: 'As tempting as it is to cut into warm bread, waiting allows the crumb to set properly and prevents the loaf from becoming gummy.'
      }
    ];
  }
  
  // Default empty array if no match
  return [];
};

// Portuguese bread steps
const getBreadStepsPt = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Country Loaf')) {
    return [
      {
        title: 'Misturar Ingredientes',
        description: 'Em uma tigela grande, misture a farinha de pão, farinha integral e sal. Em um recipiente separado, dissolva o fermento em água. Faça um poço na farinha e despeje a mistura de água.',
        didacticInfo: 'A combinação de farinha de pão e farinha integral dá ao pão rústico seu sabor e textura característicos. A farinha de pão proporciona estrutura enquanto a integral adiciona sabor e nutrição.',
        image: '/lovable-uploads/bread-mixing.jpg',
        tip: 'Use água em temperatura ambiente (cerca de 21°C) para uma taxa de fermentação equilibrada.'
      },
      {
        title: 'Mistura Inicial e Autólise',
        description: 'Misture até que não reste farinha seca. Cubra e deixe descansar por 30 minutos para permitir que a farinha hidrate completamente.',
        didacticInfo: 'O período de autólise permite que as enzimas na farinha comecem a decompor carboidratos complexos e proteínas, tornando a massa mais extensível e mais fácil de trabalhar posteriormente.',
        image: '/lovable-uploads/bread-autolyse.jpg',
        tip: 'A autólise pode ser estendida até 2 horas para melhor desenvolvimento de sabor.'
      },
      {
        title: 'Desenvolver o Glúten',
        description: 'Usando a técnica de dobras, realize 4-6 séries de dobras em intervalos de 30 minutos, esticando a massa e dobrando-a sobre si mesma de cada lado.',
        didacticInfo: 'Diferente da sova intensiva, o método de dobras desenvolve o glúten suavemente enquanto preserva a delicada estrutura de bolhas que dá ao pão artesanal seu miolo aberto.',
        image: '/lovable-uploads/bread-stretch-fold.jpg',
        tip: 'Molhe suas mãos antes de manipular a massa para evitar que grude.'
      },
      {
        title: 'Fermentação em Massa',
        description: 'Após completar as dobras, permita que a massa cresça em temperatura ambiente por 3-5 horas até aumentar de tamanho em cerca de 50% e mostrar sinais de atividade fermentativa.',
        didacticInfo: 'Durante a fermentação em massa, o fermento produz dióxido de carbono enquanto bactérias produzem ácidos. Juntos, eles criam compostos de sabor e desenvolvem a estrutura do seu pão.',
        image: '/lovable-uploads/bread-bulk-ferment.jpg',
        tip: 'A temperatura ideal para fermentação em massa é cerca de 24°C. Em temperaturas mais frias, a fermentação será mais lenta, enquanto temperaturas mais quentes a aceleram.'
      },
      {
        title: 'Pré-modelagem',
        description: 'Coloque a massa em uma superfície levemente enfarinhada. Usando um raspador de bancada, modele-a suavemente em um formato redondo puxando as bordas em direção ao centro.',
        didacticInfo: 'A pré-modelagem começa a criar tensão superficial e dá à massa uma chance de relaxar antes da forma final, resultando em melhor forma e expansão no forno.',
        image: '/lovable-uploads/bread-preshape.jpg',
        tip: 'Use o mínimo de farinha durante esta etapa para manter boa fricção superficial.'
      },
      {
        title: 'Descanso na Bancada',
        description: 'Deixe a massa pré-modelada descansar por 15-30 minutos descoberta até que tenha relaxado um pouco, mas não completamente espalhada.',
        didacticInfo: 'Este descanso permite que o glúten relaxe, tornando a modelagem final mais fácil e evitando que a massa resista e se torne muito apertada.',
        image: '/lovable-uploads/bread-bench-rest.jpg',
        tip: 'Se a massa se espalhar demais durante o descanso, sua fermentação em massa pode ter sido muito longa.'
      },
      {
        title: 'Modelagem Final',
        description: 'Vire a massa, puxe os lados em direção ao centro, depois enrole firmemente. Coloque com a emenda para cima em um cesto de fermentação enfarinhado ou tigela forrada com um pano bem enfarinhado.',
        didacticInfo: 'A forma final cria a estrutura e tensão necessárias para a expansão adequada no forno e determina a forma final do seu pão.',
        image: '/lovable-uploads/bread-final-shape.jpg',
        tip: 'Para uma emenda mais apertada, aperte a massa na parte inferior após a modelagem.'
      },
      {
        title: 'Fermentação Final',
        description: 'Cubra o pão modelado e deixe fermentar por 1-2 horas em temperatura ambiente, ou refrigere durante a noite por 8-14 horas para uma fermentação fria.',
        didacticInfo: 'A fermentação final permite que a massa cresça uma última vez antes de assar. A fermentação fria desacelera o processo, desenvolvendo mais sabor e tornando a massa mais fácil de manusear e cortar.',
        image: '/lovable-uploads/bread-final-proof.jpg',
        tip: 'Teste se a massa está pronta pressionando-a suavemente com o dedo - ela deve voltar lentamente mas deixar uma leve impressão.'
      },
      {
        title: 'Cortar e Assar',
        description: 'Pré-aqueça o forno a 245°C com uma panela de ferro fundido dentro. Vire a massa sobre papel manteiga, corte o topo com uma lâmina afiada, depois abaixe na panela quente. Asse coberto por 30 minutos, depois descoberto por 15-20 minutos.',
        didacticInfo: 'Cortar a superfície permite que o pão expanda de forma controlada durante o cozimento. A panela de ferro fundido prende o vapor, criando um ambiente úmido que desenvolve uma crosta crocante e maximiza a expansão no forno.',
        image: '/lovable-uploads/bread-scoring.jpg',
        tip: 'Para uma cor e sabor mais profundos, pincele o pão com água antes de assar.'
      },
      {
        title: 'Esfriar e Saborear',
        description: 'Retire o pão do forno e deixe-o esfriar em uma grade por pelo menos 1 hora antes de fatiar.',
        didacticInfo: 'O resfriamento é uma parte essencial do processo de panificação. Durante este tempo, a umidade se equaliza por todo o pão, a crosta se firma, e o miolo continua a desenvolver estrutura.',
        image: '/lovable-uploads/bread-cooling.jpg',
        tip: 'Por mais tentador que seja cortar o pão ainda quente, esperar permite que o miolo se firme adequadamente e evita que o pão fique gomoso.'
      }
    ];
  }
  
  // Default empty array if no match
  return [];
};

// Spanish bread steps
const getBreadStepsEs = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Country Loaf')) {
    return [
      {
        title: 'Mezclar Ingredientes',
        description: 'En un recipiente grande, combina harina de pan, harina integral y sal. En un recipiente separado, disuelve la levadura en agua. Haz un hueco en la harina y vierte la mezcla de agua.',
        didacticInfo: 'La combinación de harina de pan y harina integral le da al pan rústico su sabor y textura característicos. La harina de pan proporciona estructura mientras que la integral añade sabor y nutrición.',
        image: '/lovable-uploads/bread-mixing.jpg',
        tip: 'Usa agua a temperatura ambiente (alrededor de 21°C) para una tasa de fermentación equilibrada.'
      },
      {
        title: 'Mezcla Inicial y Autólisis',
        description: 'Mezcla hasta que no quede harina seca. Cubre y deja reposar 30 minutos para permitir que la harina se hidrate completamente.',
        didacticInfo: 'El período de autólisis permite que las enzimas en la harina comiencen a descomponer los carbohidratos complejos y las proteínas, haciendo que la masa sea más extensible y más fácil de trabajar posteriormente.',
        image: '/lovable-uploads/bread-autolyse.jpg',
        tip: 'La autólisis puede extenderse hasta 2 horas para mejor desarrollo de sabor.'
      },
      {
        title: 'Desarrollar el Gluten',
        description: 'Usando la técnica de plegado, realiza 4-6 series de pliegues en intervalos de 30 minutos, estirando la masa y plegándola sobre sí misma desde cada lado.',
        didacticInfo: 'A diferencia del amasado intensivo, el método de plegado desarrolla el gluten suavemente mientras preserva la delicada estructura de burbujas que le da al pan artesanal su miga abierta.',
        image: '/lovable-uploads/bread-stretch-fold.jpg',
        tip: 'Mójate las manos antes de manipular la masa para evitar que se pegue.'
      },
      {
        title: 'Fermentación en Masa',
        description: 'Después de completar los pliegues, permite que la masa suba a temperatura ambiente durante 3-5 horas hasta que haya aumentado su tamaño en aproximadamente un 50% y muestre señales de actividad fermentativa.',
        didacticInfo: 'Durante la fermentación en masa, la levadura produce dióxido de carbono mientras las bacterias producen ácidos. Juntos, crean compuestos de sabor y desarrollan la estructura de tu pan.',
        image: '/lovable-uploads/bread-bulk-ferment.jpg',
        tip: 'La temperatura ideal para la fermentación en masa es alrededor de 24°C. En temperaturas más frías, la fermentación será más lenta, mientras que temperaturas más cálidas la aceleran.'
      },
      {
        title: 'Pre-formado',
        description: 'Coloca la masa sobre una superficie ligeramente enharinada. Usando un raspador de masa, dale forma redonda con suavidad tirando de los bordes hacia el centro.',
        didacticInfo: 'El pre-formado comienza a crear tensión superficial y le da a la masa la oportunidad de relajarse antes del formado final, resultando en mejor forma y expansión en el horno.',
        image: '/lovable-uploads/bread-preshape.jpg',
        tip: 'Usa mínima harina durante esta etapa para mantener buena fricción superficial.'
      },
      {
        title: 'Reposo en Mesa',
        description: 'Deja que la masa pre-formada repose durante 15-30 minutos descubierta hasta que se haya relajado algo pero no se haya extendido completamente.',
        didacticInfo: 'Este reposo permite que el gluten se relaje, haciendo el formado final más fácil y evitando que la masa se resista y se vuelva demasiado tensa.',
        image: '/lovable-uploads/bread-bench-rest.jpg',
        tip: 'Si la masa se extiende demasiado durante el reposo, tu fermentación en masa puede haber sido demasiado larga.'
      },
      {
        title: 'Formado Final',
        description: 'Voltea la masa, tira de los lados hacia el centro, luego enróllala firmemente. Colócala con la costura hacia arriba en un canasto de fermentación enharinado o un recipiente forrado con un paño bien enharinado.',
        didacticInfo: 'El formado final crea la estructura y tensión necesarias para una adecuada expansión en el horno y determina la forma final de tu pan.',
        image: '/lovable-uploads/bread-final-shape.jpg',
        tip: 'Para una costura más apretada, pellizca la masa en la parte inferior después del formado.'
      },
      {
        title: 'Fermentación Final',
        description: 'Cubre el pan formado y déjalo fermentar durante 1-2 horas a temperatura ambiente, o refrigera durante la noche por 8-14 horas para una fermentación fría.',
        didacticInfo: 'La fermentación final permite que la masa suba una última vez antes de hornear. La fermentación fría ralentiza el proceso, desarrollando más sabor y haciendo que la masa sea más fácil de manejar y cortar.',
        image: '/lovable-uploads/bread-final-proof.jpg',
        tip: 'Comprueba si la masa está lista presionándola suavemente con tu dedo - debe recuperar su forma lentamente pero dejar una ligera impresión.'
      },
      {
        title: 'Cortar y Hornear',
        description: 'Precalienta el horno a 245°C con una olla de hierro fundido dentro. Vuelca la masa sobre papel de hornear, haz cortes en la superficie con una cuchilla afilada, luego bájala en la olla caliente. Hornea cubierta durante 30 minutos, luego descubierta durante 15-20 minutos.',
        didacticInfo: 'Hacer cortes permite que el pan se expanda de manera controlada durante la cocción. La olla de hierro fundido atrapa el vapor, creando un ambiente húmedo que desarrolla una corteza crujiente y maximiza la expansión en el horno.',
        image: '/lovable-uploads/bread-scoring.jpg',
        tip: 'Para un color y sabor más profundos, pincela el pan con agua antes de hornear.'
      },
      {
        title: 'Enfriar y Disfrutar',
        description: 'Retira el pan del horno y déjalo enfriar sobre una rejilla durante al menos 1 hora antes de cortarlo.',
        didacticInfo: 'El enfriamiento es una parte esencial de la panificación. Durante este tiempo, la humedad se iguala por todo el pan, la corteza se establece, y la miga continúa desarrollando estructura.',
        image: '/lovable-uploads/bread-cooling.jpg',
        tip: 'Por más tentador que sea cortar el pan caliente, esperar permite que la miga se asiente adecuadamente y evita que el pan quede gomoso.'
      }
    ];
  }
  
  // Default empty array if no match
  return [];
};
