
import React from 'react';

interface StepImageProps {
  title: string;
  providedImage?: string;
}

// Helper component to display a step image
export const StepImage: React.FC<StepImageProps> = ({ title, providedImage }) => {
  // Helper function to get appropriate image for a step
  const getStepImage = (stepTitle: string, providedImage?: string) => {
    if (providedImage) return providedImage;
    
    // Map step titles to appropriate images
    if (stepTitle.includes('Mix') || stepTitle.includes('Autolyse')) {
      return "/lovable-uploads/dough-mixing.jpg";
    } else if (stepTitle.includes('Knead') || stepTitle.includes('Fold')) {
      return "/lovable-uploads/dough-folding.jpg";
    } else if (stepTitle.includes('Ferment') || stepTitle.includes('Proof')) {
      return "/lovable-uploads/dough-fermentation.jpg";
    } else if (stepTitle.includes('Shape')) {
      return "/lovable-uploads/dough-shaping.jpg";
    } else if (stepTitle.includes('Bake')) {
      return "/lovable-uploads/dough-baking.jpg";
    }
    
    // Default image if no specific match
    return "/lovable-uploads/dough-process.jpg";
  };

  return (
    <div className="mb-6 rounded-lg overflow-hidden">
      <img 
        src={getStepImage(title, providedImage)} 
        alt={title} 
        className="w-full h-64 object-cover rounded-lg"
      />
    </div>
  );
};
