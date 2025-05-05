
import { BakingStep } from '../types';

export const getPizzaSteps = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Neapolitan')) {
    return [
      {
        title: 'Prepare Your Ingredients',
        description: 'Gather all your ingredients: flour, water, salt, and yeast. Make sure they are at room temperature for optimal results.',
        tip: 'Using 00 flour will give you the most authentic Neapolitan texture.'
      },
      {
        title: 'Mix the Dough',
        description: 'In a large bowl, mix flour and salt. Dissolve yeast in warm water, then gradually add to the flour mixture. Mix until a shaggy dough forms.',
        tip: 'Don\'t overmix at this stage - just combine until no dry flour remains.'
      },
      {
        title: 'Knead the Dough',
        description: 'Turn dough onto a lightly floured surface and knead for about 8-10 minutes until smooth and elastic.',
        timer: 10,
        tip: 'The dough should be slightly tacky but not sticky. If too sticky, add small amounts of flour.'
      },
      {
        title: 'First Rise (Bulk Fermentation)',
        description: 'Place the dough in a lightly oiled bowl, cover with plastic wrap or a damp cloth, and let rise at room temperature.',
        timer: 120,
        tip: 'For best flavor development, you can refrigerate the dough for up to 72 hours after the first hour of rising.'
      },
      {
        title: 'Divide and Shape',
        description: 'Gently deflate the dough and divide into equal portions. Shape each portion into a tight ball.',
        tip: 'Each dough ball should weigh about 250g for a 10-12 inch pizza.'
      },
      {
        title: 'Second Rise',
        description: 'Place dough balls on a lightly floured tray, cover, and let rise again.',
        timer: 60,
        tip: 'The dough balls should double in size and be very soft to the touch.'
      },
      {
        title: 'Shape Your Pizza',
        description: 'On a floured surface, gently stretch your dough from the center outward, rotating as you go, until you reach your desired thickness.',
        tip: 'Avoid using a rolling pin for authentic Neapolitan pizza - stretch by hand to preserve the gas bubbles.'
      },
      {
        title: 'Top Your Pizza',
        description: 'Add your sauce and toppings. For classic Neapolitan, use San Marzano tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.',
        tip: 'Less is more with Neapolitan pizza - don\'t overload with too many toppings.'
      },
      {
        title: 'Bake',
        description: 'Bake in the hottest oven you can (ideally 850°F/450°C+ for authentic results). Use a pizza stone or steel if available.',
        timer: 2,
        tip: 'In a home oven, bake at the highest temperature possible (usually 500-550°F) for 5-7 minutes.'
      },
      {
        title: 'Enjoy!',
        description: 'Remove from oven, add any fresh herbs, slice and enjoy immediately while hot!',
        tip: 'Authentic Neapolitan pizza should have a soft, foldable center and charred, puffy edges.'
      }
    ];
  } else if (recipeName.includes('New York')) {
    return [
      {
        title: 'Prepare Ingredients',
        description: 'Gather high-gluten bread flour, water, salt, olive oil, sugar, and yeast.',
        tip: 'The higher protein content in bread flour gives NY-style pizza its characteristic chew.'
      },
      {
        title: 'Mix and Knead',
        description: 'Combine all ingredients and knead until smooth and elastic, about 10-12 minutes.',
        timer: 12,
        tip: 'The dough should pass the windowpane test - you can stretch it thin enough to see light through without tearing.'
      },
      {
        title: 'Bulk Fermentation',
        description: 'Place in an oiled bowl and let rise until doubled, about 1.5-2 hours.',
        timer: 120,
        tip: 'For best flavor, consider cold fermenting in the refrigerator for 24-72 hours.'
      },
      {
        title: 'Divide and Shape',
        description: 'Divide dough into equal portions and shape into tight balls.',
        tip: 'Each ball should weigh about 280-300g for a 14-inch NY-style pizza.'
      },
      {
        title: 'Second Rise',
        description: 'Let dough balls rise covered at room temperature or in refrigerator.',
        timer: 60,
        tip: 'Cold fermented dough will be easier to shape and have better flavor.'
      },
      {
        title: 'Shape the Pizza',
        description: 'Gently stretch or toss the dough to form a 14-inch round.',
        tip: 'NY-style pizza should be thin in the middle with a slightly thicker edge.'
      },
      {
        title: 'Top Your Pizza',
        description: 'Add tomato sauce, low-moisture mozzarella, and desired toppings.',
        tip: 'Classic NY pizza has a thin layer of sauce and an even coating of shredded cheese.'
      },
      {
        title: 'Bake',
        description: 'Bake on a pizza stone at 500-550°F for 7-10 minutes.',
        timer: 8,
        tip: 'The bottom crust should be crispy and the cheese fully melted with some browning.'
      }
    ];
  } else if (recipeName.includes('Thin Crispy')) {
    return [
      {
        title: 'Prepare Dry Mix',
        description: 'Mix flour, salt, and a pinch of sugar in a bowl.',
        tip: 'Using part cake flour can create an extra crispy crust.'
      },
      {
        title: 'Add Wet Ingredients',
        description: 'Mix water, olive oil, and yeast, then combine with dry ingredients.',
        tip: 'Using cool water will slow fermentation and develop more flavor.'
      },
      {
        title: 'Brief Knead',
        description: 'Knead just until combined, about 2-3 minutes.',
        timer: 3,
        tip: 'Do not overknead - minimal gluten development keeps the crust crispy rather than chewy.'
      },
      {
        title: 'Rest Dough',
        description: 'Let dough rest covered for 30 minutes.',
        timer: 30,
        tip: 'This rest allows the flour to fully hydrate.'
      },
      {
        title: 'Divide and Shape',
        description: 'Divide into 4 equal portions for small thin-crust pizzas.',
        tip: 'Each ball should be about 160-180g for a 10-inch thin crust.'
      },
      {
        title: 'Roll Thin',
        description: 'Roll each portion very thin, almost paper-like.',
        tip: 'Unlike other styles, a rolling pin is preferred for thin crust to ensure even thickness.'
      },
      {
        title: 'Minimal Toppings',
        description: 'Apply a thin layer of sauce and minimal toppings.',
        tip: 'Too many toppings will prevent the crust from crisping properly.'
      },
      {
        title: 'Hot Bake',
        description: 'Bake on a preheated pizza stone or steel at highest oven setting.',
        timer: 5,
        tip: 'The quick bake at high temperature is crucial for achieving crispness.'
      }
    ];
  }
  return [];
};
