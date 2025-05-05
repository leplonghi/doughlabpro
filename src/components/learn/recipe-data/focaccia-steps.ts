
import { BakingStep } from '../types';

export const getFocacciaSteps = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Rosemary')) {
    return [
      {
        title: 'Prepare Your Ingredients',
        description: 'Gather all your ingredients: bread flour, water, salt, olive oil, fresh rosemary, and yeast.',
        tip: 'Using a good quality olive oil will significantly enhance the flavor of your focaccia.'
      },
      {
        title: 'Mix the Dough',
        description: 'In a large bowl, combine flour and salt. In a separate bowl, mix water, olive oil, and yeast. Gradually add the wet ingredients to the dry and mix until a sticky dough forms.',
        tip: 'The dough should be much wetter than regular bread dough - this high hydration is key for authentic focaccia.'
      },
      {
        title: 'Initial Folding',
        description: 'Instead of kneading, perform a series of stretch-and-folds to develop the gluten structure. Pull one side of the dough up and fold it over the center, rotate the bowl, and repeat 3-4 times.',
        timer: 5,
        tip: 'Wet your hands before handling the dough to prevent sticking.'
      },
      {
        title: 'First Rise',
        description: 'Cover the bowl and let the dough rise until doubled in size.',
        timer: 60,
        tip: 'Focaccia dough benefits from a slightly warmer rise temperature than other breads.'
      },
      {
        title: 'Additional Folding',
        description: 'Perform another series of stretch-and-folds, then let the dough rest for 30 minutes. Repeat this process once more.',
        timer: 30,
        tip: 'Each time you fold, you will notice the dough becoming more structured and less sticky.'
      },
      {
        title: 'Transfer to Pan',
        description: 'Generously oil a baking pan. Gently transfer the dough to the pan, trying to maintain as much air as possible. Stretch it to fit the pan.',
        tip: 'A metal pan will give you a crispier bottom crust than a glass dish.'
      },
      {
        title: 'Final Rise',
        description: 'Cover the pan and let the dough rise once more until it is puffy and nearly doubles in height.',
        timer: 45,
        tip: 'During this final rise, preheat your oven to 425°F (220°C).'
      },
      {
        title: 'Dimple and Top',
        description: 'Drizzle the top with olive oil. Use your fingertips to create deep dimples all over the dough. Sprinkle with rosemary and flaky sea salt.',
        tip: 'The dimples prevent the dough from rising too much in the oven and create pockets for the olive oil and toppings.'
      },
      {
        title: 'Bake',
        description: 'Bake until the top is golden brown and the bottom is crisp.',
        timer: 25,
        tip: 'For extra flavor, drizzle a little more olive oil over the hot focaccia as soon as it comes out of the oven.'
      },
      {
        title: 'Cool & Serve',
        description: 'Let cool slightly before removing from the pan. Serve warm or at room temperature.',
        tip: 'Focaccia is best enjoyed the day it is made, but can be frozen and reheated successfully.'
      }
    ];
  } else if (recipeName.includes('Cherry Tomato')) {
    return [
      {
        title: 'Prepare Ingredients',
        description: 'Gather bread flour, water, yeast, salt, olive oil, cherry tomatoes, and herbs.',
        tip: 'Choose ripe cherry tomatoes with good flavor for the best results.'
      },
      {
        title: 'Mix Dough',
        description: 'Create a sticky, high-hydration dough by mixing all ingredients except tomatoes.',
        tip: 'This dough has even higher hydration than classic focaccia for an extra light texture.'
      },
      {
        title: 'Develop Structure',
        description: 'Perform stretch and fold techniques every 30 minutes for 2 hours.',
        timer: 120,
        tip: 'The dough will become stronger and less sticky with each folding session.'
      },
      {
        title: 'Prepare Pan',
        description: 'Generously oil a baking sheet or pan with good quality olive oil.',
        tip: 'The oil creates the signature crispy bottom of the focaccia.'
      },
      {
        title: 'Transfer and Stretch',
        description: 'Move dough to pan and gently stretch to fill the corners.',
        tip: 'If the dough resists stretching, let it rest 10-15 minutes and try again.'
      },
      {
        title: 'Add Tomatoes',
        description: 'Press halved cherry tomatoes into the dough, cut side up.',
        tip: 'Arrange in a pattern and push firmly so they stay in place during baking.'
      },
      {
        title: 'Final Proof',
        description: 'Let dough rise until puffy and doubled in height.',
        timer: 45,
        tip: 'The dough should be very airy and light.'
      },
      {
        title: 'Dimple and Season',
        description: 'Create dimples, drizzle with olive oil, and sprinkle with herbs and salt.',
        tip: 'Fresh herbs can burn, so consider adding delicate herbs after baking.'
      },
      {
        title: 'Bake',
        description: 'Bake at 425°F until golden and tomatoes are slightly caramelized.',
        timer: 25,
        tip: 'The tomatoes should soften and intensify in flavor during baking.'
      }
    ];
  } else if (recipeName.includes('Olive & Garlic')) {
    return [
      {
        title: 'Prepare Olive Mix',
        description: 'Chop olives and mince garlic, mix with a tablespoon of olive oil.',
        tip: 'A mixture of black and green olives provides the best flavor contrast.'
      },
      {
        title: 'Make Dough',
        description: 'Mix flour, water, salt, yeast, and olive oil to form a sticky dough.',
        tip: 'Use room temperature water for best yeast activation and dough development.'
      },
      {
        title: 'Rest and Fold',
        description: 'Let dough rest 20 minutes, then perform a series of stretch and folds.',
        timer: 20,
        tip: 'This technique builds strength without overworking the dough.'
      },
      {
        title: 'Bulk Fermentation',
        description: 'Cover and let rise for 2-3 hours, performing folds every 30 minutes for the first 90 minutes.',
        timer: 180,
        tip: 'The longer fermentation develops better flavor and structure.'
      },
      {
        title: 'Prepare Pan',
        description: 'Coat baking pan with a generous layer of olive oil.',
        tip: 'This creates the crispy bottom crust that focaccia is known for.'
      },
      {
        title: 'Transfer Dough',
        description: 'Gently transfer dough to pan and stretch to fill.',
        tip: 'Handle the dough gently to preserve the air bubbles that have developed.'
      },
      {
        title: 'Add Olives and Garlic',
        description: 'Press olive and garlic mixture into the dough in an even distribution.',
        tip: 'Push ingredients firmly into the dough so they don\'t fall off after baking.'
      },
      {
        title: 'Final Rise',
        description: 'Cover and let rise until puffy and doubled in height.',
        timer: 60,
        tip: 'The dough should be very light and airy before baking.'
      },
      {
        title: 'Dimple and Oil',
        description: 'Create deep dimples with fingertips and drizzle with more olive oil.',
        tip: 'The dimples capture the oil and create the characteristic focaccia texture.'
      },
      {
        title: 'Bake',
        description: 'Bake until golden brown and fragrant.',
        timer: 25,
        tip: 'The garlic should be golden but not burnt - if needed, tent with foil for the last part of baking.'
      }
    ];
  }
  return [];
};
