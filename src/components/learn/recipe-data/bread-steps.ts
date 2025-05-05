
import { BakingStep } from '../types';

export const getBreadSteps = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('White Sandwich')) {
    return [
      {
        title: 'Prepare Your Ingredients',
        description: 'Gather all your ingredients: bread flour, water, salt, sugar, butter, and yeast. Make sure all ingredients are at room temperature.',
        tip: 'Using bread flour with higher protein content will give your sandwich bread a better structure.'
      },
      {
        title: 'Mix the Dough',
        description: 'In a large bowl, combine flour, salt, and sugar. Dissolve yeast in warm water, then add to the flour mixture along with melted butter. Mix until a shaggy dough forms.',
        tip: 'The water temperature should be around 100-110°F (38-43°C) for optimal yeast activation.'
      },
      {
        title: 'Knead the Dough',
        description: 'Turn dough onto a floured surface and knead for 8-10 minutes until smooth and elastic.',
        timer: 10,
        tip: 'The dough should pass the windowpane test - you can stretch it thin enough to see light through without tearing.'
      },
      {
        title: 'First Rise',
        description: 'Place the dough in a lightly oiled bowl, cover, and let rise until doubled in size.',
        timer: 60,
        tip: 'Place the dough in a warm, draft-free area for optimal rising. Around 80-85°F (27-29°C) is ideal.'
      },
      {
        title: 'Shape the Loaf',
        description: 'Gently deflate the dough and shape into a loaf. Place in a greased loaf pan.',
        tip: 'For a tighter crumb, roll the dough into a rectangle and then roll it up tightly before placing in the loaf pan.'
      },
      {
        title: 'Second Rise',
        description: 'Cover the loaf pan and let the dough rise again until it is about 1 inch above the rim of the pan.',
        timer: 45,
        tip: 'This second rise is crucial for a light, airy texture in your sandwich bread.'
      },
      {
        title: 'Bake',
        description: 'Preheat oven to 375°F (190°C). Bake the loaf until golden brown and it sounds hollow when tapped on the bottom.',
        timer: 35,
        tip: 'For a softer crust, brush the top with butter immediately after baking.'
      },
      {
        title: 'Cool',
        description: 'Remove from the pan and let cool completely on a wire rack before slicing.',
        timer: 60,
        tip: 'Letting the bread cool completely before slicing is essential for the best texture and to prevent it from becoming gummy.'
      }
    ];
  } else if (recipeName.includes('Crusty Artisan')) {
    return [
      {
        title: 'Prepare Ingredients',
        description: 'Gather bread flour, water, salt, and yeast.',
        tip: 'Simple ingredients make the best artisan bread - the technique is what matters.'
      },
      {
        title: 'Mix and Autolyse',
        description: 'Mix flour and water, let rest 20-30 minutes before adding salt and yeast.',
        timer: 30,
        tip: 'This rest period (autolyse) allows for better gluten development and flavor.'
      },
      {
        title: 'Develop Gluten',
        description: 'Instead of kneading, use a series of stretch and folds over several hours.',
        timer: 180,
        tip: 'Stretch and fold the dough every 30 minutes for 2-3 hours to develop structure.'
      },
      {
        title: 'Bulk Fermentation',
        description: 'Let dough rise at room temperature until roughly doubled.',
        timer: 120,
        tip: 'Look for bubbles on the surface and a general increase in volume.'
      },
      {
        title: 'Shape',
        description: 'Gently shape into a boule (round) or batard (oval) shape.',
        tip: 'Handle the dough gently to preserve air bubbles that have developed.'
      },
      {
        title: 'Final Proof',
        description: 'Place in a floured proofing basket and let rise again.',
        timer: 60,
        tip: 'The dough is ready when it slowly springs back when poked with a finger.'
      },
      {
        title: 'Prepare for Baking',
        description: 'Preheat oven to 450°F (230°C) with a Dutch oven inside.',
        timer: 45,
        tip: 'The Dutch oven traps steam, creating that signature crispy crust.'
      },
      {
        title: 'Score and Bake',
        description: 'Transfer dough to Dutch oven, score the top, cover and bake.',
        timer: 30,
        tip: 'Bake covered for 30 minutes, then remove the lid and bake for another 15-20 minutes until deep golden brown.'
      }
    ];
  } else if (recipeName.includes('Multigrain')) {
    return [
      {
        title: 'Prepare Seed Soaker',
        description: 'Combine mixed seeds with hot water and let soak for 30 minutes.',
        timer: 30,
        tip: 'Soaking the seeds softens them and prevents them from pulling moisture from the dough.'
      },
      {
        title: 'Mix Dough',
        description: 'Combine flours, water, honey, salt, and yeast. Add soaked seeds.',
        tip: 'The combination of bread flour and whole wheat provides structure while maintaining nutrition.'
      },
      {
        title: 'Knead',
        description: 'Knead for 8-10 minutes until dough is smooth and elastic.',
        timer: 10,
        tip: 'The dough will be slightly stickier than white bread due to the whole grains.'
      },
      {
        title: 'First Rise',
        description: 'Cover and let rise until doubled in size.',
        timer: 90,
        tip: 'Multigrain doughs often take longer to rise than white doughs.'
      },
      {
        title: 'Shape',
        description: 'Gently deflate, shape into a loaf and place in a prepared pan.',
        tip: 'For extra flavor and texture, roll the shaped dough in additional seeds before placing in the pan.'
      },
      {
        title: 'Second Rise',
        description: 'Let rise until nearly doubled and dough crests over the pan.',
        timer: 60,
        tip: 'Tent with foil if needed to prevent the top from drying out.'
      },
      {
        title: 'Bake',
        description: 'Bake at 350°F (175°C) until golden brown and hollow-sounding.',
        timer: 40,
        tip: 'Lower temperature and longer bake time ensures the interior cooks properly with the added seeds and grains.'
      }
    ];
  }
  return [];
};
