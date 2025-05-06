
import { BakingStep } from '../types';

export const getSourdoughSteps = (recipeName: string, language: string = 'en'): BakingStep[] => {
  // Choose the correct language steps
  if (language === 'pt') {
    return getSourdoughStepsPt(recipeName);
  } else if (language === 'es') {
    return getSourdoughStepsEs(recipeName);
  } else {
    // Default to English
    return getSourdoughStepsEn(recipeName);
  }
};

// English sourdough steps
const getSourdoughStepsEn = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Basic Sourdough')) {
    return [
      {
        title: 'Feed Your Starter',
        description: 'The night before baking, feed your sourdough starter by mixing equal parts starter, flour, and water. Let it sit at room temperature overnight or until bubbly and doubled in size.',
        didacticInfo: 'A healthy, active starter is crucial for sourdough success. It contains wild yeasts and beneficial bacteria that leaven your bread and develop flavor. The starter should be at its peak activity when you make your dough.',
        image: '/lovable-uploads/sourdough-starter.jpg',
        tip: 'Your starter is ready when it passes the float test: place a small piece in water, and if it floats, it\'s ready to use.'
      },
      {
        title: 'Mix Dough Ingredients',
        description: 'In a large bowl, combine 100g active starter with 350g water. Stir to disperse, then add 500g bread flour and 9g salt. Mix until no dry bits remain.',
        didacticInfo: 'Using weight measurements instead of volume ensures accuracy. The high protein content in bread flour provides structure to capture gases produced during fermentation. Salt strengthens gluten and regulates fermentation rate.',
        image: '/lovable-uploads/sourdough-mixing.jpg',
        tip: 'Start with room temperature or slightly cool water (around 70°F/21°C) for a controlled fermentation.'
      },
      {
        title: 'Autolyse',
        description: 'Cover the bowl and let the dough rest for 30 minutes to 1 hour. This rest period allows the flour to fully hydrate and begins gluten development.',
        didacticInfo: 'Autolyse is a technique where flour and water are mixed and rested before adding the salt and fully kneading. During this time, enzymes in the flour begin breaking down the starches and proteins, making the dough more extensible.',
        image: '/lovable-uploads/sourdough-autolyse.jpg',
        tip: 'The autolyse period can be extended up to 2 hours for even better gluten development and easier dough handling.'
      },
      {
        title: 'Stretch and Fold',
        description: 'Perform a series of stretch and folds every 30 minutes over a 2-3 hour period. Wet your hands, grab one side of the dough, stretch it up and fold it over itself. Rotate the bowl 90 degrees and repeat 3 more times.',
        didacticInfo: 'This gentle technique develops gluten strength while preserving the delicate gas structure that forms during fermentation. Each set of stretches and folds further organizes the gluten network.',
        image: '/lovable-uploads/sourdough-stretch-fold.jpg',
        tip: 'You\'ll notice the dough becoming smoother, stronger, and more cohesive with each set of folds.'
      },
      {
        title: 'Bulk Fermentation',
        description: 'After completing the stretching and folding, cover the bowl and let the dough rise at room temperature (70-75°F/21-24°C) for 4-6 hours, or until it has increased in size by about 50% and shows signs of fermentation like bubbles on the surface.',
        didacticInfo: 'During bulk fermentation, the wild yeasts and bacteria in your sourdough starter multiply and produce gases, acids, and flavor compounds. This is when the character of your bread develops.',
        image: '/lovable-uploads/sourdough-bulk-ferment.jpg',
        tip: 'Ambient temperature greatly affects fermentation time. In cooler rooms, it will take longer; in warmer conditions, it will be faster. Watch the dough, not the clock.'
      },
      {
        title: 'Pre-shape',
        description: 'Gently turn the dough out onto a lightly floured work surface. Using a bench scraper, shape it into a rough round by pulling the edges into the center, creating surface tension.',
        didacticInfo: 'Pre-shaping begins to organize the dough and create tension on the surface, which will help the final bread hold its shape during baking and develop a good rise.',
        image: '/lovable-uploads/sourdough-preshape.jpg',
        tip: 'Handle the dough gently to preserve the gas bubbles developed during fermentation. Use flour sparingly to prevent sticking.'
      },
      {
        title: 'Bench Rest',
        description: 'Let the pre-shaped dough rest uncovered for 15-30 minutes to allow the gluten to relax.',
        didacticInfo: 'This rest period allows the gluten strands to relax after pre-shaping, making the final shaping easier and preventing the dough from becoming too tight and tearing.',
        image: '/lovable-uploads/sourdough-bench-rest.jpg',
        tip: 'The dough is ready for final shaping when it has relaxed somewhat but still holds its general round shape.'
      },
      {
        title: 'Final Shape',
        description: 'Flip the dough over so the smooth side is down. Fold the edges toward the center to create a tight package, then flip it over again. Using your hands or a bench scraper, drag the dough toward you on the counter to create tension on the surface.',
        didacticInfo: 'Final shaping creates the structure that will define your loaf. The surface tension developed here is crucial for a good rise (oven spring) and attractive appearance.',
        image: '/lovable-uploads/sourdough-final-shape.jpg',
        tip: 'Use a bench scraper to help move and shape the dough if it\'s sticking to your work surface.'
      },
      {
        title: 'Cold Proof',
        description: 'Place the shaped dough in a floured banneton (proofing basket) or a bowl lined with a well-floured kitchen towel, seam side up. Cover and refrigerate for 12-24 hours.',
        didacticInfo: 'Cold proofing (also called retarding) slows down fermentation, allowing for more flavor development from the bacteria in your sourdough culture. It also makes the dough easier to handle and score.',
        image: '/lovable-uploads/sourdough-cold-proof.jpg',
        tip: 'Use rice flour for dusting your banneton or towel, as it absorbs less moisture and prevents sticking better than wheat flour.'
      },
      {
        title: 'Preheat & Prepare',
        description: 'At least 45 minutes before baking, place your Dutch oven in the oven and preheat to 500°F (260°C). When ready to bake, carefully remove the dough from the refrigerator.',
        didacticInfo: 'A very hot oven and baking vessel are essential for good oven spring (the rapid rise that happens in the first few minutes of baking). The Dutch oven creates a steam-filled environment that allows for maximum expansion.',
        image: '/lovable-uploads/sourdough-preheat.jpg',
        tip: 'Place your Dutch oven on the middle rack of your oven to ensure even heat distribution from top and bottom.'
      },
      {
        title: 'Score & Bake',
        description: 'Turn the dough out onto a piece of parchment paper. Using a sharp blade, score the top of the loaf about 1/4 inch deep. Carefully lower it into the preheated Dutch oven, cover, and bake for 20 minutes. Then reduce the temperature to 450°F (230°C), remove the lid, and bake for another 20-25 minutes until deeply browned.',
        didacticInfo: 'Scoring creates a weak point that allows the bread to expand in a controlled way. The initial covered bake traps steam from the dough itself, helping with oven spring. Removing the lid allows the crust to develop color and flavor.',
        image: '/lovable-uploads/sourdough-scoring.jpg',
        tip: 'A razor blade or very sharp knife works best for scoring. Make confident, decisive cuts at about a 45-degree angle.'
      },
      {
        title: 'Cool & Enjoy',
        description: 'Remove the bread from the Dutch oven and let it cool completely on a wire rack, at least 2 hours before slicing.',
        didacticInfo: 'Cooling is an essential part of the baking process. During this time, the starches set, moisture redistributes throughout the crumb, and the flavor continues to develop.',
        image: '/lovable-uploads/sourdough-cooling.jpg',
        tip: 'Listen for the bread to "sing" as it cools - the crust will make crackling sounds as it contracts. This is the sign of a good loaf with a well-developed crust.'
      }
    ];
  }
  
  // Default empty array if no match
  return [];
};

// Portuguese sourdough steps
const getSourdoughStepsPt = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Basic Sourdough')) {
    return [
      {
        title: 'Alimentar o Fermento Natural',
        description: 'Na noite anterior ao dia de assar, alimente seu fermento natural misturando partes iguais de fermento, farinha e água. Deixe-o descansar em temperatura ambiente durante a noite ou até que fique borbulhante e dobre de tamanho.',
        didacticInfo: 'Um fermento natural saudável e ativo é crucial para o sucesso do pão de fermentação natural. Ele contém leveduras selvagens e bactérias benéficas que fermentam seu pão e desenvolvem sabor. O fermento deve estar no auge de sua atividade quando você fizer sua massa.',
        image: '/lovable-uploads/sourdough-starter.jpg',
        tip: 'Seu fermento está pronto quando passa no teste de flutuação: coloque um pequeno pedaço em água e, se flutuar, está pronto para usar.'
      },
      {
        title: 'Misturar os Ingredientes da Massa',
        description: 'Em uma tigela grande, combine 100g de fermento natural ativo com 350g de água. Mexa para dispersar, então adicione 500g de farinha de pão e 9g de sal. Misture até que não restem pedaços secos.',
        didacticInfo: 'Usar medidas de peso em vez de volume garante precisão. O alto teor de proteína na farinha de pão fornece estrutura para capturar os gases produzidos durante a fermentação. O sal fortalece o glúten e regula a taxa de fermentação.',
        image: '/lovable-uploads/sourdough-mixing.jpg',
        tip: 'Comece com água em temperatura ambiente ou ligeiramente fria (cerca de 21°C) para uma fermentação controlada.'
      },
      {
        title: 'Autólise',
        description: 'Cubra a tigela e deixe a massa descansar por 30 minutos a 1 hora. Este período de descanso permite que a farinha hidrate completamente e começa o desenvolvimento do glúten.',
        didacticInfo: 'Autólise é uma técnica onde farinha e água são misturadas e deixadas em repouso antes de adicionar o sal e sovar completamente. Durante este tempo, enzimas na farinha começam a quebrar os amidos e proteínas, tornando a massa mais extensível.',
        image: '/lovable-uploads/sourdough-autolyse.jpg',
        tip: 'O período de autólise pode ser estendido até 2 horas para um desenvolvimento do glúten ainda melhor e manuseio mais fácil da massa.'
      },
      {
        title: 'Dobras',
        description: 'Realize uma série de dobras a cada 30 minutos durante um período de 2-3 horas. Molhe suas mãos, pegue um lado da massa, estique-a para cima e dobre-a sobre si mesma. Gire a tigela 90 graus e repita mais 3 vezes.',
        didacticInfo: 'Esta técnica suave desenvolve a força do glúten enquanto preserva a delicada estrutura de gás que se forma durante a fermentação. Cada conjunto de dobras organiza ainda mais a rede de glúten.',
        image: '/lovable-uploads/sourdough-stretch-fold.jpg',
        tip: 'Você notará a massa ficando mais lisa, forte e coesa a cada conjunto de dobras.'
      },
      {
        title: 'Fermentação em Massa',
        description: 'Após completar as dobras, cubra a tigela e deixe a massa crescer em temperatura ambiente (21-24°C) por 4-6 horas, ou até que tenha aumentado de tamanho em cerca de 50% e mostre sinais de fermentação como bolhas na superfície.',
        didacticInfo: 'Durante a fermentação em massa, as leveduras selvagens e bactérias do seu fermento natural se multiplicam e produzem gases, ácidos e compostos de sabor. É quando o caráter do seu pão se desenvolve.',
        image: '/lovable-uploads/sourdough-bulk-ferment.jpg',
        tip: 'A temperatura ambiente afeta muito o tempo de fermentação. Em ambientes mais frios, levará mais tempo; em condições mais quentes, será mais rápido. Observe a massa, não o relógio.'
      },
      {
        title: 'Pré-modelagem',
        description: 'Gentilmente coloque a massa em uma superfície de trabalho levemente enfarinhada. Usando um raspador de bancada, modele-a em um formato arredondado puxando as bordas para o centro, criando tensão superficial.',
        didacticInfo: 'A pré-modelagem começa a organizar a massa e criar tensão na superfície, o que ajudará o pão final a manter sua forma durante o cozimento e desenvolver um bom crescimento.',
        image: '/lovable-uploads/sourdough-preshape.jpg',
        tip: 'Manuseie a massa com cuidado para preservar as bolhas de gás desenvolvidas durante a fermentação. Use farinha com moderação para evitar que grude.'
      },
      {
        title: 'Descanso na Bancada',
        description: 'Deixe a massa pré-modelada descansar descoberta por 15-30 minutos para permitir que o glúten relaxe.',
        didacticInfo: 'Este período de descanso permite que os fios de glúten relaxem após a pré-modelagem, facilitando a modelagem final e evitando que a massa fique muito apertada e rasgue.',
        image: '/lovable-uploads/sourdough-bench-rest.jpg',
        tip: 'A massa está pronta para a modelagem final quando relaxou um pouco, mas ainda mantém sua forma redonda geral.'
      },
      {
        title: 'Modelagem Final',
        description: 'Vire a massa para que o lado liso fique para baixo. Dobre as bordas em direção ao centro para criar um pacote firme, depois vire-a novamente. Usando suas mãos ou um raspador de bancada, arraste a massa em sua direção no balcão para criar tensão na superfície.',
        didacticInfo: 'A modelagem final cria a estrutura que definirá seu pão. A tensão superficial desenvolvida aqui é crucial para um bom crescimento (expansão no forno) e aparência atraente.',
        image: '/lovable-uploads/sourdough-final-shape.jpg',
        tip: 'Use um raspador de bancada para ajudar a mover e moldar a massa se ela estiver grudando na superfície de trabalho.'
      },
      {
        title: 'Fermentação a Frio',
        description: 'Coloque a massa modelada em um banneton (cesto de fermentação) enfarinhado ou em uma tigela forrada com um pano de cozinha bem enfarinhado, com a emenda para cima. Cubra e refrigere por 12-24 horas.',
        didacticInfo: 'A fermentação a frio (também chamada de retardamento) desacelera a fermentação, permitindo mais desenvolvimento de sabor das bactérias em sua cultura de fermento natural. Também torna a massa mais fácil de manusear e cortar.',
        image: '/lovable-uploads/sourdough-cold-proof.jpg',
        tip: 'Use farinha de arroz para polvilhar seu banneton ou pano, pois ela absorve menos umidade e evita que grude melhor do que a farinha de trigo.'
      },
      {
        title: 'Pré-aquecer e Preparar',
        description: 'Pelo menos 45 minutos antes de assar, coloque sua panela de ferro fundido no forno e pré-aqueça a 260°C. Quando estiver pronto para assar, retire cuidadosamente a massa da geladeira.',
        didacticInfo: 'Um forno e um recipiente de cozimento muito quentes são essenciais para uma boa expansão no forno (o crescimento rápido que acontece nos primeiros minutos de cozimento). A panela de ferro fundido cria um ambiente cheio de vapor que permite a máxima expansão.',
        image: '/lovable-uploads/sourdough-preheat.jpg',
        tip: 'Coloque sua panela de ferro fundido na prateleira do meio do seu forno para garantir uma distribuição uniforme do calor de cima e de baixo.'
      },
      {
        title: 'Cortar e Assar',
        description: 'Coloque a massa em um pedaço de papel manteiga. Usando uma lâmina afiada, faça um corte no topo do pão com cerca de 0,6 cm de profundidade. Cuidadosamente, abaixe-o na panela de ferro fundido pré-aquecida, tampe e asse por 20 minutos. Em seguida, reduza a temperatura para 230°C, remova a tampa e asse por mais 20-25 minutos até ficar bem dourado.',
        didacticInfo: 'O corte cria um ponto fraco que permite que o pão se expanda de maneira controlada. O cozimento inicial coberto prende o vapor da própria massa, ajudando na expansão no forno. Remover a tampa permite que a crosta desenvolva cor e sabor.',
        image: '/lovable-uploads/sourdough-scoring.jpg',
        tip: 'Uma lâmina de barbear ou uma faca muito afiada funciona melhor para cortar. Faça cortes confiantes e decisivos em um ângulo de aproximadamente 45 graus.'
      },
      {
        title: 'Esfriar e Aproveitar',
        description: 'Retire o pão da panela de ferro fundido e deixe-o esfriar completamente em uma grade, pelo menos 2 horas antes de fatiar.',
        didacticInfo: 'O resfriamento é uma parte essencial do processo de cozimento. Durante este tempo, os amidos se fixam, a umidade se redistribui por todo o miolo, e o sabor continua a se desenvolver.',
        image: '/lovable-uploads/sourdough-cooling.jpg',
        tip: 'Ouça o pão "cantar" enquanto esfria - a crosta fará sons de estalido à medida que contrai. Este é o sinal de um bom pão com uma crosta bem desenvolvida.'
      }
    ];
  }
  
  // Default empty array if no match
  return [];
};

// Spanish sourdough steps
const getSourdoughStepsEs = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Basic Sourdough')) {
    return [
      {
        title: 'Alimentar la Masa Madre',
        description: 'La noche anterior a hornear, alimenta tu masa madre mezclando partes iguales de masa madre, harina y agua. Déjala reposar a temperatura ambiente durante la noche o hasta que esté burbujeante y haya duplicado su tamaño.',
        didacticInfo: 'Una masa madre saludable y activa es crucial para el éxito del pan de masa madre. Contiene levaduras salvajes y bacterias beneficiosas que fermentan tu pan y desarrollan sabor. La masa madre debe estar en su punto máximo de actividad cuando hagas tu masa.',
        image: '/lovable-uploads/sourdough-starter.jpg',
        tip: 'Tu masa madre está lista cuando pasa la prueba de flotación: coloca un pequeño trozo en agua y, si flota, está lista para usar.'
      },
      {
        title: 'Mezclar los Ingredientes',
        description: 'En un recipiente grande, combina 100g de masa madre activa con 350g de agua. Revuelve para dispersar, luego añade 500g de harina de pan y 9g de sal. Mezcla hasta que no queden partes secas.',
        didacticInfo: 'Usar medidas de peso en lugar de volumen asegura precisión. El alto contenido de proteína en la harina de pan proporciona estructura para capturar los gases producidos durante la fermentación. La sal fortalece el gluten y regula la tasa de fermentación.',
        image: '/lovable-uploads/sourdough-mixing.jpg',
        tip: 'Comienza con agua a temperatura ambiente o ligeramente fría (alrededor de 21°C) para una fermentación controlada.'
      },
      {
        title: 'Autólisis',
        description: 'Cubre el recipiente y deja que la masa repose de 30 minutos a 1 hora. Este período de descanso permite que la harina se hidrate completamente y comienza el desarrollo del gluten.',
        didacticInfo: 'La autólisis es una técnica donde la harina y el agua se mezclan y se dejan reposar antes de añadir la sal y amasar completamente. Durante este tiempo, las enzimas en la harina comienzan a descomponer los almidones y proteínas, haciendo que la masa sea más extensible.',
        image: '/lovable-uploads/sourdough-autolyse.jpg',
        tip: 'El período de autólisis puede extenderse hasta 2 horas para un desarrollo del gluten aún mejor y un manejo más fácil de la masa.'
      },
      {
        title: 'Estirar y Plegar',
        description: 'Realiza una serie de estiramientos y pliegues cada 30 minutos durante un período de 2-3 horas. Mójate las manos, toma un lado de la masa, estíralo hacia arriba y dóblalo sobre sí mismo. Gira el recipiente 90 grados y repite 3 veces más.',
        didacticInfo: 'Esta técnica suave desarrolla la fuerza del gluten mientras preserva la delicada estructura de gas que se forma durante la fermentación. Cada conjunto de pliegues organiza aún más la red de gluten.',
        image: '/lovable-uploads/sourdough-stretch-fold.jpg',
        tip: 'Notarás que la masa se vuelve más lisa, fuerte y cohesionada con cada conjunto de pliegues.'
      },
      {
        title: 'Fermentación en Bloque',
        description: 'Después de completar los pliegues, cubre el recipiente y deja que la masa suba a temperatura ambiente (21-24°C) durante 4-6 horas, o hasta que haya aumentado su tamaño en aproximadamente un 50% y muestre señales de fermentación como burbujas en la superficie.',
        didacticInfo: 'Durante la fermentación en bloque, las levaduras salvajes y bacterias en tu masa madre se multiplican y producen gases, ácidos y compuestos de sabor. Es cuando se desarrolla el carácter de tu pan.',
        image: '/lovable-uploads/sourdough-bulk-ferment.jpg',
        tip: 'La temperatura ambiente afecta mucho el tiempo de fermentación. En ambientes más fríos, tomará más tiempo; en condiciones más cálidas, será más rápido. Observa la masa, no el reloj.'
      },
      {
        title: 'Pre-formado',
        description: 'Con suavidad, vuelca la masa sobre una superficie de trabajo ligeramente enharinada. Usando un raspador de masa, dale forma redondeada tirando de los bordes hacia el centro, creando tensión superficial.',
        didacticInfo: 'El pre-formado comienza a organizar la masa y crear tensión en la superficie, lo que ayudará al pan final a mantener su forma durante la cocción y desarrollar un buen crecimiento.',
        image: '/lovable-uploads/sourdough-preshape.jpg',
        tip: 'Manipula la masa con cuidado para preservar las burbujas de gas desarrolladas durante la fermentación. Usa harina con moderación para evitar que se pegue.'
      },
      {
        title: 'Reposo en Mesa',
        description: 'Deja que la masa pre-formada repose descubierta durante 15-30 minutos para permitir que el gluten se relaje.',
        didacticInfo: 'Este período de reposo permite que los hilos de gluten se relajen después del pre-formado, facilitando el formado final y evitando que la masa se vuelva demasiado tensa y se rasgue.',
        image: '/lovable-uploads/sourdough-bench-rest.jpg',
        tip: 'La masa está lista para el formado final cuando se ha relajado un poco pero todavía mantiene su forma redonda general.'
      },
      {
        title: 'Formado Final',
        description: 'Voltea la masa para que el lado liso quede hacia abajo. Dobla los bordes hacia el centro para crear un paquete firme, luego voltéala nuevamente. Usando tus manos o un raspador de masa, arrastra la masa hacia ti en la encimera para crear tensión en la superficie.',
        didacticInfo: 'El formado final crea la estructura que definirá tu pan. La tensión superficial desarrollada aquí es crucial para un buen crecimiento (expansión en el horno) y apariencia atractiva.',
        image: '/lovable-uploads/sourdough-final-shape.jpg',
        tip: 'Usa un raspador de masa para ayudar a mover y dar forma a la masa si se está pegando a tu superficie de trabajo.'
      },
      {
        title: 'Fermentación en Frío',
        description: 'Coloca la masa formada en un banneton (cesto de fermentación) enharinado o en un recipiente forrado con un paño de cocina bien enharinado, con la costura hacia arriba. Cúbrelo y refrigera durante 12-24 horas.',
        didacticInfo: 'La fermentación en frío (también llamada retardado) ralentiza la fermentación, permitiendo más desarrollo de sabor de las bacterias en tu cultivo de masa madre. También hace que la masa sea más fácil de manejar y cortar.',
        image: '/lovable-uploads/sourdough-cold-proof.jpg',
        tip: 'Usa harina de arroz para espolvorear tu banneton o paño, ya que absorbe menos humedad y evita que se pegue mejor que la harina de trigo.'
      },
      {
        title: 'Precalentar y Preparar',
        description: 'Al menos 45 minutos antes de hornear, coloca tu olla de hierro fundido en el horno y precalienta a 260°C. Cuando estés listo para hornear, saca con cuidado la masa del refrigerador.',
        didacticInfo: 'Un horno y un recipiente de cocción muy calientes son esenciales para una buena expansión en el horno (el rápido crecimiento que ocurre en los primeros minutos de horneado). La olla de hierro fundido crea un ambiente lleno de vapor que permite la máxima expansión.',
        image: '/lovable-uploads/sourdough-preheat.jpg',
        tip: 'Coloca tu olla de hierro fundido en la rejilla media de tu horno para asegurar una distribución uniforme del calor desde arriba y abajo.'
      },
      {
        title: 'Cortar y Hornear',
        description: 'Coloca la masa sobre un trozo de papel de hornear. Usando una cuchilla afilada, haz un corte en la parte superior del pan de aproximadamente 0,6 cm de profundidad. Con cuidado, bájalo en la olla de hierro fundido precalentada, cúbrelo y hornea durante 20 minutos. Luego reduce la temperatura a 230°C, quita la tapa y hornea durante otros 20-25 minutos hasta que esté bien dorado.',
        didacticInfo: 'El corte crea un punto débil que permite que el pan se expanda de manera controlada. El horneado inicial cubierto atrapa el vapor de la propia masa, ayudando con la expansión en el horno. Quitar la tapa permite que la corteza desarrolle color y sabor.',
        image: '/lovable-uploads/sourdough-scoring.jpg',
        tip: 'Una cuchilla de afeitar o un cuchillo muy afilado funciona mejor para cortar. Haz cortes confiados y decisivos en un ángulo de aproximadamente 45 grados.'
      },
      {
        title: 'Enfriar y Disfrutar',
        description: 'Saca el pan de la olla de hierro fundido y déjalo enfriar completamente en una rejilla, al menos 2 horas antes de cortarlo.',
        didacticInfo: 'El enfriamiento es una parte esencial del proceso de horneado. Durante este tiempo, los almidones se asientan, la humedad se redistribuye por toda la miga y el sabor continúa desarrollándose.',
        image: '/lovable-uploads/sourdough-cooling.jpg',
        tip: 'Escucha el pan "cantar" mientras se enfría - la corteza hará sonidos de crujido a medida que se contrae. Esta es la señal de un buen pan con una corteza bien desarrollada.'
      }
    ];
  }
  
  // Default empty array if no match
  return [];
};
