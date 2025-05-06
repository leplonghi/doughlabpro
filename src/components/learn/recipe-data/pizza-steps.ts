
import { BakingStep } from '../types';

export const getPizzaSteps = (recipeName: string, language: string = 'en'): BakingStep[] => {
  // Choose the correct language steps
  if (language === 'pt') {
    return getPizzaStepsPt(recipeName);
  } else if (language === 'es') {
    return getPizzaStepsEs(recipeName);
  } else {
    // Default to English
    return getPizzaStepsEn(recipeName);
  }
};

// English steps
const getPizzaStepsEn = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Neapolitan')) {
    return [
      {
        title: 'Mix Ingredients',
        description: 'In a large bowl, combine flour and salt. In a separate container, mix water and yeast. Make a well in the flour and pour in the yeast mixture.',
        didacticInfo: 'Neapolitan dough is traditionally very simple, using only flour, water, salt, and a minimal amount of yeast. This simplicity allows the quality of the flour to shine through.',
        image: '/lovable-uploads/dough-mixing.jpg',
        tip: 'Use room temperature water (around 65°F/18°C) for a longer, slower fermentation that develops better flavor.'
      },
      {
        title: 'Knead the Dough',
        description: 'Mix until ingredients are combined, then transfer to a floured surface. Knead for 10-15 minutes until smooth and elastic.',
        didacticInfo: 'Proper kneading develops the gluten network that gives Neapolitan pizza its characteristic chew and structure. You\'ll know it\'s ready when the dough is smooth and springs back when poked.',
        image: '/lovable-uploads/dough-kneading.jpg',
        tip: 'Don\'t add too much flour while kneading. A slightly tacky dough is good - it will become less sticky as the gluten develops.'
      },
      {
        title: 'First Rise (Bulk Fermentation)',
        description: 'Place the dough in a lightly oiled bowl, cover with a damp cloth, and let rise at room temperature for 2 hours.',
        didacticInfo: 'During this first rise, fermentation begins as the yeast consumes sugars and produces carbon dioxide, which creates the air bubbles in your dough. This process also starts developing flavor.',
        image: '/lovable-uploads/dough-fermentation.jpg',
        tip: 'For best results, keep the dough around 75°F (24°C) during fermentation. Too cold and it will rise slowly; too hot and it rises too quickly without developing flavor.'
      },
      {
        title: 'Divide and Ball',
        description: 'Gently turn the dough onto a lightly floured surface. Divide into 4 equal pieces and shape each into a tight ball.',
        didacticInfo: 'The proper balling technique creates surface tension, which helps the dough keep its shape and trap gases produced during fermentation. This contributes to the final texture of the crust.',
        image: '/lovable-uploads/dough-balling.jpg',
        tip: 'Use a kitchen scale to ensure all dough balls are the same weight. This ensures even cooking and consistent pizzas.'
      },
      {
        title: 'Second Rise (Proofing)',
        description: 'Place the dough balls on a lightly floured tray, cover, and let proof for 4-6 hours at room temperature or 24-48 hours in the refrigerator.',
        didacticInfo: 'During this final rise, the flavor compounds continue to develop through fermentation. A longer, colder proof generally results in more complex flavors and better texture.',
        image: '/lovable-uploads/dough-proofing.jpg',
        tip: 'The dough balls are ready when they've grown to about 1.5-2 times their original size and are soft and pillowy.'
      },
      {
        title: 'Shape the Pizza',
        description: 'On a floured surface, gently press the dough ball from the center outward, leaving a slightly thicker edge. Stretch to about 10-12 inches diameter.',
        didacticInfo: 'Authentic Neapolitan pizza is shaped by hand, not with a rolling pin. This preserves the gas bubbles in the dough that create the characteristic light, airy crust with charred bubbles.',
        image: '/lovable-uploads/pizza-shaping.jpg',
        tip: 'If the dough resists stretching, let it rest for 5-10 minutes to allow the gluten to relax, then try again.'
      },
      {
        title: 'Top and Bake',
        description: 'Add a thin layer of sauce, minimal toppings, and bake in the hottest possible oven (ideally 850°F/450°C) for 60-90 seconds.',
        didacticInfo: 'Neapolitan pizza is traditionally baked in a wood-fired oven at extremely high temperatures. This quick cooking creates the distinctive leopard-spotted char on the crust while keeping the center soft and tender.',
        image: '/lovable-uploads/pizza-baking.jpg',
        tip: 'If using a home oven, place a pizza stone or steel on the highest rack and preheat at maximum temperature for at least an hour before baking.'
      },
      {
        title: 'Rest and Serve',
        description: 'Remove from the oven, let rest for 1-2 minutes to allow the cheese to set slightly, then slice and serve immediately.',
        didacticInfo: 'Authentic Neapolitan pizza is meant to be eaten fresh from the oven when the contrast between the crisp exterior and soft interior is at its peak. The center may appear wet or undercooked to some, but this is traditional.',
        image: '/lovable-uploads/pizza-serving.jpg',
        tip: 'For true Neapolitan tradition, pizza is often served uncut - each diner uses a knife and fork to cut their own portions.'
      }
    ];
  } else if (recipeName.includes('New York')) {
    return [
      {
        title: 'Mix Ingredients',
        description: 'In a large bowl, combine flour, salt, sugar, and dry yeast. Add oil and water, then mix until a shaggy dough forms.',
        didacticInfo: 'NY style dough has more ingredients than Neapolitan - oil adds tenderness and sugar helps with browning. The slightly higher hydration makes a more extensible dough.',
        image: '/lovable-uploads/dough-mixing.jpg',
        tip: 'Use bread flour with higher protein content (around 12-14%) for the characteristic NY chew and structure.'
      },
      {
        title: 'Knead the Dough',
        description: 'Transfer to a floured surface and knead for 10-12 minutes until smooth and elastic. You should be able to stretch a small piece into a thin "windowpane".',
        didacticInfo: 'Proper gluten development is crucial for NY style pizza. The dough needs to be strong enough to be stretched very thin while still supporting toppings.',
        image: '/lovable-uploads/dough-kneading.jpg',
        tip: 'The dough should be tacky but not sticky. If it's sticking to your hands too much, add a little more flour, but be careful not to add too much.'
      },
      {
        title: 'Bulk Fermentation',
        description: 'Place the dough in an oiled bowl, cover, and let rise at room temperature for 1-2 hours until doubled in size.',
        didacticInfo: 'This first fermentation builds flavor and develops the gluten structure further. The oil in the dough helps it stay soft and pliable even after a long cold fermentation.',
        image: '/lovable-uploads/dough-fermentation.jpg',
        tip: 'For more flavor development, you can let the dough rise in the refrigerator for up to 24 hours. This cold fermentation slows down the yeast but allows enzymes to continue breaking down starches into sugars.'
      },
      {
        title: 'Divide and Ball',
        description: 'Gently deflate the dough and divide into 2-3 equal portions. Shape each portion into a tight ball.',
        didacticInfo: 'NY style pizzas are typically larger than Neapolitan, so we make fewer, larger dough balls. Creating surface tension when balling leads to better structure.',
        image: '/lovable-uploads/dough-balling.jpg',
        tip: 'For a standard NY size pizza (about 18 inches), each dough ball should weigh approximately 350-400g.'
      },
      {
        title: 'Cold Fermentation',
        description: 'Place dough balls in sealed containers or on a tray covered with plastic wrap. Refrigerate for at least 24 hours, or up to 72 hours for best flavor.',
        didacticInfo: 'Long, cold fermentation is the secret to NY pizza dough's flavor. During this time, the yeast works slowly while enzymes break down complex carbohydrates into simpler sugars, creating depth of flavor.',
        image: '/lovable-uploads/dough-cold-fermentation.jpg',
        tip: 'If refrigerated, allow dough to warm up for 1-2 hours before stretching.'
      },
      {
        title: 'Shape the Pizza',
        description: 'Let dough reach room temperature. On a floured surface, press outward from the center leaving a thicker edge. Stretch to 14-18 inches diameter.',
        didacticInfo: 'NY style pizza is larger and thinner than Neapolitan, but still retains a soft, foldable quality. Professional pizza makers often toss the dough to stretch it, but hand-stretching works fine for home cooks.',
        image: '/lovable-uploads/pizza-stretching.jpg',
        tip: 'If the dough springs back too much, let it rest for 5-10 minutes to relax the gluten, then try again.'
      },
      {
        title: 'Top and Bake',
        description: 'Add a moderate layer of sauce, generous low-moisture mozzarella, and desired toppings. Bake on a preheated stone or steel at 550°F (290°C) for 6-8 minutes.',
        didacticInfo: 'NY style pizza uses more cheese than Neapolitan and is cooked longer at a lower temperature. This creates the characteristic browned cheese and crisp-yet-bendable crust.',
        image: '/lovable-uploads/pizza-toppings.jpg',
        tip: 'Grate the cheese rather than slice it for more even melting. And don't overload with toppings - NY style works best with a reasonable amount of toppings.'
      },
      {
        title: 'Finish and Serve',
        description: 'Remove from the oven, let cool slightly, slice into large triangular pieces, and serve.',
        didacticInfo: 'The classic New York slice is large and triangular, designed to be folded lengthwise to eat on the go. This folding technique is practically a cultural institution in New York City.',
        image: '/lovable-uploads/ny-finished.jpg',
        tip: 'For authentic NY flavor, sprinkle with grated parmesan and red pepper flakes before serving.'
      }
    ];
  }
  
  // Default empty array if no match
  return [];
};

// Portuguese steps
const getPizzaStepsPt = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Neapolitan')) {
    return [
      {
        title: 'Misturar Ingredientes',
        description: 'Em uma tigela grande, misture a farinha e o sal. Em um recipiente separado, misture a água e o fermento. Faça um poço na farinha e despeje a mistura de fermento.',
        didacticInfo: 'A massa napolitana é tradicionalmente muito simples, usando apenas farinha, água, sal e uma quantidade mínima de fermento. Essa simplicidade permite que a qualidade da farinha se destaque.',
        image: '/lovable-uploads/dough-mixing.jpg',
        tip: 'Use água em temperatura ambiente (cerca de 18°C) para uma fermentação mais longa e lenta que desenvolve melhor sabor.'
      },
      {
        title: 'Amassar a Massa',
        description: 'Misture até que os ingredientes estejam combinados, depois transfira para uma superfície enfarinhada. Amasse por 10-15 minutos até ficar lisa e elástica.',
        didacticInfo: 'O amassamento adequado desenvolve a rede de glúten que dá à pizza napolitana sua mastigação e estrutura características. Você saberá que está pronta quando a massa estiver lisa e voltar quando pressionada.',
        image: '/lovable-uploads/dough-kneading.jpg',
        tip: 'Não adicione muita farinha ao amassar. Uma massa levemente pegajosa é boa - ficará menos pegajosa à medida que o glúten se desenvolve.'
      },
      {
        title: 'Primeira Fermentação',
        description: 'Coloque a massa em uma tigela levemente untada, cubra com um pano úmido e deixe crescer em temperatura ambiente por 2 horas.',
        didacticInfo: 'Durante esta primeira fermentação, o fermento começa a consumir açúcares e produzir dióxido de carbono, criando as bolhas de ar na massa. Este processo também começa a desenvolver sabor.',
        image: '/lovable-uploads/dough-fermentation.jpg',
        tip: 'Para melhores resultados, mantenha a massa em torno de 24°C durante a fermentação. Muito fria e ela crescerá lentamente; muito quente e crescerá rápido demais sem desenvolver sabor.'
      },
      {
        title: 'Dividir e Formar Bolas',
        description: 'Gentilmente vire a massa sobre uma superfície levemente enfarinhada. Divida em 4 partes iguais e molde cada uma em uma bola firme.',
        didacticInfo: 'A técnica adequada de boleamento cria tensão superficial, que ajuda a massa a manter sua forma e aprisionar gases produzidos durante a fermentação. Isso contribui para a textura final da crosta.',
        image: '/lovable-uploads/dough-balling.jpg',
        tip: 'Use uma balança de cozinha para garantir que todas as bolas de massa tenham o mesmo peso. Isso garante cozimento uniforme e pizzas consistentes.'
      },
      {
        title: 'Segunda Fermentação',
        description: 'Coloque as bolas de massa em uma bandeja levemente enfarinhada, cubra e deixe descansar por 4-6 horas em temperatura ambiente ou 24-48 horas na geladeira.',
        didacticInfo: 'Durante esta fermentação final, os compostos de sabor continuam a se desenvolver. Uma fermentação mais longa e fria geralmente resulta em sabores mais complexos e melhor textura.',
        image: '/lovable-uploads/dough-proofing.jpg',
        tip: 'As bolas de massa estão prontas quando cresceram cerca de 1,5-2 vezes seu tamanho original e estão macias e fofas.'
      },
      {
        title: 'Abrir a Pizza',
        description: 'Em uma superfície enfarinhada, pressione suavemente a bola de massa do centro para fora, deixando uma borda ligeiramente mais grossa. Estique até cerca de 25-30 cm de diâmetro.',
        didacticInfo: 'A pizza napolitana autêntica é moldada à mão, não com rolo. Isso preserva as bolhas de gás na massa que criam a característica crosta leve e aerada com bolhas carbonizadas.',
        image: '/lovable-uploads/pizza-shaping.jpg',
        tip: 'Se a massa resistir ao estiramento, deixe-a descansar por 5-10 minutos para permitir que o glúten relaxe, então tente novamente.'
      },
      {
        title: 'Adicionar Cobertura e Assar',
        description: 'Adicione uma fina camada de molho, coberturas mínimas, e asse no forno mais quente possível (idealmente 450°C) por 60-90 segundos.',
        didacticInfo: 'A pizza napolitana é tradicionalmente assada em forno a lenha em temperaturas extremamente altas. Este cozimento rápido cria as distintivas manchas leopardo na crosta enquanto mantém o centro macio e tenro.',
        image: '/lovable-uploads/pizza-baking.jpg',
        tip: 'Se estiver usando um forno doméstico, coloque uma pedra ou chapa de pizza na prateleira mais alta e pré-aqueça na temperatura máxima por pelo menos uma hora antes de assar.'
      },
      {
        title: 'Descansar e Servir',
        description: 'Retire do forno, deixe descansar por 1-2 minutos para permitir que o queijo se firme ligeiramente, depois fatie e sirva imediatamente.',
        didacticInfo: 'A pizza napolitana autêntica deve ser comida fresca do forno quando o contraste entre o exterior crocante e o interior macio está no seu auge. O centro pode parecer úmido ou mal cozido para alguns, mas isso é tradicional.',
        image: '/lovable-uploads/pizza-serving.jpg',
        tip: 'Na tradição napolitana verdadeira, a pizza é frequentemente servida sem cortar - cada pessoa usa faca e garfo para cortar suas próprias porções.'
      }
    ];
  } else if (recipeName.includes('New York')) {
    return [
      {
        title: 'Misturar Ingredientes',
        description: 'Em uma tigela grande, combine farinha, sal, açúcar e fermento seco. Adicione óleo e água, depois misture até formar uma massa irregular.',
        didacticInfo: 'A massa estilo NY tem mais ingredientes que a napolitana - o óleo adiciona maciez e o açúcar ajuda no douramento. A hidratação ligeiramente maior torna a massa mais extensível.',
        image: '/lovable-uploads/dough-mixing.jpg',
        tip: 'Use farinha de pão com maior teor de proteína (cerca de 12-14%) para a característica mastigação e estrutura NY.'
      },
      {
        title: 'Amassar a Massa',
        description: 'Transfira para uma superfície enfarinhada e amasse por 10-12 minutos até ficar lisa e elástica. Você deve conseguir esticar um pequeno pedaço em uma fina "janela".',
        didacticInfo: 'O desenvolvimento adequado do glúten é crucial para a pizza estilo NY. A massa precisa ser forte o suficiente para ser esticada muito fina enquanto ainda suporta coberturas.',
        image: '/lovable-uploads/dough-kneading.jpg',
        tip: 'A massa deve estar pegajosa mas não grudenta. Se estiver grudando muito nas suas mãos, adicione um pouco mais de farinha, mas cuidado para não adicionar demais.'
      },
      {
        title: 'Fermentação em Massa',
        description: 'Coloque a massa em uma tigela untada, cubra e deixe crescer em temperatura ambiente por 1-2 horas até dobrar de tamanho.',
        didacticInfo: 'Esta primeira fermentação desenvolve sabor e desenvolve ainda mais a estrutura do glúten. O óleo na massa ajuda a mantê-la macia e flexível mesmo após uma longa fermentação fria.',
        image: '/lovable-uploads/dough-fermentation.jpg',
        tip: 'Para maior desenvolvimento de sabor, você pode deixar a massa crescer na geladeira por até 24 horas. Esta fermentação fria desacelera o fermento, mas permite que enzimas continuem quebrando amidos em açúcares.'
      },
      {
        title: 'Dividir e Formar Bolas',
        description: 'Gentilmente esvazie a massa e divida em 2-3 porções iguais. Molde cada porção em uma bola firme.',
        didacticInfo: 'As pizzas estilo NY são tipicamente maiores que as napolitanas, então fazemos menos bolas de massa, porém maiores. Criar tensão superficial ao bolear leva a uma melhor estrutura.',
        image: '/lovable-uploads/dough-balling.jpg',
        tip: 'Para uma pizza NY de tamanho padrão (cerca de 45 cm), cada bola de massa deve pesar aproximadamente 350-400g.'
      },
      {
        title: 'Fermentação a Frio',
        description: 'Coloque as bolas de massa em recipientes fechados ou em uma bandeja coberta com filme plástico. Refrigere por pelo menos 24 horas, ou até 72 horas para melhor sabor.',
        didacticInfo: 'A fermentação longa e fria é o segredo do sabor da massa de pizza NY. Durante este tempo, o fermento trabalha lentamente enquanto enzimas quebram carboidratos complexos em açúcares mais simples, criando profundidade de sabor.',
        image: '/lovable-uploads/dough-cold-fermentation.jpg',
        tip: 'Se refrigerada, permita que a massa se aqueça por 1-2 horas antes de esticar.'
      },
      {
        title: 'Abrir a Pizza',
        description: 'Deixe a massa atingir a temperatura ambiente. Em uma superfície enfarinhada, pressione do centro para fora deixando uma borda mais espessa. Estique até 35-45 cm de diâmetro.',
        didacticInfo: 'A pizza estilo NY é maior e mais fina que a napolitana, mas ainda mantém uma qualidade macia e dobrável. Pizzaiolos profissionais frequentemente jogam a massa para esticá-la, mas esticar à mão funciona bem para cozinheiros caseiros.',
        image: '/lovable-uploads/pizza-stretching.jpg',
        tip: 'Se a massa voltar muito, deixe-a descansar por 5-10 minutos para relaxar o glúten, depois tente novamente.'
      },
      {
        title: 'Adicionar Cobertura e Assar',
        description: 'Adicione uma camada moderada de molho, generoso queijo muçarela de baixa umidade e coberturas desejadas. Asse em uma pedra ou chapa pré-aquecida a 290°C por 6-8 minutos.',
        didacticInfo: 'A pizza estilo NY usa mais queijo que a napolitana e é cozida por mais tempo em temperatura mais baixa. Isso cria o característico queijo dourado e crosta crocante mas dobrável.',
        image: '/lovable-uploads/pizza-toppings.jpg',
        tip: 'Rale o queijo em vez de fatiá-lo para um derretimento mais uniforme. E não sobrecarregue com coberturas - o estilo NY funciona melhor com uma quantidade razoável de coberturas.'
      },
      {
        title: 'Finalizar e Servir',
        description: 'Retire do forno, deixe esfriar ligeiramente, fatie em grandes fatias triangulares e sirva.',
        didacticInfo: 'A clássica fatia de Nova York é grande e triangular, projetada para ser dobrada longitudinalmente para comer em movimento. Esta técnica de dobrar é praticamente uma instituição cultural na cidade de Nova York.',
        image: '/lovable-uploads/ny-finished.jpg',
        tip: 'Para sabor NY autêntico, polvilhe com parmesão ralado e flocos de pimenta vermelha antes de servir.'
      }
    ];
  }
  
  // Default empty array if no match
  return [];
};

// Spanish steps
const getPizzaStepsEs = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Neapolitan')) {
    return [
      {
        title: 'Mezclar Ingredientes',
        description: 'En un recipiente grande, combina la harina y la sal. En un recipiente separado, mezcla el agua y la levadura. Haz un hueco en la harina y vierte la mezcla de levadura.',
        didacticInfo: 'La masa napolitana es tradicionalmente muy simple, usando solo harina, agua, sal y una cantidad mínima de levadura. Esta simplicidad permite que la calidad de la harina brille.',
        image: '/lovable-uploads/dough-mixing.jpg',
        tip: 'Usa agua a temperatura ambiente (alrededor de 18°C) para una fermentación más larga y lenta que desarrolla mejor sabor.'
      },
      {
        title: 'Amasar la Masa',
        description: 'Mezcla hasta que los ingredientes se combinen, luego transfiere a una superficie enharinada. Amasa durante 10-15 minutos hasta que quede suave y elástica.',
        didacticInfo: 'El amasado adecuado desarrolla la red de gluten que da a la pizza napolitana su característico masticado y estructura. Sabrás que está lista cuando la masa esté suave y rebote al presionarla.',
        image: '/lovable-uploads/dough-kneading.jpg',
        tip: 'No agregues demasiada harina al amasar. Una masa ligeramente pegajosa es buena - se volverá menos pegajosa a medida que el gluten se desarrolla.'
      },
      {
        title: 'Primera Fermentación',
        description: 'Coloca la masa en un recipiente ligeramente aceitado, cubre con un paño húmedo y deja levar a temperatura ambiente durante 2 horas.',
        didacticInfo: 'Durante esta primera fermentación, la levadura comienza a consumir azúcares y producir dióxido de carbono, creando las burbujas de aire en tu masa. Este proceso también comienza a desarrollar sabor.',
        image: '/lovable-uploads/dough-fermentation.jpg',
        tip: 'Para mejores resultados, mantén la masa alrededor de 24°C durante la fermentación. Demasiado fría y levará lentamente; demasiado caliente y levará demasiado rápido sin desarrollar sabor.'
      },
      {
        title: 'Dividir y Formar Bolas',
        description: 'Coloca suavemente la masa sobre una superficie ligeramente enharinada. Divide en 4 piezas iguales y forma cada una en una bola firme.',
        didacticInfo: 'La técnica adecuada de boleado crea tensión superficial, que ayuda a la masa a mantener su forma y atrapar gases producidos durante la fermentación. Esto contribuye a la textura final de la corteza.',
        image: '/lovable-uploads/dough-balling.jpg',
        tip: 'Usa una báscula de cocina para asegurar que todas las bolas de masa tengan el mismo peso. Esto asegura una cocción uniforme y pizzas consistentes.'
      },
      {
        title: 'Segunda Fermentación',
        description: 'Coloca las bolas de masa en una bandeja ligeramente enharinada, cubre y deja reposar durante 4-6 horas a temperatura ambiente o 24-48 horas en el refrigerador.',
        didacticInfo: 'Durante esta fermentación final, los compuestos de sabor continúan desarrollándose. Una fermentación más larga y fría generalmente resulta en sabores más complejos y mejor textura.',
        image: '/lovable-uploads/dough-proofing.jpg',
        tip: 'Las bolas de masa están listas cuando han crecido aproximadamente 1.5-2 veces su tamaño original y están suaves y esponjosas.'
      },
      {
        title: 'Estirar la Pizza',
        description: 'En una superficie enharinada, presiona suavemente la bola de masa desde el centro hacia afuera, dejando un borde ligeramente más grueso. Estira hasta unos 25-30 cm de diámetro.',
        didacticInfo: 'La auténtica pizza napolitana se forma a mano, no con rodillo. Esto preserva las burbujas de gas en la masa que crean la característica corteza ligera y aireada con burbujas carbonizadas.',
        image: '/lovable-uploads/pizza-shaping.jpg',
        tip: 'Si la masa resiste al estirarla, déjala reposar durante 5-10 minutos para permitir que el gluten se relaje, luego intenta nuevamente.'
      },
      {
        title: 'Agregar Cobertura y Hornear',
        description: 'Añade una capa fina de salsa, toppings mínimos y hornea en el horno más caliente posible (idealmente 450°C) durante 60-90 segundos.',
        didacticInfo: 'La pizza napolitana se hornea tradicionalmente en un horno de leña a temperaturas extremadamente altas. Esta cocción rápida crea el distintivo moteado leopardo en la corteza mientras mantiene el centro suave y tierno.',
        image: '/lovable-uploads/pizza-baking.jpg',
        tip: 'Si usas un horno doméstico, coloca una piedra o acero para pizza en la rejilla más alta y precalienta a temperatura máxima durante al menos una hora antes de hornear.'
      },
      {
        title: 'Reposar y Servir',
        description: 'Retira del horno, deja reposar durante 1-2 minutos para permitir que el queso se asiente ligeramente, luego corta y sirve inmediatamente.',
        didacticInfo: 'La auténtica pizza napolitana debe comerse recién salida del horno cuando el contraste entre el exterior crujiente y el interior suave está en su punto máximo. El centro puede parecer húmedo o poco cocido para algunos, pero esto es tradicional.',
        image: '/lovable-uploads/pizza-serving.jpg',
        tip: 'En la verdadera tradición napolitana, la pizza a menudo se sirve sin cortar - cada comensal usa cuchillo y tenedor para cortar sus propias porciones.'
      }
    ];
  } else if (recipeName.includes('New York')) {
    return [
      {
        title: 'Mezclar Ingredientes',
        description: 'En un recipiente grande, combina harina, sal, azúcar y levadura seca. Añade aceite y agua, luego mezcla hasta formar una masa irregular.',
        didacticInfo: 'La masa estilo NY tiene más ingredientes que la napolitana - el aceite añade suavidad y el azúcar ayuda con el dorado. La hidratación ligeramente mayor hace una masa más extensible.',
        image: '/lovable-uploads/dough-mixing.jpg',
        tip: 'Usa harina de pan con mayor contenido de proteínas (alrededor de 12-14%) para la característica masticación y estructura de NY.'
      },
      {
        title: 'Amasar la Masa',
        description: 'Transfiere a una superficie enharinada y amasa durante 10-12 minutos hasta que quede suave y elástica. Deberías poder estirar un pequeño trozo hasta formar una fina "ventana".',
        didacticInfo: 'El desarrollo adecuado del gluten es crucial para la pizza estilo NY. La masa necesita ser lo suficientemente fuerte para estirarse muy fina mientras soporta los toppings.',
        image: '/lovable-uploads/dough-kneading.jpg',
        tip: 'La masa debe estar pegajosa pero no adherirse. Si se pega demasiado a tus manos, añade un poco más de harina, pero ten cuidado de no añadir demasiada.'
      },
      {
        title: 'Fermentación en Masa',
        description: 'Coloca la masa en un recipiente aceitado, cubre y deja levar a temperatura ambiente durante 1-2 horas hasta que duplique su tamaño.',
        didacticInfo: 'Esta primera fermentación desarrolla sabor y desarrolla aún más la estructura del gluten. El aceite en la masa ayuda a mantenerla suave y flexible incluso después de una larga fermentación fría.',
        image: '/lovable-uploads/dough-fermentation.jpg',
        tip: 'Para mayor desarrollo de sabor, puedes dejar levar la masa en el refrigerador hasta por 24 horas. Esta fermentación fría ralentiza la levadura pero permite que las enzimas continúen descomponiendo los almidones en azúcares.'
      },
      {
        title: 'Dividir y Formar Bolas',
        description: 'Desinfla suavemente la masa y divide en 2-3 porciones iguales. Forma cada porción en una bola firme.',
        didacticInfo: 'Las pizzas estilo NY son típicamente más grandes que las napolitanas, así que hacemos menos bolas de masa, pero más grandes. Crear tensión superficial al bolear lleva a una mejor estructura.',
        image: '/lovable-uploads/dough-balling.jpg',
        tip: 'Para una pizza NY de tamaño estándar (aproximadamente 45 cm), cada bola de masa debería pesar aproximadamente 350-400g.'
      },
      {
        title: 'Fermentación en Frío',
        description: 'Coloca las bolas de masa en recipientes sellados o en una bandeja cubierta con film plástico. Refrigera durante al menos 24 horas, o hasta 72 horas para mejor sabor.',
        didacticInfo: 'La fermentación larga y fría es el secreto del sabor de la masa de pizza NY. Durante este tiempo, la levadura trabaja lentamente mientras las enzimas descomponen los carbohidratos complejos en azúcares más simples, creando profundidad de sabor.',
        image: '/lovable-uploads/dough-cold-fermentation.jpg',
        tip: 'Si refrigeras, permite que la masa se caliente durante 1-2 horas antes de estirarla.'
      },
      {
        title: 'Estirar la Pizza',
        description: 'Deja que la masa alcance temperatura ambiente. En una superficie enharinada, presiona desde el centro hacia afuera dejando un borde más grueso. Estira hasta 35-45 cm de diámetro.',
        didacticInfo: 'La pizza estilo NY es más grande y más delgada que la napolitana, pero aún mantiene una cualidad suave y plegable. Los pizzeros profesionales a menudo lanzan la masa para estirarla, pero estirarla a mano funciona bien para cocineros caseros.',
        image: '/lovable-uploads/pizza-stretching.jpg',
        tip: 'Si la masa se contrae demasiado, déjala descansar durante 5-10 minutos para relajar el gluten, luego intenta nuevamente.'
      },
      {
        title: 'Agregar Cobertura y Hornear',
        description: 'Añade una capa moderada de salsa, generoso queso mozzarella de baja humedad y los toppings deseados. Hornea sobre una piedra o acero precalentado a 290°C durante 6-8 minutos.',
        didacticInfo: 'La pizza estilo NY usa más queso que la napolitana y se cocina más tiempo a temperatura más baja. Esto crea el característico queso dorado y corteza crujiente pero flexible.',
        image: '/lovable-uploads/pizza-toppings.jpg',
        tip: 'Ralla el queso en lugar de rebanarlo para un derretido más uniforme. Y no sobrecargues con toppings - el estilo NY funciona mejor con una cantidad razonable de ingredientes.'
      },
      {
        title: 'Finalizar y Servir',
        description: 'Retira del horno, deja enfriar ligeramente, corta en grandes piezas triangulares y sirve.',
        didacticInfo: 'La clásica porción de Nueva York es grande y triangular, diseñada para doblarse a lo largo para comer al paso. Esta técnica de doblado es prácticamente una institución cultural en la ciudad de Nueva York.',
        image: '/lovable-uploads/ny-finished.jpg',
        tip: 'Para un sabor NY auténtico, espolvorea con parmesano rallado y escamas de chile rojo antes de servir.'
      }
    ];
  }
  
  // Default empty array if no match
  return [];
};
