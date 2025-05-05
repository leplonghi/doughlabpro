
import { BakingStep } from '../types';

export const getFocacciaSteps = (recipeName: string): BakingStep[] => {
  if (recipeName.includes('Rosemary')) {
    return [
      {
        title: 'Prepare Your Ingredients',
        description: 'Gather all your ingredients: bread flour, warm water (65% hydration), salt, olive oil (a generous amount is key for authentic focaccia), fresh rosemary, and yeast. Using high-quality olive oil significantly enhances the flavor of your focaccia.',
        tip: 'For authentic focaccia, use a good-quality extra virgin olive oil - it\'s a key flavor component, not just a dough ingredient.',
        image: '/lovable-uploads/10240500-8679-4a2d-9667-7895246fe108.png'
      },
      {
        title: 'Mix the Dough',
        description: 'In a large bowl, mix flour and salt. In a separate container, combine warm water (about 95°F/35°C), 2 tablespoons of olive oil, and dissolved yeast. Make a well in the center of the flour mixture and gradually add the liquid, mixing until a sticky, wet dough forms. The dough should be wetter than regular bread dough - this high hydration is key for authentic focaccia\'s open crumb structure.',
        tip: 'Don\'t be alarmed by how wet the dough is - focaccia requires higher hydration (65%) than many bread doughs for its characteristic texture.',
        image: '/lovable-uploads/15936b17-7234-47a3-a949-d72c0d2932e6.png'
      },
      {
        title: 'Develop Structure with Folding',
        description: 'Instead of traditional kneading, use the "stretch and fold" technique. Let the dough rest for 30 minutes, then perform a series of folds: with wet hands, grab one side of the dough, stretch it up, and fold it over itself. Rotate the bowl and repeat 3-4 times. This develops gluten while maintaining the air bubbles that create focaccia\'s texture.',
        timer: 5,
        tip: 'Always wet your hands before handling high-hydration dough to prevent sticking. The dough will become more structured and less sticky with each folding session.',
        image: '/lovable-uploads/1a7e9690-7fcf-43cb-a119-2b7d22416a67.png'
      },
      {
        title: 'Extended Fermentation',
        description: 'Cover the bowl tightly with plastic wrap and choose your fermentation approach: For same-day focaccia, leave at room temperature (75°F/24°C) for 4-6 hours. For enhanced flavor development, refrigerate for 24-48 hours (recommended). This slow, cold fermentation develops complex flavors and improves the texture significantly.',
        timer: 240,
        tip: 'The longer, colder fermentation produces superior flavor through a process called proteolysis, where proteins break down into more flavorful amino acids.',
        image: '/lovable-uploads/af799f78-d4b3-47c9-a194-0885a14c4753.png'
      },
      {
        title: 'Prepare Baking Pan',
        description: 'Pour a generous layer of olive oil (about 3-4 tablespoons) into a 9×13 inch (23×33 cm) metal baking pan. The oil should completely cover the bottom of the pan with a thin layer - this creates the signature crispy bottom of authentic focaccia.',
        tip: 'Don\'t skimp on the oil in the pan - it\'s essential for the characteristic golden, crispy bottom crust that defines great focaccia.'
      },
      {
        title: 'Transfer and First Stretching',
        description: 'If refrigerated, allow dough to sit at room temperature for 1-2 hours before proceeding. With oiled hands, gently transfer the dough to the prepared pan, trying to maintain air bubbles. Stretch it slightly to fit the corners, then let it rest for 20 minutes so the gluten can relax.',
        timer: 20,
        tip: 'Be gentle when transferring the dough to preserve the air bubbles developed during fermentation - these create focaccia\'s characteristic open, airy texture.'
      },
      {
        title: 'Second Stretching and Final Rise',
        description: 'With oiled fingertips, gently stretch the dough again to reach the corners of the pan. Cover and let rise until the dough is puffy and nearly doubled in height, filling the pan completely (about 45-60 minutes). During this time, preheat your oven to 425°F (220°C).',
        timer: 60,
        tip: 'The final rise is crucial for proper texture - be patient and look for the dough to become very puffy and airy before proceeding to the next step.'
      },
      {
        title: 'Create the Signature Dimples',
        description: 'When the dough is puffy and risen, drizzle another 2 tablespoons of olive oil over the surface. With oiled fingertips, press deeply into the dough all the way to the bottom of the pan, creating the characteristic dimpled pattern. These dimples should be deep and spaced about 1 inch (2.5 cm) apart across the entire surface.',
        tip: 'The dimples serve multiple purposes: they prevent the dough from rising too much in the oven, create pockets to hold olive oil and toppings, and contribute to the signature appearance.'
      },
      {
        title: 'Add Rosemary and Salt',
        description: 'Sprinkle fresh rosemary leaves evenly over the dimpled surface, gently pressing some into the dimples. Finish with a generous sprinkle of flaky sea salt. The salt crystals will remain partially intact during baking, creating burst of flavor in the finished bread.',
        tip: 'For maximum rosemary flavor, you can infuse some of the olive oil with fresh rosemary before adding it to the top of the focaccia.'
      },
      {
        title: 'Bake to Golden Perfection',
        description: 'Bake in the preheated oven until the top is golden brown and the bottom is crisp when lifted with a spatula, about 20-25 minutes. The internal temperature should reach approximately 200°F (93°C) when fully baked.',
        timer: 25,
        tip: 'For extra flavor, drizzle a little more olive oil over the hot focaccia as soon as it comes out of the oven - the heat will help the oil penetrate the bread.'
      },
      {
        title: 'Cool and Serve',
        description: 'Allow the focaccia to cool in the pan for 5-10 minutes, then transfer to a cooling rack to prevent the bottom from becoming soggy. For best flavor and texture, serve warm or at room temperature within a few hours of baking.',
        tip: 'Authentic Italian focaccia is often served as an appetizer, alongside a meal, or split horizontally and used for sandwiches.'
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
