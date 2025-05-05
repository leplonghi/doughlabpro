import { BakingStep } from '../types';

export const getPizzaSteps = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Neapolitan')) {
    return [
      {
        title: 'Prepare Your Ingredients',
        description: 'Begin by gathering all your ingredients: 00 flour (essential for authentic Neapolitan pizza), filtered water at room temperature, fine sea salt, and a small amount of fresh or dry yeast. Measuring by weight rather than volume ensures consistent results.',
        tip: 'Using authentic 00 flour (tipo 00) is crucial for Neapolitan pizza as it creates the characteristic light, airy crust with the perfect chew.',
        image: '/lovable-uploads/10240500-8679-4a2d-9667-7895246fe108.png'
      },
      {
        title: 'Mix the Dough',
        description: 'In a large bowl, whisk together the flour and salt. In a separate container, dissolve yeast in warm water (about 95°F/35°C). Make a well in the center of the flour, and gradually pour in the water-yeast mixture. Mix with your fingers in a circular motion, slowly incorporating flour from the edges until a shaggy dough forms.',
        tip: 'Traditional Neapolitan dough contains just four ingredients: flour, water, salt, and yeast. No oil, sugar or additives are used in authentic Neapolitan dough.',
        image: '/lovable-uploads/15936b17-7234-47a3-a949-d72c0d2932e6.png'
      },
      {
        title: 'Develop the Gluten',
        description: 'Turn the dough onto a clean work surface (minimally floured) and knead for 10-15 minutes until smooth and elastic. The proper kneading technique involves pushing the dough away with the heel of your hand, folding it back, rotating a quarter turn, and repeating. The dough is ready when it passes the "windowpane test" - you can stretch a small piece thin enough to see light through without tearing.',
        timer: 15,
        tip: 'Kneading develops the gluten network, which gives the dough its structure and ability to hold gas bubbles. Be patient with this step - proper gluten development is essential.',
        image: '/lovable-uploads/1a7e9690-7fcf-43cb-a119-2b7d22416a67.png'
      },
      {
        title: 'Bulk Fermentation',
        description: 'Shape the dough into a smooth ball and place it in a lightly oiled bowl. Cover with plastic wrap or a damp cloth to prevent a skin from forming. Allow the dough to rise at room temperature (around 75°F/24°C) for at least 6 hours. This bulk fermentation is crucial for flavor development and improved structure.',
        timer: 360,
        tip: 'During this bulk fermentation, enzymes break down complex starches into simpler sugars for the yeast to feed on, while bacteria produce flavorful acids that give sourdough-like complexity.',
        image: '/lovable-uploads/af799f78-d4b3-47c9-a194-0885a14c4753.png'
      },
      {
        title: 'Divide and Shape',
        description: 'After the bulk rise, gently turn the dough onto a lightly floured surface. Use a dough scraper or knife to divide it into 250g portions. To shape, fold the edges of each piece into the center to create tension, then flip and use your hands to rotate and tuck the dough underneath itself, creating a tight ball with a smooth surface.',
        tip: 'The goal is to create surface tension without tearing the dough or incorporating too much air. A tight, smooth ball will hold its shape better during proofing.'
      },
      {
        title: 'Final Proofing',
        description: 'Place the dough balls on a lightly floured tray with enough space between them (they will expand). Cover with plastic wrap or a damp cloth and let rise at room temperature for 4-6 hours, or refrigerate for 24-72 hours for enhanced flavor development through cold fermentation.',
        timer: 240,
        tip: 'Cold fermentation (using the refrigerator) slows yeast activity but allows bacterial fermentation to continue, developing complex flavors without over-proofing the dough.'
      },
      {
        title: 'Hand Stretching Technique',
        description: 'Two hours before baking, remove dough from refrigerator if cold-fermenting. To stretch, gently press outward from the center of the ball, leaving a 1cm border for the crust. Lift the dough onto your knuckles and rotate, allowing gravity to stretch it naturally. Aim for a 10-12 inch circle with a slightly thicker edge and ultra-thin center (about 3mm).',
        tip: 'Never use a rolling pin for Neapolitan pizza - this compresses the gas bubbles that create the airy crust. The hand-stretching technique preserves these bubbles for the characteristic cornicione (puffy rim).'
      },
      {
        title: 'Top Minimally',
        description: 'For authentic Neapolitan pizza, less is more. Start with a thin layer of San Marzano tomato sauce (simply crushed tomatoes with a pinch of salt). Add small pieces of fresh mozzarella (fior di latte) spaced apart, as they will spread during baking. Finish with a few fresh basil leaves and a drizzle of extra virgin olive oil.',
        tip: 'Authentic Neapolitan pizza uses minimal toppings. The excessive moisture from too many toppings can make the thin center soggy and prevent proper baking.'
      },
      {
        title: 'High-Heat Baking',
        description: 'Neapolitan pizza traditionally bakes in a wood-fired oven at 850-900°F (450-485°C) for just 60-90 seconds. For home ovens, use the highest possible setting (usually 500-550°F/260-290°C) with a preheated pizza stone or steel. Turn on the top grill/broiler element to mimic the heat from above. Bake for about 7 minutes until the crust develops charred spots and the cheese is melted.',
        timer: 7,
        tip: 'For home ovens, it\'s essential to use the grill/broiler on top to properly cook the pizza from above. Place your pizza stone or steel in the top third of your oven for the best heat reflection. Preheat for at least 45-60 minutes before baking.',
      },
      {
        title: 'Rest and Serve',
        description: 'Allow the pizza to rest for 1-2 minutes after baking. This brief rest allows the structure to set slightly and makes slicing easier. Add fresh basil leaves after baking (they burn easily), a light drizzle of extra virgin olive oil, and if desired, a sprinkle of grated hard cheese like Parmigiano-Reggiano.',
        tip: 'Authentic Neapolitan pizza should have a soft, foldable center with a spotty char on the puffy rim. It\'s traditionally eaten with a knife and fork or folded in quarters ("a libretto") and eaten like a book.'
      }
    ];
  } else if (recipeName.includes('New York')) {
    return [
      {
        title: 'Prepare High-Gluten Ingredients',
        description: 'Collect all ingredients for New York style pizza: high-gluten bread flour (ideally 12-14% protein content), water, salt, olive oil, sugar, and yeast. New York dough includes oil and sugar, which distinguishes it from Neapolitan style and helps achieve the characteristic chew and browning.',
        tip: 'High-gluten bread flour is essential for developing the strong gluten network that gives NY-style pizza its distinctive chew and foldability.'
      },
      {
        title: 'Mix and Develop the Dough',
        description: 'In a large bowl, combine flour and salt. In another bowl, mix water, oil, sugar, and dissolved yeast. Pour wet ingredients into dry and mix until no dry flour remains. Turn onto a surface and knead vigorously for 10-12 minutes until smooth and elastic. The dough should be slightly tacky but not sticky.',
        timer: 12,
        tip: 'The dough should pass the windowpane test - when stretched, it forms a thin membrane you can see light through without tearing. This indicates proper gluten development.'
      },
      {
        title: 'Bulk Fermentation',
        description: 'Form the dough into a ball and place in an oiled bowl. Cover and let rise at room temperature (around 75°F/24°C) until doubled in size, about 6 hours minimum. The oil in NY dough helps create a more tender crumb while still allowing good structure.',
        timer: 360,
        tip: 'For best flavor, after the initial rise, punch down the dough, reshape into a ball, and cold-ferment in the refrigerator for 24-72 hours. This slow fermentation develops the complex flavor that defines great NY pizza.'
      },
      {
        title: 'Divide into 350g Balls',
        description: 'After fermentation, divide the dough into 350g portions for 14-inch NY-style pizzas. Shape each portion into a tight ball by folding the edges underneath and creating surface tension. The larger dough ball size (compared to Neapolitan) accounts for the larger diameter of NY pizza.',
        tip: 'New York pizza is traditionally larger than Neapolitan, usually 14-18 inches in diameter, and requires more dough per pizza.'
      },
      {
        title: 'Final Proofing',
        description: 'Place dough balls on a lightly floured tray with enough space between them. Cover and let rise at room temperature for 1-2 hours until puffy, or refrigerate overnight for enhanced flavor.',
        timer: 90,
        tip: 'If using cold-fermented dough, remove from refrigerator 1-2 hours before shaping to allow it to warm up, which makes it more extensible and easier to stretch.'
      },
      {
        title: 'Hand Stretch or Toss',
        description: 'To shape NY pizza, flatten the dough ball into a disk with your fingertips, leaving a 1/2-inch border. Lift onto your knuckles and rotate, allowing gravity to stretch it. For the signature NY texture, stretch to about 14 inches in diameter with a thin center and slightly thicker edge.',
        tip: 'Many New York pizzerias use a combination of hand stretching and gentle tossing. If you\'re a beginner, focus on hand stretching first before attempting the iconic toss.'
      },
      {
        title: 'Apply Balanced Toppings',
        description: 'For authentic NY style, spread a thin layer of cooked tomato sauce (seasoned with oregano, garlic and other herbs) over the dough. Cover with an even layer of shredded low-moisture mozzarella, leaving a small border for the crust. Add additional toppings moderately - NY pizza supports more toppings than Neapolitan but shouldn\'t be overloaded.',
        tip: 'Classic NY pizza uses low-moisture mozzarella rather than fresh mozzarella. This cheese has less water content, which helps prevent a soggy crust and gives the characteristic stretchy cheese pull.'
      },
      {
        title: 'Lower-Heat Baking',
        description: 'Bake on a preheated pizza stone or steel at 500-550°F (260-290°C) for 7-10 minutes. NY pizza bakes longer and at lower temperatures than Neapolitan pizza, allowing the larger pie to cook evenly without burning. The finished crust should be golden brown and crisp on the bottom.',
        timer: 8,
        tip: 'The sugar in NY dough helps achieve better browning at lower temperatures. The bake time is longer than Neapolitan to ensure the larger, thicker pizza cooks completely through.'
      },
      {
        title: 'Slice and Fold',
        description: 'Let the pizza rest for about a minute after baking, then slice into 8 large triangular slices. The hallmark of a good NY slice is that it can be folded lengthwise while maintaining its structure - firm enough to hold its shape but pliable enough to fold without cracking.',
        tip: 'The classic NY pizza-eating technique is the "fold hold" - folding the slice lengthwise to create a structural support that prevents the tip from drooping and the toppings from sliding off.'
      }
    ];
  } else if (recipeName.includes('Thin Crispy')) {
    return [
      {
        title: 'Gather Low-Hydration Ingredients',
        description: 'Collect all ingredients: bread flour (or a mix of bread and cake flour for extra crispness), cool water (lower hydration at 55%), salt, olive oil, and a small amount of yeast. The lower water content is key to achieving a cracker-like texture.',
        tip: 'Using part cake flour (about 25% of total flour) can create an even crispier crust due to its lower protein content, which develops less gluten.'
      },
      {
        title: 'Mix Minimally',
        description: 'Combine dry ingredients in a bowl. Add water, olive oil, and dissolved yeast, then mix just until incorporated into a shaggy dough. Unlike other pizza styles, you want minimal gluten development for thin crispy crust.',
        tip: 'Do not overmix or knead extensively - the less gluten development, the more tender and crisp the final crust will be.'
      },
      {
        title: 'Brief Rest Period',
        description: 'Form the dough into a ball and let it rest covered for just 30 minutes. This short rest allows the flour to fully hydrate without developing too much gluten structure or gas.',
        timer: 30,
        tip: 'This rest is more about hydration than fermentation - we want minimal rise for thin crispy crust.'
      },
      {
        title: 'Divide into 200g Portions',
        description: 'Divide the dough into smaller 200g portions. This smaller size is perfect for thin 12-inch pizzas with a cracker-like texture. Each portion will make one thin-crust pizza.',
        tip: 'The reduced dough weight (compared to other styles) is essential for achieving the characteristic thin, crispy texture.'
      },
      {
        title: 'Roll with Kitchen Roll',
        description: 'Unlike hand-stretched pizza styles, thin crispy crust should be rolled out using a kitchen rolling pin. Place the dough on a floured surface and roll it into a very thin round, about 1-2mm thick. Roll from the center outward in all directions to maintain an even thickness.',
        tip: 'A rolling pin is actually preferable for thin crisp pizza as it prevents air pockets and creates the uniform thinness needed for proper crisping.'
      },
      {
        title: 'Dock the Dough',
        description: 'Use a fork to prick the dough all over (called "docking"). This prevents large bubbles from forming during baking and helps maintain the flat, crisp texture. For extra crispness, you can pre-bake the crust for 2-3 minutes before adding toppings.',
        tip: 'Docking is essential for thin crispy crust - the small holes allow steam to escape rather than getting trapped and creating bubbles.'
      },
      {
        title: 'Apply Light Toppings',
        description: 'Apply a very thin layer of sauce and minimal toppings. Heavy toppings will make the thin crust soggy. For authentic thin crispy pizza, use a sparse amount of dry, low-moisture mozzarella and limit wet ingredients.',
        tip: 'Consider brushing the dough with olive oil before adding sauce - this creates a barrier that helps prevent the sauce from making the crust soggy.'
      },
      {
        title: 'Hot, Quick Bake',
        description: 'Bake on a preheated pizza stone or steel at the highest oven setting (500-550°F/260-290°C) for 5-7 minutes. The high heat is necessary to quickly crisp the thin dough before it becomes dry and brittle.',
        timer: 5,
        tip: 'Watch carefully - the thin crust can go from perfectly crisp to burnt in a matter of seconds due to its minimal thickness.'
      },
      {
        title: 'Cut and Serve Immediately',
        description: 'Remove from the oven when the edges are golden brown and the cheese is melted and lightly spotted. Cut into squares (tavern-style) or triangles and serve immediately while crisp.',
        tip: 'Thin crispy pizza is best enjoyed fresh from the oven when at its most crisp. It doesn\'t hold up as well over time as thicker styles.'
      }
    ];
  }
  return [];
};
