
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
    { name: 'Simple Neapolitan Pizza (2 pies)', hydration: 60, difficulty: 'Easy' },
    { name: 'New York Style Pizza (2 pies)', hydration: 65, difficulty: 'Medium' },
    { name: 'Thin Crispy Crust (4 small pies)', hydration: 55, difficulty: 'Easy' }
  ],
  bread: [
    { name: 'Basic White Sandwich Loaf', hydration: 65, difficulty: 'Easy' },
    { name: 'Crusty Artisan Bread', hydration: 75, difficulty: 'Medium' },
    { name: 'Multigrain Bread', hydration: 70, difficulty: 'Medium' }
  ],
  focaccia: [
    { name: 'Classic Rosemary Focaccia', hydration: 75, difficulty: 'Easy' },
    { name: 'Cherry Tomato & Herb Focaccia', hydration: 80, difficulty: 'Medium' },
    { name: 'Olive & Garlic Focaccia', hydration: 78, difficulty: 'Easy' }
  ],
  sourdough: [
    { name: 'Beginner\'s Sourdough Loaf', hydration: 70, difficulty: 'Medium' },
    { name: 'Rustic Country Loaf', hydration: 75, difficulty: 'Hard' },
    { name: 'Sourdough Sandwich Bread', hydration: 65, difficulty: 'Medium' }
  ]
};
