
import { BakingStep } from '../types';

export const getFocacciaSteps = (recipeName: string, language: string = 'en'): BakingStep[] => {
  // Choose the correct language steps
  if (language === 'pt') {
    return getFocacciaStepsPt(recipeName);
  } else if (language === 'es') {
    return getFocacciaStepsEs(recipeName);
  } else {
    // Default to English
    return getFocacciaStepsEn(recipeName);
  }
};

// English focaccia steps
const getFocacciaStepsEn = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Classic Focaccia')) {
    return [
      {
        title: 'Mix the Dough',
        description: 'In a large bowl, combine flour, salt, yeast, and olive oil. Gradually add water and mix until no dry spots remain.',
        didacticInfo: 'Focaccia dough has a higher hydration level than many bread recipes, which gives it its characteristic open crumb and chewy texture. The olive oil adds richness and contributes to the crisp exterior.',
        image: '/lovable-uploads/focaccia-mixing.jpg',
        tip: 'Use a wooden spoon or your hands for mixing. The dough will be quite wet and sticky, which is normal for focaccia.'
      },
      {
        title: 'First Folding',
        description: 'Instead of kneading, perform a series of stretches and folds. Pull up one side of the dough and fold it over itself. Rotate the bowl 90° and repeat 3 more times.',
        didacticInfo: 'The stretch and fold technique develops gluten without overworking the dough, which helps maintain the airy structure focaccia is known for.',
        image: '/lovable-uploads/focaccia-folding.jpg',
        tip: 'Wet your hands before handling the dough to prevent sticking. Repeat this folding process every 30 minutes for a total of 3-4 sets of folds.'
      },
      {
        title: 'Bulk Fermentation',
        description: 'Cover the bowl with plastic wrap or a damp towel and let the dough rise at room temperature for 2-3 hours, performing folds every 30 minutes for the first 1-2 hours.',
        didacticInfo: 'During bulk fermentation, yeast consumes sugars in the flour and produces carbon dioxide, creating the air pockets that give focaccia its texture. The multiple folds during this time strengthen the gluten network.',
        image: '/lovable-uploads/focaccia-fermentation.jpg',
        tip: 'The dough should roughly double in size and become noticeably more puffy and aerated by the end of bulk fermentation.'
      },
      {
        title: 'Prepare the Pan',
        description: 'Generously coat a 9x13 inch baking pan with olive oil, using about 2-3 tablespoons.',
        didacticInfo: 'The generous amount of olive oil in the pan serves multiple purposes: it prevents sticking, creates the signature crispy bottom crust, and infuses the bread with flavor as it bakes.',
        image: '/lovable-uploads/focaccia-pan.jpg',
        tip: 'For an even more flavorful focaccia, infuse the olive oil with garlic, herbs, or citrus zest before adding it to the pan.'
      },
      {
        title: 'Transfer and Stretch',
        description: 'Gently transfer the dough to the oiled pan. With oiled fingertips, stretch the dough toward the edges of the pan. If it resists, let it rest for 10-15 minutes and try again.',
        didacticInfo: 'This gentle stretching preserves the air bubbles in the dough. The resting periods allow the gluten to relax, making it easier to fill the entire pan.',
        image: '/lovable-uploads/focaccia-stretching.jpg',
        tip: 'Don\'t force the dough if it resists stretching. Multiple short rests and gentle stretches will get you there without deflating the precious air bubbles.'
      },
      {
        title: 'Second Rise',
        description: 'Cover the pan and let the dough rise for 45-60 minutes until puffy. For more flavor development, you can refrigerate it for 8-24 hours instead.',
        didacticInfo: 'This second rise allows the dough to relax into its final shape and continues to develop flavor. A long, cold fermentation in the refrigerator develops even more complex flavors.',
        image: '/lovable-uploads/focaccia-second-rise.jpg',
        tip: 'If refrigerating overnight, take the dough out 30-60 minutes before dimpling and baking to allow it to warm slightly.'
      },
      {
        title: 'Dimple and Top',
        description: 'Preheat oven to 450°F (230°C). With wet or oiled fingers, press firmly into the dough all the way to the bottom of the pan, creating the signature focaccia dimples. Drizzle with additional olive oil and sprinkle with sea salt and desired toppings.',
        didacticInfo: 'The dimples serve both aesthetic and functional purposes - they create the classic focaccia look, prevent the dough from rising unevenly, and capture olive oil and toppings in delicious pools.',
        image: '/lovable-uploads/focaccia-dimpling.jpg',
        tip: 'Classic toppings include rosemary, cherry tomatoes, olives, or thinly sliced onions. For a simple version, just sea salt and olive oil are perfect.'
      },
      {
        title: 'Bake',
        description: 'Bake for 20-25 minutes until the top is golden brown and the bottom is crisp.',
        didacticInfo: 'The high heat creates steam from the water in the dough, which helps create the airy texture. The olive oil in and on the dough helps achieve the golden, crispy exterior.',
        image: '/lovable-uploads/focaccia-baking.jpg',
        tip: 'For an extra crispy bottom, place the pan on a preheated baking stone or the lowest rack of your oven.'
      },
      {
        title: 'Cool and Serve',
        description: 'Remove the focaccia from the pan onto a cooling rack. Let it cool for at least 15 minutes before slicing.',
        didacticInfo: 'Allowing the focaccia to cool slightly stabilizes its structure and lets the flavors settle. However, unlike many breads, focaccia is often enjoyed while still warm.',
        image: '/lovable-uploads/focaccia-finished.jpg',
        tip: 'Focaccia is best enjoyed the day it\'s made, but can be stored wrapped in plastic at room temperature for 2 days. Reheat in a 350°F (175°C) oven for 5-10 minutes to refresh.'
      }
    ];
  }
  
  // Default empty array if no match
  return [];
};

// Portuguese focaccia steps
const getFocacciaStepsPt = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Classic Focaccia')) {
    return [
      {
        title: 'Misturar a Massa',
        description: 'Em uma tigela grande, combine farinha, sal, fermento e azeite de oliva. Adicione água gradualmente e misture até que não restem pontos secos.',
        didacticInfo: 'A massa de focaccia tem um nível de hidratação maior do que muitas receitas de pão, o que lhe confere seu miolo aberto característico e textura mastigável. O azeite adiciona riqueza e contribui para o exterior crocante.',
        image: '/lovable-uploads/focaccia-mixing.jpg',
        tip: 'Use uma colher de madeira ou as mãos para misturar. A massa ficará bem molhada e pegajosa, o que é normal para focaccia.'
      },
      {
        title: 'Primeira Dobra',
        description: 'Em vez de sovar, realize uma série de alongamentos e dobras. Puxe um lado da massa e dobre-a sobre si mesma. Gire a tigela 90° e repita mais 3 vezes.',
        didacticInfo: 'A técnica de alongar e dobrar desenvolve o glúten sem trabalhar demais a massa, o que ajuda a manter a estrutura aerada pela qual a focaccia é conhecida.',
        image: '/lovable-uploads/focaccia-folding.jpg',
        tip: 'Molhe suas mãos antes de manusear a massa para evitar que grude. Repita este processo de dobras a cada 30 minutos por um total de 3-4 conjuntos de dobras.'
      },
      {
        title: 'Fermentação em Massa',
        description: 'Cubra a tigela com filme plástico ou um pano úmido e deixe a massa crescer em temperatura ambiente por 2-3 horas, realizando dobras a cada 30 minutos durante as primeiras 1-2 horas.',
        didacticInfo: 'Durante a fermentação em massa, o fermento consome açúcares na farinha e produz dióxido de carbono, criando as bolsas de ar que dão à focaccia sua textura. As múltiplas dobras durante este tempo fortalecem a rede de glúten.',
        image: '/lovable-uploads/focaccia-fermentation.jpg',
        tip: 'A massa deve aproximadamente dobrar de tamanho e ficar visivelmente mais fofa e aerada ao final da fermentação em massa.'
      },
      {
        title: 'Preparar a Forma',
        description: 'Cubra generosamente uma forma de 23x33 cm com azeite de oliva, usando cerca de 2-3 colheres de sopa.',
        didacticInfo: 'A quantidade generosa de azeite na forma serve a múltiplos propósitos: evita que grude, cria a característica crosta crocante na base e infunde o pão com sabor enquanto assa.',
        image: '/lovable-uploads/focaccia-pan.jpg',
        tip: 'Para uma focaccia ainda mais saborosa, infuse o azeite com alho, ervas ou raspas de cítricos antes de adicioná-lo à forma.'
      },
      {
        title: 'Transferir e Esticar',
        description: 'Transfira cuidadosamente a massa para a forma untada. Com as pontas dos dedos untadas com azeite, estique a massa em direção às bordas da forma. Se resistir, deixe-a descansar por 10-15 minutos e tente novamente.',
        didacticInfo: 'Este alongamento suave preserva as bolhas de ar na massa. Os períodos de descanso permitem que o glúten relaxe, tornando mais fácil preencher toda a forma.',
        image: '/lovable-uploads/focaccia-stretching.jpg',
        tip: 'Não force a massa se ela resistir ao alongamento. Múltiplos descansos curtos e alongamentos suaves te levarão lá sem desinflar as preciosas bolhas de ar.'
      },
      {
        title: 'Segunda Fermentação',
        description: 'Cubra a forma e deixe a massa crescer por 45-60 minutos até ficar fofa. Para maior desenvolvimento de sabor, você pode refrigerá-la por 8-24 horas.',
        didacticInfo: 'Esta segunda fermentação permite que a massa relaxe em sua forma final e continua a desenvolver sabor. Uma fermentação longa e fria na geladeira desenvolve sabores ainda mais complexos.',
        image: '/lovable-uploads/focaccia-second-rise.jpg',
        tip: 'Se refrigerar durante a noite, retire a massa 30-60 minutos antes de fazer as marcações e assar para permitir que ela esquente levemente.'
      },
      {
        title: 'Marcar e Cobrir',
        description: 'Pré-aqueça o forno a 230°C. Com os dedos molhados ou untados com azeite, pressione firmemente na massa até o fundo da forma, criando as características marcações da focaccia. Regue com azeite adicional e polvilhe com sal marinho e coberturas desejadas.',
        didacticInfo: 'As marcações servem a propósitos estéticos e funcionais - elas criam o visual clássico da focaccia, evitam que a massa cresça desigualmente e capturam azeite e coberturas em deliciosas poças.',
        image: '/lovable-uploads/focaccia-dimpling.jpg',
        tip: 'Coberturas clássicas incluem alecrim, tomates cereja, azeitonas ou cebolas finamente fatiadas. Para uma versão simples, apenas sal marinho e azeite são perfeitos.'
      },
      {
        title: 'Assar',
        description: 'Asse por 20-25 minutos até que o topo esteja dourado e a base esteja crocante.',
        didacticInfo: 'O calor alto cria vapor da água na massa, o que ajuda a criar a textura aerada. O azeite na e sobre a massa ajuda a obter o exterior dourado e crocante.',
        image: '/lovable-uploads/focaccia-baking.jpg',
        tip: 'Para uma base extra crocante, coloque a forma sobre uma pedra de assar pré-aquecida ou na prateleira mais baixa do seu forno.'
      },
      {
        title: 'Esfriar e Servir',
        description: 'Remova a focaccia da forma para uma grade de resfriamento. Deixe esfriar por pelo menos 15 minutos antes de fatiar.',
        didacticInfo: 'Permitir que a focaccia esfrie um pouco estabiliza sua estrutura e deixa os sabores se acomodarem. No entanto, diferentemente de muitos pães, a focaccia é frequentemente apreciada ainda morna.',
        image: '/lovable-uploads/focaccia-finished.jpg',
        tip: 'A focaccia é melhor apreciada no dia em que é feita, mas pode ser armazenada embrulhada em plástico à temperatura ambiente por 2 dias. Reaqueça em um forno a 175°C por 5-10 minutos para refrescar.'
      }
    ];
  }
  
  // Default empty array if no match
  return [];
};

// Spanish focaccia steps
const getFocacciaStepsEs = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Classic Focaccia')) {
    return [
      {
        title: 'Mezclar la Masa',
        description: 'En un recipiente grande, combina harina, sal, levadura y aceite de oliva. Agrega agua gradualmente y mezcla hasta que no queden puntos secos.',
        didacticInfo: 'La masa de focaccia tiene un nivel de hidratación más alto que muchas recetas de pan, lo que le da su característico interior abierto y textura masticable. El aceite de oliva añade riqueza y contribuye al exterior crujiente.',
        image: '/lovable-uploads/focaccia-mixing.jpg',
        tip: 'Usa una cuchara de madera o tus manos para mezclar. La masa estará bastante húmeda y pegajosa, lo cual es normal para la focaccia.'
      },
      {
        title: 'Primer Plegado',
        description: 'En lugar de amasar, realiza una serie de estiramientos y pliegues. Tira de un lado de la masa y dóblalo sobre sí mismo. Gira el recipiente 90° y repite 3 veces más.',
        didacticInfo: 'La técnica de estirar y plegar desarrolla el gluten sin trabajar en exceso la masa, lo que ayuda a mantener la estructura aireada por la que la focaccia es conocida.',
        image: '/lovable-uploads/focaccia-folding.jpg',
        tip: 'Mójate las manos antes de manipular la masa para evitar que se pegue. Repite este proceso de plegado cada 30 minutos por un total de 3-4 series de pliegues.'
      },
      {
        title: 'Fermentación en Bloque',
        description: 'Cubre el recipiente con plástico o un paño húmedo y deja que la masa suba a temperatura ambiente durante 2-3 horas, realizando pliegues cada 30 minutos durante las primeras 1-2 horas.',
        didacticInfo: 'Durante la fermentación en bloque, la levadura consume azúcares en la harina y produce dióxido de carbono, creando las bolsas de aire que dan a la focaccia su textura. Los múltiples pliegues durante este tiempo fortalecen la red de gluten.',
        image: '/lovable-uploads/focaccia-fermentation.jpg',
        tip: 'La masa debe aproximadamente duplicar su tamaño y volverse notablemente más esponjosa y aireada al final de la fermentación en bloque.'
      },
      {
        title: 'Preparar el Molde',
        description: 'Cubre generosamente un molde de 23x33 cm con aceite de oliva, usando aproximadamente 2-3 cucharadas.',
        didacticInfo: 'La cantidad generosa de aceite de oliva en el molde sirve para múltiples propósitos: evita que la masa se pegue, crea la característica corteza crujiente en la base e infunde el pan con sabor mientras se hornea.',
        image: '/lovable-uploads/focaccia-pan.jpg',
        tip: 'Para una focaccia aún más sabrosa, infusiona el aceite de oliva con ajo, hierbas o ralladura de cítricos antes de añadirlo al molde.'
      },
      {
        title: 'Transferir y Estirar',
        description: 'Transfiere con cuidado la masa al molde aceitado. Con las yemas de los dedos aceitadas, estira la masa hacia los bordes del molde. Si presenta resistencia, déjala reposar 10-15 minutos e inténtalo de nuevo.',
        didacticInfo: 'Este estiramiento suave preserva las burbujas de aire en la masa. Los períodos de reposo permiten que el gluten se relaje, haciendo más fácil llenar todo el molde.',
        image: '/lovable-uploads/focaccia-stretching.jpg',
        tip: 'No fuerces la masa si resiste al estiramiento. Múltiples descansos cortos y estiramientos suaves te llevarán allí sin desinflar las preciosas burbujas de aire.'
      },
      {
        title: 'Segunda Fermentación',
        description: 'Cubre el molde y deja que la masa suba durante 45-60 minutos hasta que esté esponjosa. Para mayor desarrollo de sabor, puedes refrigerarla durante 8-24 horas.',
        didacticInfo: 'Esta segunda fermentación permite que la masa se relaje en su forma final y continúa desarrollando sabor. Una fermentación larga y fría en el refrigerador desarrolla sabores aún más complejos.',
        image: '/lovable-uploads/focaccia-second-rise.jpg',
        tip: 'Si refrigeras durante la noche, saca la masa 30-60 minutos antes de hacer los hoyuelos y hornear para permitir que se temple ligeramente.'
      },
      {
        title: 'Hacer Hoyuelos y Añadir Toppings',
        description: 'Precalienta el horno a 230°C. Con los dedos mojados o aceitados, presiona firmemente en la masa hasta el fondo del molde, creando los característicos hoyuelos de la focaccia. Rocía con aceite de oliva adicional y espolvorea con sal marina y los toppings deseados.',
        didacticInfo: 'Los hoyuelos sirven tanto para propósitos estéticos como funcionales - crean el aspecto clásico de la focaccia, evitan que la masa suba de forma desigual y capturan aceite y toppings en deliciosos charcos.',
        image: '/lovable-uploads/focaccia-dimpling.jpg',
        tip: 'Los toppings clásicos incluyen romero, tomates cherry, aceitunas o cebollas finamente rebanadas. Para una versión sencilla, solo sal marina y aceite de oliva son perfectos.'
      },
      {
        title: 'Hornear',
        description: 'Hornea durante 20-25 minutos hasta que la superficie esté dorada y la base crujiente.',
        didacticInfo: 'El alto calor crea vapor del agua en la masa, lo que ayuda a crear la textura aireada. El aceite de oliva en y sobre la masa ayuda a lograr el exterior dorado y crujiente.',
        image: '/lovable-uploads/focaccia-baking.jpg',
        tip: 'Para una base extra crujiente, coloca el molde sobre una piedra de hornear precalentada o en la rejilla más baja de tu horno.'
      },
      {
        title: 'Enfriar y Servir',
        description: 'Retira la focaccia del molde y colócala en una rejilla de enfriamiento. Déjala enfriar al menos 15 minutos antes de cortarla.',
        didacticInfo: 'Permitir que la focaccia se enfríe un poco estabiliza su estructura y permite que los sabores se asienten. Sin embargo, a diferencia de muchos panes, la focaccia a menudo se disfruta cuando todavía está tibia.',
        image: '/lovable-uploads/focaccia-finished.jpg',
        tip: 'La focaccia está mejor el día que se hace, pero puede guardarse envuelta en plástico a temperatura ambiente durante 2 días. Recaliéntala en un horno a 175°C durante 5-10 minutos para refrescarla.'
      }
    ];
  }
  
  // Default empty array if no match
  return [];
};
