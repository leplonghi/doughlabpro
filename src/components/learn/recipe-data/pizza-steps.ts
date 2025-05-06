
import { BakingStep } from '../types';

export const getPizzaSteps = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Neapolitan')) {
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
  } else if (recipeName.includes('New York')) {
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
      },
      {
        title: 'Preheat Oven',
        description: 'Place a pizza stone or steel in the oven and preheat to 500°F (260°C) for at least 45 minutes.',
        didacticInfo: 'The stone or steel acts as a heat sink, delivering intense bottom heat that mimics the deck ovens used in classic New York pizzerias, creating the signature crisp yet pliable crust.',
        image: '/lovable-uploads/ny-preheating.jpg',
        tip: 'For home ovens, longer preheating ensures proper heat saturation in your stone or steel.'
      },
      {
        title: 'Shape the Pizza',
        description: 'Stretch the dough to 16-18 inches in diameter, aiming for a thin center with slightly thicker edges.',
        didacticInfo: 'The signature thin, wide crust of New York pizza comes from hand-stretching. The dough should be thin enough to be foldable but strong enough not to tear under the weight of toppings.',
        image: '/lovable-uploads/ny-stretching.jpg',
        tip: 'Use your knuckles and gravity to stretch the dough, allowing the weight to naturally thin it out.'
      },
      {
        title: 'Top and Bake',
        description: 'Top with tomato sauce, low-moisture mozzarella and desired toppings. Bake for 7-10 minutes until the cheese is bubbly and the crust is golden brown.',
        didacticInfo: 'New York pizza traditionally uses a cooked tomato sauce, low-moisture mozzarella (unlike the fresh mozzarella on Neapolitan), and is often finished with dried oregano. The longer bake time creates a crisper crust than Neapolitan style.',
        image: '/lovable-uploads/ny-baking.jpg',
        tip: 'Place pizza in the upper third of the oven for even melting of the cheese.'
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
  return [];
};
