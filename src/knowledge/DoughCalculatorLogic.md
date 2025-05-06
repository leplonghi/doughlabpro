
# DoughCalculator Logic

## Overview
The Dough Calculator is the core functionality of DoughLab Pro. It allows users to calculate recipes for different types of dough using various parameters:

- Dough Type (Pizza or Bread)
- Style (Neapolitan, New York, Baguette, Brioche, Focaccia)
- Fermentation Method (Direct, Poolish, Biga)
- Ingredients (Flour, Water, Salt, Yeast, Oil, Sugar)
- Ball Weight

## Key Components

1. **useDoughCalculator Hook**
   - Custom hook that manages the dough calculator state and calculations
   - Takes parameters like style and fermentation method
   - Returns state, validation functions, and calculation triggers

2. **Ingredient Calculation Logic**
   - Flour is the base (100%)
   - Hydration is calculated as a percentage of flour
   - Other ingredients (salt, yeast, oil, sugar) are calculated as percentages
   - Ball weight determines the number of dough balls that can be made

3. **Special Calculations**
   - Different styles have different default hydration levels
   - New York style pizza includes sugar in the recipe
   - Brioche bread includes higher fat content
   - Poolish and Biga methods involve pre-ferments with different hydration levels

4. **Recipe Results**
   - Displays ingredients in user's preferred units (grams, ounces, cups)
   - Shows both pre-ferment and final dough ingredients
   - Provides temperature guidance based on dough type and fermentation method
   - Offers baking tips tailored to the specific recipe

## Implementation Details

The dough calculator uses a multi-step approach:
1. Select dough type
2. Choose style
3. Select fermentation method
4. Input ingredient amounts and preferences
5. Calculate the final recipe

All calculations follow baker's percentages, where flour is always 100% and other ingredients are expressed as a percentage of the flour weight.

## Validation Rules

- Flour must be at least 100g
- Hydration should be between 50% and 90%
- Ball weight is validated against typical ranges for the dough type:
  - Pizza: 200g - 400g
  - Baguette: 350g - 450g
  - Brioche: 500g - 800g
  - Focaccia: 400g - 800g

## Translation and Internationalization

All calculator interfaces and results are fully translatable and support English, Portuguese, and Spanish languages.
