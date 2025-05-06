
# Step-by-Step Recipe Guides

## Overview
The Learn section of DoughLab Pro provides comprehensive visual guides for various dough-based recipes. These guides break down the baking process into clear steps with images, instructions, educational content, and tips.

## Recipe Types

1. **Pizza Dough**
   - Neapolitan Style
   - New York Style

2. **Bread Dough**
   - Country Loaf
   - Baguette
   - Brioche

3. **Focaccia Dough**
   - Classic Focaccia

4. **Sourdough**
   - Basic Sourdough

## Guide Structure

Each recipe guide consists of:

1. **BakingStep Interface**
   ```typescript
   interface BakingStep {
     title: string;           // Step name
     description: string;     // How to perform the step
     didacticInfo: string;    // Educational information about the step
     image: string;           // Visual reference
     tip: string;             // Practical advice for success
   }
   ```

2. **Visual Components**
   - Step headers with progress indication
   - High-quality images showing the process
   - Informational boxes for educational content
   - Tip callouts for practical advice
   - Navigation between steps

3. **Interactive Features**
   - Table of contents for quick navigation
   - Print functionality for offline reference
   - Timer for fermentation or baking steps

## Implementation

The step guides are implemented using:

1. **Data Organization**
   - Separate files for each dough type (`pizza-steps.ts`, `bread-steps.ts`, etc.)
   - Language-specific functions for each recipe type
   - Helper functions for getting the right steps based on recipe selection

2. **Component Structure**
   - `StepGuide` component for overall layout
   - `StepItem` for individual step display
   - Supporting components for specific content types (tips, info, etc.)

3. **User Flow**
   - Recipe selection → Quantity adjustment → Step-by-step guide
   - Option to view all steps at once or step-by-step

## Multilingual Support

All recipe guides support three languages:
- English (default)
- Portuguese
- Spanish

The language selection determines which set of steps to display, with language-specific tips and information.

## Educational Approach

The guides focus on both:
1. **Procedural knowledge** - how to perform each step
2. **Conceptual knowledge** - why each step matters and the science behind it

This dual approach helps users not just follow recipes but understand the principles behind successful baking.
