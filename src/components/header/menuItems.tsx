
import React from 'react';
import { ChefHat, FlaskConical } from 'lucide-react';

export const menuItems = [
  {
    title: 'Home',
    path: '/home'
  },
  {
    title: 'Learn',
    path: '/learn',
    icon: <ChefHat className="h-4 w-4 mr-2" />
  }, 
  {
    title: 'Calculator',
    path: '/calculator',
    icon: <FlaskConical className="h-4 w-4 mr-2" />
  }, 
  {
    title: 'Toppings',
    path: '/toppings'
  }, 
  {
    title: 'Sauces',
    path: '/sauce'
  },
  {
    title: 'School',
    path: '/school'
  }
];
