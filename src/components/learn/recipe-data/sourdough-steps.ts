
import { BakingStep } from '../types';

export const getSourdoughSteps = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Beginner')) {
    return [
      {
        title: 'Feed Your Starter',
        description: 'Make sure your sourdough starter is active and bubbly. Feed it 8-12 hours before you plan to mix your dough.',
        tip: 'A mature starter should roughly double in size and show plenty of bubbles within 4-8 hours after feeding.'
      },
      {
        title: 'Mix Flour and Water (Autolyse)',
        description: 'In a large bowl, mix the flour and water until no dry flour remains. Cover and let rest for 30-60 minutes.',
        timer: 45,
        tip: 'This rest period, called autolyse, allows the flour to fully hydrate and begins gluten development.'
      },
      {
        title: 'Add Starter and Salt',
        description: 'Add your active starter and salt to the dough. Mix thoroughly until fully incorporated.',
        tip: 'Use wet hands to prevent the dough from sticking to your fingers during mixing.'
      },
      {
        title: 'Bulk Fermentation with Folds',
        description: 'Over the next 3-5 hours, perform a series of stretch-and-fold techniques every 30 minutes for the first 2 hours. Then let the dough rest undisturbed.',
        timer: 240,
        tip: 'The dough should increase in volume by about 50% and show bubbles on the surface and sides of the container.'
      },
      {
        title: 'Pre-shape the Dough',
        description: 'Gently turn the dough onto a lightly floured surface. Pre-shape into a round by pulling edges into the center, creating tension on the dough surface.',
        tip: 'Handle the dough gently to preserve the gas bubbles that have developed.'
      },
      {
        title: 'Rest the Dough',
        description: 'Let the pre-shaped dough rest for 20-30 minutes before final shaping.',
        timer: 25,
        tip: 'This bench rest allows the gluten to relax, making final shaping easier.'
      },
      {
        title: 'Final Shaping',
        description: 'Shape the dough into a tight ball or batard (oval) shape. Place into a floured banneton or cloth-lined bowl, seam side up.',
        tip: 'A tight final shape creates good surface tension, which helps the bread rise upward rather than outward.'
      },
      {
        title: 'Final Proof',
        description: 'Cover and let the dough proof at room temperature for 1-2 hours, or place in the refrigerator for 8-14 hours for a cold fermentation.',
        timer: 120,
        tip: 'Cold fermentation develops more flavor and makes the dough easier to handle and score.'
      },
      {
        title: 'Preheat and Prepare for Baking',
        description: 'About an hour before baking, place your Dutch oven or baking stone in the oven and preheat to 450°F (230°C).',
        tip: 'A preheated Dutch oven creates steam that helps the bread rise fully and develop a crisp crust.'
      },
      {
        title: 'Score and Bake',
        description: 'Turn the dough onto parchment paper. Score the top with a sharp blade. Transfer to the hot Dutch oven, cover, and bake for 20 minutes. Then remove the lid and bake for another 20-25 minutes.',
        timer: 45,
        tip: 'Scoring allows the bread to expand in a controlled way and creates an artistic pattern on your loaf.'
      },
      {
        title: 'Cool Completely',
        description: 'Remove the bread from the oven and let it cool completely on a wire rack before slicing.',
        timer: 60,
        tip: 'The cooling period is actually part of the baking process. Cutting into the bread too soon can result in a gummy texture.'
      }
    ];
  } else if (recipeName.includes('Rustic Country')) {
    return [
      {
        title: 'Prepare Starter',
        description: 'Ensure your starter is active and at peak fermentation.',
        tip: 'Your starter should have roughly doubled and be bubbly and active.'
      },
      {
        title: 'Autolyse',
        description: 'Mix flours and water, let rest for 1 hour before adding starter and salt.',
        timer: 60,
        tip: 'This longer autolyse helps develop dough structure and flavor.'
      },
      {
        title: 'Add Starter and Salt',
        description: 'Incorporate starter and salt into the autolysed dough.',
        tip: 'Use your fingertips to thoroughly mix the starter and salt throughout the dough.'
      },
      {
        title: 'Stretch and Fold',
        description: 'Perform a series of stretch and folds every 30 minutes during bulk fermentation.',
        timer: 30,
        tip: 'Complete 4-6 sets of folds, with the dough becoming more elastic with each set.'
      },
      {
        title: 'Bulk Fermentation',
        description: 'Allow dough to ferment until increased in volume by 50-75%.',
        timer: 300,
        tip: 'Look for a dough that is aerated and has visible bubbles under the surface.'
      },
      {
        title: 'Pre-shape',
        description: 'Gently pre-shape into a round and rest covered.',
        timer: 20,
        tip: 'This relaxes the gluten before final shaping.'
      },
      {
        title: 'Final Shape',
        description: 'Shape into a tight boule (round) or batard (oval).',
        tip: 'Create good surface tension without tearing the dough or expelling too much gas.'
      },
      {
        title: 'Cold Proof',
        description: 'Place shaped dough in a banneton and refrigerate overnight.',
        timer: 720,
        tip: 'The long cold fermentation significantly develops flavor complexity.'
      },
      {
        title: 'Prepare for Baking',
        description: 'Preheat Dutch oven to 500°F (260°C) for at least 45 minutes.',
        timer: 45,
        tip: 'A thoroughly preheated vessel ensures good oven spring.'
      },
      {
        title: 'Score and Bake',
        description: 'Score the cold dough and transfer to the hot Dutch oven.',
        tip: 'Score decisively with a razor blade or very sharp knife at a 45-degree angle.'
      },
      {
        title: 'Bake With Steam',
        description: 'Bake covered for 20 minutes, then uncovered until deeply browned.',
        timer: 40,
        tip: 'Look for a dark amber color for maximum flavor development.'
      }
    ];
  } else if (recipeName.includes('Sourdough Sandwich')) {
    return [
      {
        title: 'Mix Dough',
        description: 'Combine all ingredients except salt, let rest 30 minutes.',
        timer: 30,
        tip: 'The addition of butter and honey creates a softer, more enriched dough perfect for sandwiches.'
      },
      {
        title: 'Add Salt',
        description: 'Mix in salt thoroughly and knead briefly to combine.',
        tip: 'Salt is added after the initial rest to allow better gluten development.'
      },
      {
        title: 'Develop Strength',
        description: 'Perform stretch and folds every 30 minutes for 2 hours.',
        timer: 120,
        tip: 'The dough should become more elastic and cohesive with each folding session.'
      },
      {
        title: 'Bulk Fermentation',
        description: 'Allow dough to rise until increased in volume by 30-40%.',
        timer: 180,
        tip: 'This rise is less than a typical sourdough loaf to create a tighter, more even crumb.'
      },
      {
        title: 'Shape Loaf',
        description: 'Shape into a tight loaf and place in a greased loaf pan.',
        tip: 'For sandwich bread, shape by rolling the dough into a tight cylinder the length of your loaf pan.'
      },
      {
        title: 'Final Proof',
        description: 'Let rise until the dough crests about 1 inch above the rim of the pan.',
        timer: 120,
        tip: 'A slow, steady rise produces the best texture for sandwich bread.'
      },
      {
        title: 'Prepare for Baking',
        description: 'Preheat oven to 375°F (190°C).',
        tip: 'A moderate oven temperature ensures the loaf bakes evenly without overbrowning.'
      },
      {
        title: 'Bake',
        description: 'Bake until golden brown and internal temperature reaches 200°F (93°C).',
        timer: 40,
        tip: 'Tent with foil if the top browns too quickly.'
      },
      {
        title: 'Cool and Slice',
        description: 'Cool completely before slicing for sandwiches.',
        timer: 120,
        tip: 'This bread freezes exceptionally well - slice before freezing for convenience.'
      }
    ];
  }
  return [];
};
