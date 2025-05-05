
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
    { name: 'Simple Neapolitan Pizza', hydration: 60, difficulty: 'Medium', defaultQuantity: 4 },
    { name: 'New York Style Pizza', hydration: 65, difficulty: 'Medium', defaultQuantity: 2 },
    { name: 'Thin Crispy Crust', hydration: 55, difficulty: 'Medium', defaultQuantity: 6 }
  ],
  bread: [
    { name: 'Basic White Sandwich Loaf', hydration: 65, difficulty: 'Medium', defaultQuantity: 1 },
    { name: 'Crusty Artisan Bread', hydration: 75, difficulty: 'Medium', defaultQuantity: 1 },
    { name: 'Multigrain Bread', hydration: 70, difficulty: 'Medium', defaultQuantity: 1 }
  ],
  focaccia: [
    { name: 'Classic Rosemary Focaccia', hydration: 65, difficulty: 'Medium', defaultQuantity: 1 },
    { name: 'Cherry Tomato & Herb Focaccia', hydration: 65, difficulty: 'Medium', defaultQuantity: 1 },
    { name: 'Olive & Garlic Focaccia', hydration: 65, difficulty: 'Medium', defaultQuantity: 1 }
  ],
  sourdough: [
    { name: 'Beginner\'s Sourdough Loaf', hydration: 70, difficulty: 'Medium', defaultQuantity: 1 },
    { name: 'Rustic Country Loaf', hydration: 75, difficulty: 'Medium', defaultQuantity: 1 },
    { name: 'Sourdough Sandwich Bread', hydration: 65, difficulty: 'Medium', defaultQuantity: 1 }
  ]
};
