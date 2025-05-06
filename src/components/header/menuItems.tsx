
import React from 'react';
import { ChefHat, FlaskConical } from 'lucide-react';

export const menuItems = [
  {
    title: 'Home',
    path: '/home',
    translationKey: 'nav.home'
  },
  {
    title: 'Learn',
    path: '/learn',
    icon: <ChefHat className="h-4 w-4 mr-2" />,
    translationKey: 'nav.learn'
  }, 
  {
    title: 'Calculator',
    path: '/calculator',
    icon: <FlaskConical className="h-4 w-4 mr-2" />,
    translationKey: 'nav.calculator'
  }, 
  {
    title: 'Toppings',
    path: '/toppings',
    translationKey: 'nav.toppings'
  }, 
  {
    title: 'Sauces',
    path: '/sauce',
    translationKey: 'nav.sauces'
  },
  {
    title: 'School',
    path: '/school',
    translationKey: 'nav.school'
  }
];
