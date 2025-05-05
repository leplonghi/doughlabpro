
export type DoughType = 'pizza' | 'bread' | 'focaccia' | 'sourdough';

export const doughTypes = [
  { 
    id: 'pizza' as DoughType, 
    name: 'Pizza', 
    icon: '🍕', 
    description: 'Make perfect pizza dough for various styles' 
  },
  { 
    id: 'bread' as DoughType, 
    name: 'Bread', 
    icon: '🍞', 
    description: 'Bake delicious sandwich and artisan breads' 
  },
  { 
    id: 'focaccia' as DoughType, 
    name: 'Focaccia', 
    icon: '🫓', 
    description: 'Create light and airy flatbread with toppings' 
  },
  { 
    id: 'sourdough' as DoughType, 
    name: 'Sourdough', 
    icon: '🥖', 
    description: 'Master the art of wild yeast fermentation' 
  },
];

export const recipePresets = {
  pizza: [
    { 
      name: 'Simple Neapolitan Pizza', 
      hydration: 60, 
      difficulty: 'Medium', 
      defaultQuantity: 4, 
      ballWeight: 250,
      // Fixed flour amount for consistent recipe calculations
      flourAmount: 1000 
    },
    { 
      name: 'New York Style Pizza', 
      hydration: 65, 
      difficulty: 'Medium', 
      defaultQuantity: 2, 
      ballWeight: 350,
      flourAmount: 1000
    },
    { 
      name: 'Thin Crispy Crust', 
      hydration: 55, 
      difficulty: 'Medium', 
      defaultQuantity: 6, 
      ballWeight: 200,
      flourAmount: 1000
    }
  ],
  bread: [
    { name: 'Basic White Sandwich Loaf', hydration: 65, difficulty: 'Medium', defaultQuantity: 1, ballWeight: 800 },
    { name: 'Crusty Artisan Bread', hydration: 75, difficulty: 'Medium', defaultQuantity: 1, ballWeight: 900 },
    { name: 'Multigrain Bread', hydration: 70, difficulty: 'Medium', defaultQuantity: 1, ballWeight: 850 }
  ],
  focaccia: [
    { name: 'Classic Rosemary Focaccia', hydration: 65, difficulty: 'Medium', defaultQuantity: 1, ballWeight: 700, fermentationHours: 12 },
    { name: 'Cherry Tomato & Herb Focaccia', hydration: 65, difficulty: 'Medium', defaultQuantity: 1, ballWeight: 700, fermentationHours: 12 },
    { name: 'Olive & Garlic Focaccia', hydration: 65, difficulty: 'Medium', defaultQuantity: 1, ballWeight: 700, fermentationHours: 12 }
  ],
  sourdough: [
    { name: 'Beginner\'s Sourdough Loaf', hydration: 70, difficulty: 'Medium', defaultQuantity: 1, ballWeight: 850 },
    { name: 'Rustic Country Loaf', hydration: 75, difficulty: 'Medium', defaultQuantity: 1, ballWeight: 900 },
    { name: 'Sourdough Sandwich Bread', hydration: 65, difficulty: 'Medium', defaultQuantity: 1, ballWeight: 800 }
  ]
};
