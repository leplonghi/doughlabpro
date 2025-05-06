
import { BakingStep } from '../types';

export const getPizzaSteps = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Neapolitan')) {
    return [
      {
        title: 'Prepare Ingredients',
        description: 'Measure out all ingredients accurately using a digital scale. For Neapolitan pizza, you\'ll need high-protein flour (preferably Italian 00), water, salt, and a small amount of yeast.',
        didacticInfo: 'Neapolitan pizza dough is traditionally made with just four ingredients: flour, water, salt, and yeast. The simplicity highlights the importance of quality ingredients and proper technique. Tipo 00 flour is finely milled and has a protein content of around 12.5%, perfect for creating the characteristic chewy yet tender crust.',
        image: '/lovable-uploads/pizza-ingredients.jpg',
        tip: 'Use filtered water at room temperature for best results with Neapolitan dough.'
      },
      {
        title: 'Mix Flour and Water',
        description: 'In a large bowl, combine flour and water. Mix until no dry flour remains, then cover and let rest for 20-30 minutes. This rest period is called autolyse.',
        didacticInfo: 'The autolyse process allows the flour to fully hydrate and begins gluten development without kneading. During this rest, enzymes in the flour break down complex carbohydrates, making the dough more extensible and easier to work with later.',
        image: '/lovable-uploads/dough-mixing.jpg',
        tip: 'Mix just until combined - overmixing at this stage can lead to a tough dough.'
      },
      {
        title: 'Add Salt and Yeast',
        description: 'After the rest period, sprinkle the salt and yeast over the dough and mix thoroughly until fully incorporated.',
        didacticInfo: 'Salt strengthens the gluten network and controls fermentation rate. Adding it after the autolyse prevents it from inhibiting initial water absorption. Fresh yeast creates more complex flavors, but instant dry yeast is more consistent and convenient.',
        image: '/lovable-uploads/adding-salt-yeast.jpg',
        tip: 'If using active dry yeast, dissolve it in a small amount of warm water before adding to the dough.'
      },
      {
        title: 'Knead the Dough',
        description: 'Knead the dough on a clean surface for about 5-10 minutes until smooth and elastic. The dough should pass the windowpane test.',
        didacticInfo: 'Kneading develops the gluten structure by organizing the proteins into chains, creating the elasticity and strength needed to trap gas bubbles during fermentation. The windowpane test is when you can stretch a small piece of dough thin enough to see light through it without tearing.',
        image: '/lovable-uploads/kneading-dough.jpg',
        tip: 'Use a dough scraper to help manage sticky dough and keep your work surface clean.'
      },
      {
        title: 'Bulk Fermentation',
        description: 'Place the dough in an oiled container, cover, and let ferment at room temperature for 1-2 hours, or until doubled in size.',
        didacticInfo: 'During bulk fermentation, yeast consumes sugars and produces carbon dioxide and alcohol. This creates flavor compounds and begins building the dough\'s structure. The longer and cooler the fermentation, the more complex the flavor development will be.',
        image: '/lovable-uploads/bulk-ferment.jpg',
        tip: 'For best flavor development, consider refrigerating the dough for a slow fermentation after the initial rise.'
      },
      {
        title: 'Divide and Shape',
        description: 'Gently turn the dough onto a lightly floured surface. Divide into equal portions (about 250g each) and shape into tight balls.',
        didacticInfo: 'Dividing and pre-shaping helps organize the gluten structure and creates surface tension, which helps the dough maintain its shape. The tight ball shape will result in a more uniform rise and circular pizza shape.',
        image: '/lovable-uploads/dividing-dough.jpg',
        tip: 'Use a bench scraper to divide the dough and avoid degassing it too much during handling.'
      },
      {
        title: 'Final Proof',
        description: 'Place dough balls in a proofing box or on a floured tray, cover with plastic wrap or a damp cloth, and let proof for 4-6 hours at room temperature or 24-48 hours in the refrigerator.',
        didacticInfo: 'The final proofing stage allows the yeast to create more gas bubbles and develop deeper flavors. Cold fermentation slows down yeast activity but enhances enzymatic activity, resulting in a more flavorful dough with improved digestibility.',
        image: '/lovable-uploads/dough-proofing.jpg',
        tip: 'If proofing in the refrigerator, bring the dough to room temperature for 1-2 hours before shaping.'
      },
      {
        title: 'Prepare for Baking',
        description: 'Preheat your oven to the maximum temperature (ideally 500°F/260°C or higher) with a pizza stone or steel for at least 45-60 minutes.',
        didacticInfo: 'The high temperature mimics a traditional wood-fired oven, creating rapid rise (oven spring) and proper charring. A preheated stone or steel conducts intense heat directly to the dough, creating a crisp bottom and airy edge.',
        image: '/lovable-uploads/preheating-oven.jpg',
        tip: 'Place your pizza stone or steel in the upper third of the oven for optimal top and bottom heating.'
      },
      {
        title: 'Shape the Pizza',
        description: 'On a floured surface, gently press the dough ball from the center outward, creating a flat disk with a slightly thicker edge. Stretch the dough to about 10-12 inches in diameter.',
        didacticInfo: 'Traditional Neapolitan pizza dough is stretched entirely by hand, never with a rolling pin which would crush the air bubbles. The characteristic cornicione (rim) forms naturally when the edges remain less stretched than the center.',
        image: '/lovable-uploads/shaping-pizza.jpg',
        tip: 'Avoid using a rolling pin, which will remove the gas bubbles that create a light, airy crust.'
      },
      {
        title: 'Top and Bake',
        description: 'Transfer the shaped dough to a floured pizza peel. Add a thin layer of sauce and toppings. Slide onto the preheated stone/steel and bake for 5-7 minutes until the crust is charred in spots.',
        didacticInfo: 'Authentic Neapolitan pizza uses minimal toppings: San Marzano tomatoes, fresh mozzarella, basil, and olive oil. The quick baking time creates the signature leopard-spotted char while keeping the center slightly soft - a hallmark of true Neapolitan style.',
        image: '/lovable-uploads/pizza-baking.jpg',
        tip: 'Work quickly when transferring the topped pizza to avoid it sticking to the peel. A slight shake of the peel will tell you if it\'s sticking.'
      },
      {
        title: 'Rest and Serve',
        description: 'Remove pizza from the oven, drizzle with olive oil, add fresh basil, and let rest for 1-2 minutes before slicing and serving.',
        didacticInfo: 'The brief resting period allows the molten cheese to set slightly and the crust structure to stabilize. Adding fresh herbs after baking preserves their flavor and aroma that would otherwise be lost in the intense heat.',
        image: '/lovable-uploads/finished-pizza.jpg',
        tip: 'For true Neapolitan tradition, pizza is often served uncut - each diner uses a knife and fork to cut their own portions.'
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
        description: 'Divide the dough into 350g portions for large NY slices. Shape into balls and place in containers.',
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
  // Return an empty array if the recipe name doesn't match
  return [];
};
