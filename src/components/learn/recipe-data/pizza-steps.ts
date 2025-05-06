import { BakingStep } from '../types';

// Return steps based on the recipe name and language
export const getPizzaSteps = (recipeName: string, lang: string = 'en'): BakingStep[] => {
  if (recipeName.includes('Neapolitan')) {
    return getNeapolitanSteps(lang);
  } else if (recipeName.includes('New York')) {
    return getNewYorkSteps(lang);
  }
  return [];
};

const getNeapolitanSteps = (lang: string): BakingStep[] => {
  switch(lang) {
    case 'pt':
      return [
        {
          title: 'Preparar Ingredientes',
          description: 'Reúna farinha de proteína alta (Tipo 00), água em temperatura ambiente, sal marinho fino e fermento fresco ou instantâneo.',
          didacticInfo: 'A massa de pizza napolitana é tradicionalmente feita com apenas quatro ingredientes: farinha, água, sal e fermento. A farinha Tipo 00, conhecida por sua textura fina e alto teor de proteínas (~12,5%), é fundamental para alcançar a massa macia e elástica típica desse estilo.',
          image: '/lovable-uploads/pizza-ingredients.jpg',
          tip: 'Use água filtrada em temperatura ambiente (cerca de 20-22°C) para hidratação e atividade do fermento consistentes.'
        },
        {
          title: 'Misturar Farinha e Água',
          description: 'Combine a farinha e a água em uma tigela até que não restem partes secas. Cubra e deixe descansar por 20-30 minutos (fase de autólise).',
          didacticInfo: 'A autólise ajuda na hidratação da farinha e inicia a formação de glúten. Essa etapa melhora a extensibilidade da massa e resulta em uma massa mais fácil de trabalhar durante a amassadura.',
          image: '/lovable-uploads/dough-mixing.jpg',
          tip: 'Evite misturar demais - esta etapa deve ser mínima para permitir que as enzimas trabalhem efetivamente.'
        },
        {
          title: 'Adicionar Sal e Fermento',
          description: 'Polvilhe sal e fermento sobre a massa e misture até incorporar totalmente.',
          didacticInfo: 'O sal controla a atividade do fermento e fortalece o glúten. Adicionar sal e fermento após a autólise aumenta a eficiência da hidratação e a estrutura do glúten.',
          image: '/lovable-uploads/adding-salt-yeast.jpg',
          tip: 'Se estiver usando fermento seco ativo, dissolva-o em uma pequena quantidade de água morna (não quente) antes de misturar.'
        },
        {
          title: 'Amassar a Massa',
          description: 'Amasse em uma superfície limpa por 5-10 minutos até ficar lisa e elástica.',
          didacticInfo: 'A amassadura adequada alinha as fitas de glúten e ajuda a criar uma massa elástica e forte. Use o teste da janela para verificar a prontidão: estique um pequeno pedaço até que fique translúcido sem rasgar.',
          image: '/lovable-uploads/kneading-dough.jpg',
          tip: 'Use um raspador de bancada para ajudar a manusear a massa pegajosa e manter o espaço de trabalho limpo.'
        },
        {
          title: 'Fermentação em Bloco',
          description: 'Transfira a massa para um recipiente untado, cubra e deixe crescer em temperatura ambiente por 1-2 horas até dobrar de tamanho.',
          didacticInfo: 'Durante esta etapa, o fermento metaboliza os açúcares para produzir gás e álcool, melhorando o sabor e a estrutura. Uma fermentação mais fria e longa (por exemplo, durante a noite na geladeira) produz um sabor ainda melhor.',
          image: '/lovable-uploads/bulk-ferment.jpg',
          tip: 'Considere retardar a massa na geladeira durante a noite após o crescimento inicial para melhorar o sabor e a textura.'
        },
        {
          title: 'Dividir e Modelar',
          description: 'Vire a massa sobre uma superfície enfarinhada. Divida em porções iguais e modele em bolas apertadas.',
          didacticInfo: 'Criar bolas de massa apertadas promove uma fermentação uniforme e mantém uma forma uniforme ao esticar mais tarde.',
          image: '/lovable-uploads/dividing-dough.jpg',
          tip: 'Manuseie com cuidado para reter as bolhas de ar. Use um raspador para ajudar a levantar e dividir a massa de forma limpa.'
        },
        {
          title: 'Prova Final',
          description: 'Coloque as bolas de massa em uma assadeira ou em uma caixa de fermentação. Cubra e deixe descansar por 4-6 horas em temperatura ambiente ou até 48 horas na geladeira.',
          didacticInfo: 'A prova permite que a massa relaxe e fermente ainda mais. A prova fria promove sabor e digestibilidade superiores.',
          image: '/lovable-uploads/dough-proofing.jpg',
          tip: 'Se estiver provando a frio, traga a massa para a temperatura ambiente pelo menos 1 hora antes de assar.'
        },
        {
          title: 'Preparar para Assar',
          description: 'Pré-aqueça o forno a 260°C ou mais com uma pedra ou aço por 45-60 minutos.',
          didacticInfo: 'Um ambiente de alto calor simula um forno a lenha, fundamental para obter uma rápida expansão no forno e uma carbonização adequada da crosta.',
          image: '/lovable-uploads/preheating-oven.jpg',
          tip: 'Posicione a superfície de cozimento no terço superior do forno para uma distribuição uniforme do calor.'
        },
        {
          title: 'Modelar a Pizza',
          description: 'Em uma superfície enfarinhada, pressione a massa do centro para fora, formando um disco com uma borda mais grossa. Estique até 25-30 cm.',
          didacticInfo: 'O estiramento manual preserva a estrutura interna e as bolhas de ar, essenciais para a crosta leve e arejada da pizza napolitana.',
          image: '/lovable-uploads/shaping-pizza.jpg',
          tip: 'Nunca use um rolo. Ele remove o gás preso necessário para uma borda inchada (cornicione).'
        },
        {
          title: 'Cobrir e Assar',
          description: 'Adicione molho e coberturas levemente. Asse na pedra/aço pré-aquecido por 5-7 minutos até que apareçam manchas carbonizadas.',
          didacticInfo: 'As coberturas autênticas incluem tomates San Marzano, mussarela fresca, manjericão e azeite de oliva. O cozimento rápido garante um centro macio com uma crosta crocante.',
          image: '/lovable-uploads/pizza-baking.jpg',
          tip: 'Deslize a pizza rapidamente sobre a pedra para evitar que grude. Use uma pitada de sêmola na pá para facilitar a transferência.'
        },
        {
          title: 'Descansar e Servir',
          description: 'Deixe a pizza descansar por 1-2 minutos após assar. Adicione manjericão fresco e regue com azeite de oliva antes de servir.',
          didacticInfo: 'O descanso fixa o queijo e a crosta. As ervas adicionadas após o cozimento retêm o aroma e o sabor melhor.',
          image: '/lovable-uploads/finished-pizza.jpg',
          tip: 'Sirva sem cortar por tradição - permita que os clientes cortem seus próprios pedaços.'
        }
      ];
    
    case 'es':
      return [
        {
          title: 'Preparar Ingredientes',
          description: 'Reúne harina de alto contenido proteico (Tipo 00), agua a temperatura ambiente, sal marina fina y levadura fresca o instantánea.',
          didacticInfo: 'La masa de pizza napolitana tradicionalmente se hace con solo cuatro ingredientes: harina, agua, sal y levadura. La harina Tipo 00, conocida por su textura fina y alto contenido proteico (~12.5%), es fundamental para lograr la masa suave y elástica típica de este estilo.',
          image: '/lovable-uploads/pizza-ingredients.jpg',
          tip: 'Usa agua filtrada a temperatura ambiente (alrededor de 20-22°C) para una hidratación y actividad de levadura consistentes.'
        },
        {
          title: 'Mezclar Harina y Agua',
          description: 'Combina la harina y el agua en un recipiente hasta que no queden partes secas. Cubre y deja reposar durante 20-30 minutos (fase de autólisis).',
          didacticInfo: 'La autólisis ayuda a hidratar la harina e inicia la formación de gluten. Este paso mejora la extensibilidad de la masa y resulta en una masa más manejable durante el amasado.',
          image: '/lovable-uploads/dough-mixing.jpg',
          tip: 'Evita mezclar demasiado; esta etapa debe ser mínima para permitir que las enzimas trabajen eficazmente.'
        },
        {
          title: 'Añadir Sal y Levadura',
          description: 'Espolvorea sal y levadura sobre la masa y mezcla hasta que se incorporen por completo.',
          didacticInfo: 'La sal controla la actividad de la levadura y fortalece el gluten. Añadir sal y levadura después de la autólisis aumenta la eficiencia de la hidratación y la estructura del gluten.',
          image: '/lovable-uploads/adding-salt-yeast.jpg',
          tip: 'Si utilizas levadura seca activa, disuélvela en una pequeña cantidad de agua tibia (no caliente) antes de mezclar.'
        },
        {
          title: 'Amasar la Masa',
          description: 'Amasa sobre una superficie limpia durante 5-10 minutos hasta que quede suave y elástica.',
          didacticInfo: 'El amasado adecuado alinea las hebras de gluten y ayuda a crear una masa elástica y fuerte. Utiliza la prueba de la ventana para comprobar que está lista: estira un trozo pequeño hasta que se vuelva translúcido sin romperse.',
          image: '/lovable-uploads/kneading-dough.jpg',
          tip: 'Utiliza un raspador de banco para ayudarte a manipular la masa pegajosa y mantener limpio el espacio de trabajo.'
        },
        {
          title: 'Fermentación en Bloque',
          description: 'Transfiere la masa a un recipiente engrasado, cubre y deja que suba a temperatura ambiente durante 1-2 horas hasta que duplique su tamaño.',
          didacticInfo: 'Durante esta etapa, la levadura metaboliza los azúcares para producir gas y alcohol, lo que mejora el sabor y la estructura. Una fermentación más fría y prolongada (por ejemplo, durante la noche en el frigorífico) produce un sabor aún mejor.',
          image: '/lovable-uploads/bulk-ferment.jpg',
          tip: 'Considera la posibilidad de retrasar la masa en el frigorífico durante la noche después de la subida inicial para mejorar el sabor y la textura.'
        },
        {
          title: 'Dividir y Dar Forma',
          description: 'Vuelca la masa sobre una superficie enharinada. Divide en porciones iguales y forma bolas apretadas.',
          didacticInfo: 'Crear bolas de masa apretadas favorece una fermentación uniforme y mantiene una forma uniforme al estirar más tarde.',
          image: '/lovable-uploads/dividing-dough.jpg',
          tip: 'Manipula con cuidado para retener las burbujas de aire. Utiliza un raspador para ayudarte a levantar y dividir la masa limpiamente.'
        },
        {
          title: 'Prueba Final',
          description: 'Coloca las bolas de masa en una bandeja o en una caja de fermentación. Cubre y deja reposar durante 4-6 horas a temperatura ambiente o hasta 48 horas en el frigorífico.',
          didacticInfo: 'La prueba permite que la masa se relaje y fermente aún más. La prueba en frío favorece un sabor y una digestibilidad superiores.',
          image: '/lovable-uploads/dough-proofing.jpg',
          tip: 'Si vas a probar en frío, lleva la masa a temperatura ambiente al menos 1 hora antes de hornear.'
        },
        {
          title: 'Preparar para Hornear',
          description: 'Precalienta el horno a 260°C o más con una piedra o acero durante 45-60 minutos.',
          didacticInfo: 'Un ambiente de alto calor simula un horno de leña, fundamental para conseguir una rápida expansión en el horno y una carbonización adecuada de la corteza.',
          image: '/lovable-uploads/preheating-oven.jpg',
          tip: 'Coloca la superficie de horneado en el tercio superior del horno para una distribución uniforme del calor.'
        },
        {
          title: 'Dar Forma a la Pizza',
          description: 'Sobre una superficie enharinada, presiona la masa desde el centro hacia fuera, formando un disco con un borde más grueso. Estira hasta 25-30 cm.',
          didacticInfo: 'El estiramiento a mano preserva la estructura interna y las burbujas de aire, esenciales para la corteza ligera y aireada de la pizza napolitana.',
          image: '/lovable-uploads/shaping-pizza.jpg',
          tip: 'Nunca utilices un rodillo. Elimina el gas atrapado necesario para un borde hinchado (cornicione).'
        },
        {
          title: 'Cubrir y Hornear',
          description: 'Añade salsa y coberturas ligeramente. Hornea sobre la piedra/acero precalentado durante 5-7 minutos hasta que aparezcan manchas carbonizadas.',
          didacticInfo: 'Las coberturas auténticas incluyen tomates San Marzano, mozzarella fresca, albahaca y aceite de oliva. El horneado rápido garantiza un centro suave con una corteza crujiente.',
          image: '/lovable-uploads/pizza-baking.jpg',
          tip: 'Desliza la pizza rápidamente sobre la piedra para evitar que se pegue. Utiliza una pizca de sémola en la pala para facilitar la transferencia.'
        },
        {
          title: 'Reposar y Servir',
          description: 'Deja reposar la pizza durante 1-2 minutos después de hornearla. Añade albahaca fresca y rocía con aceite de oliva antes de servir.',
          didacticInfo: 'El reposo fija el queso y la corteza. Las hierbas añadidas después del horneado conservan mejor el aroma y el sabor.',
          image: '/lovable-uploads/finished-pizza.jpg',
          tip: 'Sirve sin cortar por tradición: permite que los comensales corten sus propios trozos.'
        }
      ];
    
    default: // English as fallback
      return [
        {
          title: 'Prepare Ingredients',
          description: 'Gather high-protein flour (Tipo 00), room temperature water, fine sea salt, and fresh or instant yeast.',
          didacticInfo: 'Neapolitan pizza dough is traditionally made with just four ingredients: flour, water, salt, and yeast. Tipo 00 flour, known for its fine texture and high protein content (~12.5%), is critical for achieving the soft and elastic dough typical of this style.',
          image: '/lovable-uploads/pizza-ingredients.jpg',
          tip: 'Use filtered water at room temperature (around 20-22°C) for consistent hydration and yeast activity.'
        },
        {
          title: 'Mix Flour and Water',
          description: 'Combine the flour and water in a mixing bowl until no dry bits remain. Cover and let rest for 20-30 minutes (autolyse phase).',
          didacticInfo: 'Autolyse helps flour hydrate and initiates gluten formation. This step improves dough extensibility and results in a more manageable dough later during kneading.',
          image: '/lovable-uploads/dough-mixing.jpg',
          tip: 'Avoid overmixing—this stage should be minimal to allow enzymes to work effectively.'
        },
        {
          title: 'Add Salt and Yeast',
          description: 'Sprinkle salt and yeast over the dough and mix until fully incorporated.',
          didacticInfo: 'Salt controls yeast activity and strengthens gluten. Adding salt and yeast after autolyse enhances hydration efficiency and gluten structure.',
          image: '/lovable-uploads/adding-salt-yeast.jpg',
          tip: 'If using active dry yeast, dissolve it in a small amount of warm water (not hot) before mixing.'
        },
        {
          title: 'Knead the Dough',
          description: 'Knead on a clean surface for 5-10 minutes until smooth and elastic.',
          didacticInfo: 'Proper kneading aligns gluten strands and helps create a stretchy and strong dough. Use the windowpane test to check readiness: stretch a small piece until it becomes translucent without tearing.',
          image: '/lovable-uploads/kneading-dough.jpg',
          tip: 'Use a bench scraper to help handle sticky dough and keep the workspace clean.'
        },
        {
          title: 'Bulk Fermentation',
          description: 'Transfer dough to an oiled container, cover, and let rise at room temperature for 1-2 hours until doubled.',
          didacticInfo: 'During this stage, yeast metabolizes sugars to produce gas and alcohol, enhancing flavor and structure. Cooler and longer fermentation (e.g., overnight in the fridge) yields even better flavor.',
          image: '/lovable-uploads/bulk-ferment.jpg',
          tip: 'Consider retarding the dough in the fridge overnight after initial rise for improved flavor and texture.'
        },
        {
          title: 'Divide and Shape',
          description: 'Turn dough onto a floured surface. Divide into equal portions and shape into tight balls.',
          didacticInfo: 'Creating tight dough balls promotes even fermentation and maintains a uniform shape when stretching later.',
          image: '/lovable-uploads/dividing-dough.jpg',
          tip: 'Handle gently to retain air bubbles. Use a scraper to help lift and divide dough cleanly.'
        },
        {
          title: 'Final Proof',
          description: 'Place dough balls on a tray or in a proofing box. Cover and let rest for 4-6 hours at room temp or up to 48 hours in the fridge.',
          didacticInfo: 'Proofing allows dough to relax and ferment further. Cold proofing promotes superior flavor and digestibility.',
          image: '/lovable-uploads/dough-proofing.jpg',
          tip: 'If cold-proofing, bring dough to room temp at least 1 hour before baking.'
        },
        {
          title: 'Prepare for Baking',
          description: 'Preheat your oven to 500°F (260°C) or higher with a stone or steel for 45-60 minutes.',
          didacticInfo: 'A high heat environment simulates a wood-fired oven, critical for achieving fast oven spring and proper crust charring.',
          image: '/lovable-uploads/preheating-oven.jpg',
          tip: 'Position your baking surface in the top third of the oven for even heat distribution.'
        },
        {
          title: 'Shape the Pizza',
          description: 'On a floured surface, press dough from center outward, forming a disk with a thicker rim. Stretch to 10-12 inches.',
          didacticInfo: 'Hand-stretching preserves the internal structure and air bubbles, essential for the light and airy crust of Neapolitan pizza.',
          image: '/lovable-uploads/shaping-pizza.jpg',
          tip: 'Never use a rolling pin. It removes trapped gas needed for a puffy rim (cornicione).' 
        },
        {
          title: 'Top and Bake',
          description: 'Add sauce and toppings lightly. Bake on the preheated stone/steel for 5-7 minutes until charred spots appear.',
          didacticInfo: 'Authentic toppings include San Marzano tomatoes, fresh mozzarella, basil, and olive oil. Quick baking ensures a soft center with a crisp crust.',
          image: '/lovable-uploads/pizza-baking.jpg',
          tip: 'Slide pizza quickly onto the stone to prevent sticking. Use a dusting of semolina on the peel for easy transfer.'
        },
        {
          title: 'Rest and Serve',
          description: 'Let pizza rest 1-2 minutes after baking. Add fresh basil and drizzle with olive oil before serving.',
          didacticInfo: 'Resting sets the cheese and crust. Herbs added post-bake retain aroma and taste better.',
          image: '/lovable-uploads/finished-pizza.jpg',
          tip: 'Serve uncut for tradition—allow diners to slice their own.'
        }
      ];
  }
};

const getNewYorkSteps = (lang: string): BakingStep[] => {
  switch(lang) {
    case 'pt':
      return [
        {
          title: 'Misturar Ingredientes',
          description: 'Combine farinha de pão, água, açúcar, óleo, sal e fermento em uma tigela. Misture até formar uma massa irregular.',
          didacticInfo: 'A massa de pizza estilo Nova York inclui açúcar e óleo, diferente da Napolitana. O açúcar fornece alimento para o fermento e ajuda no douramento, enquanto o óleo adiciona maciez e sabor à crosta.',
          image: '/lovable-uploads/ny-mixing.jpg',
          tip: 'Use farinha de pão com maior teor de proteína (cerca de 12-13%) para a característica textura mastigável do estilo Nova York.'
        },
        {
          title: 'Desenvolver o Glúten',
          description: 'Amasse a massa por cerca de 10-12 minutos até ficar lisa e elástica. A massa deve passar no teste da janela.',
          didacticInfo: 'O tempo mais longo de amassamento desenvolve redes de glúten mais fortes necessárias para suportar a crosta maior e mais fina do estilo Nova York e permitir a dobra característica sem quebrar.',
          image: '/lovable-uploads/ny-kneading.jpg',
          tip: 'Você pode usar a técnica de bater e dobrar para massas úmidas ou uma batedeira com gancho para massa.'
        },
        {
          title: 'Fermentação em Bloco',
          description: 'Coloque a massa em uma tigela untada, cubra e deixe crescer até dobrar de tamanho, cerca de 1-2 horas em temperatura ambiente.',
          didacticInfo: 'A massa de Nova York normalmente passa por menos fermentação do que os estilos de massa fermentada ou napolitana, contribuindo para sua textura distinta e base neutra que permite que as coberturas brilhem.',
          image: '/lovable-uploads/ny-rising.jpg',
          tip: 'Para obter o melhor sabor, considere refrigerar após o crescimento inicial por 24-72 horas.'
        },
        {
          title: 'Dividir e Modelar',
          description: 'Divida a massa em porções para grandes fatias de NY. Modele em bolas e coloque em recipientes.',
          didacticInfo: 'As porções maiores de massa são características da pizza de Nova York, que normalmente tem um diâmetro de 40-45 cm, permitindo a fatia larga clássica que dobra sem quebrar.',
          image: '/lovable-uploads/ny-dividing.jpg',
          tip: 'Unte os recipientes para evitar que grudem durante a prova final.'
        },
        {
          title: 'Prova Final',
          description: 'Deixe as bolas de massa crescerem por 1-2 horas em temperatura ambiente ou durante a noite na geladeira.',
          didacticInfo: 'A fermentação a frio ajuda a desenvolver a complexidade de sabor pela qual a pizza de Nova York é conhecida e torna a massa mais fácil de manusear e esticar sem rasgar.',
          image: '/lovable-uploads/ny-proofing.jpg',
          tip: 'Se refrigerada, deixe a massa aquecer por 1-2 horas antes de esticar.'
        },
        {
          title: 'Pré-aqueça o Forno',
          description: 'Coloque uma pedra ou aço para pizza no forno e pré-aqueça a 260°C por pelo menos 45 minutos.',
          didacticInfo: 'A pedra ou o aço atuam como um dissipador de calor, fornecendo calor inferior intenso que imita os fornos de lastro usados nas pizzarias clássicas de Nova York, criando a crosta crocante e flexível característica.',
          image: '/lovable-uploads/ny-preheating.jpg',
          tip: 'Para fornos domésticos, um pré-aquecimento mais longo garante a saturação de calor adequada em sua pedra ou aço.'
        },
        {
          title: 'Modelar a Pizza',
          description: 'Estique a massa até 40-45 cm de diâmetro, visando um centro fino com bordas ligeiramente mais grossas.',
          didacticInfo: 'A fina e larga crosta característica da pizza de Nova York vem do estiramento manual. A massa deve ser fina o suficiente para ser dobrável, mas forte o suficiente para não rasgar sob o peso das coberturas.',
          image: '/lovable-uploads/ny-stretching.jpg',
          tip: 'Use seus nós dos dedos e a gravidade para esticar a massa, permitindo que o peso a afine naturalmente.'
        },
        {
          title: 'Cobrir e Assar',
          description: 'Cubra com molho de tomate, mussarela com baixo teor de umidade e as coberturas desejadas. Asse por 7-10 minutos até que o queijo borbulhe e a crosta esteja dourada.',
          didacticInfo: 'A pizza de Nova York tradicionalmente usa um molho de tomate cozido, mussarela com baixo teor de umidade (ao contrário da mussarela fresca na napolitana) e é frequentemente finalizada com orégano seco. O tempo de cozimento mais longo cria uma crosta mais crocante do que o estilo napolitano.',
          image: '/lovable-uploads/ny-baking.jpg',
          tip: 'Coloque a pizza no terço superior do forno para derreter o queijo uniformemente.'
        },
        {
          title: 'Finalizar e Servir',
          description: 'Retire do forno, deixe esfriar um pouco, corte em grandes pedaços triangulares e sirva.',
          didacticInfo: 'A fatia clássica de Nova York é grande e triangular, projetada para ser dobrada longitudinalmente para comer em movimento. Esta técnica de dobra é praticamente uma instituição cultural na cidade de Nova York.',
          image: '/lovable-uploads/ny-finished.jpg',
          tip: 'Para um autêntico sabor de NY, polvilhe com parmesão ralado e flocos de pimenta vermelha antes de servir.'
        }
      ];
    
    case 'es':
      return [
        {
          title: 'Mezclar Ingredientes',
          description: 'Combina harina de pan, agua, azúcar, aceite, sal y levadura en un recipiente. Mezcla hasta formar una masa desigual.',
          didacticInfo: 'La masa de pizza estilo Nueva York incluye azúcar y aceite, a diferencia de la Napolitana. El azúcar proporciona alimento para la levadura y ayuda con el dorado, mientras que el aceite añade suavidad y sabor a la corteza.',
          image: '/lovable-uploads/ny-mixing.jpg',
          tip: 'Usa harina de pan con mayor contenido proteico (alrededor del 12-13%) para la característica textura masticable del estilo Nueva York.'
        },
        {
          title: 'Desarrollar el Gluten',
          description: 'Amasa la masa durante unos 10-12 minutos hasta que quede suave y elástica. La masa debe pasar la prueba de la ventana.',
          didacticInfo: 'El tiempo de amasado más largo desarrolla redes de gluten más fuertes necesarias para soportar la corteza más grande y delgada del estilo Nueva York y permitir el doblez característico sin romperse.',
          image: '/lovable-uploads/ny-kneading.jpg',
          tip: 'Puedes usar la técnica de golpear y doblar para masas húmedas o una batidora con gancho para masa.'
        },
        {
          title: 'Fermentación en Bloque',
          description: 'Coloca la masa en un recipiente engrasado, cubre y deja que suba hasta que duplique su tamaño, aproximadamente 1-2 horas a temperatura ambiente.',
          didacticInfo: 'La masa de Nueva York normalmente se somete a menos fermentación que los estilos de masa madre o napolitana, lo que contribuye a su textura distintiva y base neutra que permite que brillen los ingredientes.',
          image: '/lovable-uploads/ny-rising.jpg',
          tip: 'Para obtener el mejor sabor, considera refrigerar después de la subida inicial durante 24-72 horas.'
        },
        {
          title: 'Dividir y Dar Forma',
          description: 'Divide la masa en porciones para grandes rebanadas de NY. Forma bolas y colócalas en recipientes.',
          didacticInfo: 'Las porciones de masa más grandes son características de la pizza de Nueva York, que normalmente tiene un diámetro de 40-45 cm, lo que permite la rebanada ancha clásica que se dobla sin romperse.',
          image: '/lovable-uploads/ny-dividing.jpg',
          tip: 'Engrasa los recipientes para evitar que se peguen durante la prueba final.'
        },
        {
          title: 'Prueba Final',
          description: 'Deja que las bolas de masa reposen durante 1-2 horas a temperatura ambiente o durante la noche en el refrigerador.',
          didacticInfo: 'La fermentación en frío ayuda a desarrollar la complejidad del sabor por la que es conocida la pizza de Nueva York y hace que la masa sea más fácil de manipular y estirar sin que se rompa.',
          image: '/lovable-uploads/ny-proofing.jpg',
          tip: 'Si está refrigerada, permite que la masa se caliente durante 1-2 horas antes de estirarla.'
        },
        {
          title: 'Precalentar el Horno',
          description: 'Coloca una piedra para pizza o acero en el horno y precalienta a 260°C durante al menos 45 minutos.',
          didacticInfo: 'La piedra o el acero actúan como un disipador de calor, proporcionando un calor inferior intenso que imita los hornos de cubierta utilizados en las pizzerías clásicas de Nueva York, creando la corteza crujiente pero flexible característica.',
          image: '/lovable-uploads/ny-preheating.jpg',
          tip: 'Para los hornos domésticos, un precalentamiento más prolongado garantiza una saturación de calor adecuada en tu piedra o acero.'
        },
        {
          title: 'Dar Forma a la Pizza',
          description: 'Estira la masa hasta 40-45 cm de diámetro, buscando un centro delgado con bordes ligeramente más gruesos.',
          didacticInfo: 'La delgada y ancha corteza característica de la pizza de Nueva York proviene del estiramiento a mano. La masa debe ser lo suficientemente delgada para doblarse pero lo suficientemente fuerte como para no romperse bajo el peso de los ingredientes.',
          image: '/lovable-uploads/ny-stretching.jpg',
          tip: 'Usa tus nudillos y la gravedad para estirar la masa, permitiendo que el peso la adelgace naturalmente.'
        },
        {
          title: 'Cubrir y Hornear',
          description: 'Cubre con salsa de tomate, mozzarella baja en humedad y los ingredientes deseados. Hornea durante 7-10 minutos hasta que el queso burbujee y la corteza esté dorada.',
          didacticInfo: 'La pizza de Nueva York tradicionalmente usa una salsa de tomate cocida, mozzarella baja en humedad (a diferencia de la mozzarella fresca en la napolitana) y a menudo se termina con orégano seco. El tiempo de horneado más largo crea una corteza más crujiente que el estilo napolitano.',
          image: '/lovable-uploads/ny-baking.jpg',
          tip: 'Coloca la pizza en el tercio superior del horno para que el queso se derrita uniformemente.'
        },
        {
          title: 'Finalizar y Servir',
          description: 'Retira del horno, deja enfriar un poco, corta en grandes trozos triangulares y sirve.',
          didacticInfo: 'La rebanada clásica de Nueva York es grande y triangular, diseñada para doblarse longitudinalmente para comer sobre la marcha. Esta técnica de doblado es prácticamente una institución cultural en la ciudad de Nueva York.',
          image: '/lovable-uploads/ny-finished.jpg',
          tip: 'Para un auténtico sabor de NY, espolvorea con parmesano rallado y hojuelas de pimiento rojo antes de servir.'
        }
      ];
    
    default: // English as fallback
      return [
        {
          title: 'Mix Ingredients',
          description: 'Combine bread flour, water, sugar, oil, salt, and yeast in a mixing bowl. Mix until a shaggy dough forms.',
          didacticInfo: 'New York-style pizza dough includes sugar and oil, unlike Neapolitan. The sugar provides food for the yeast and helps with browning, while oil adds tenderness and flavor to the crust.',
          image: '/lovable-uploads/ny-mixing.jpg',
          tip: 'Use bread flour with higher protein content (around 12-13%) for the characteristic chewy New York texture.'
        },
        {
          title: 'Develop Gluten',
          description: 'Knead the dough for about 10-12 minutes until smooth and elastic. The dough should pass the windowpane test.',
          didacticInfo: 'The longer kneading time develops stronger gluten networks needed to support the larger, thinner New York style crust and allow for the signature fold without breaking.',
          image: '/lovable-uploads/ny-kneading.jpg',
          tip: 'You can use the slap and fold technique for wet dough or a stand mixer with dough hook.'
        },
        {
          title: 'Bulk Fermentation',
          description: 'Place dough in an oiled bowl, cover, and let rise until doubled, about 1-2 hours at room temperature.',
          didacticInfo: 'New York dough typically undergoes less fermentation than sourdough or Neapolitan styles, contributing to its distinctive texture and neutral base that lets the toppings shine.',
          image: '/lovable-uploads/ny-rising.jpg',
          tip: 'For the best flavor, consider refrigerating after initial rise for 24-72 hours.'
        },
        {
          title: 'Divide and Shape',
          description: 'Divide the dough into portions for large NY slices. Shape into balls and place in containers.',
          didacticInfo: 'The larger dough portions are characteristic of New York pizza, which typically has a 16-18 inch diameter, allowing for the classic wide slice that folds without breaking.',
          image: '/lovable-uploads/ny-dividing.jpg',
          tip: 'Oil the containers to prevent sticking during the final proof.'
        },
        {
          title: 'Final Proof',
          description: 'Let the dough balls proof for 1-2 hours at room temperature or overnight in the refrigerator.',
          didacticInfo: 'The cold fermentation helps develop the flavor complexity that New York pizza is known for, and makes the dough easier to handle and stretch without tearing.',
          image: '/lovable-uploads/ny-proofing.jpg',
          tip: 'If refrigerated, allow dough to warm up for 1-2 hours before stretching.'
