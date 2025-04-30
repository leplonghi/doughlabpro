
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PizzaStyle } from './PizzaStyleSelect';

interface CalculateButtonProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  pizzaStyle: PizzaStyle;
  numberOfBalls?: number;
  children?: React.ReactNode;
  navigateToSauce?: boolean;
}

const CalculateButton: React.FC<CalculateButtonProps> = ({
  onClick,
  disabled = false,
  loading = false,
  className = '',
  pizzaStyle,
  numberOfBalls,
  children,
  navigateToSauce = false
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    onClick();
    
    if (navigateToSauce) {
      // Add timeout to ensure calculation is complete before navigation
      setTimeout(() => {
        navigate('/sauce', { 
          state: { 
            pizzaStyle, 
            numberOfBalls: numberOfBalls || 4 
          } 
        });
      }, 300);
    }
  };

  return (
    <Button
      onClick={handleClick}
      disabled={disabled || loading}
      className={`relative ${className}`}
    >
      {loading ? (
        <span className="flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Calculating...
        </span>
      ) : (
        children || 'Calculate Recipe'
      )}
    </Button>
  );
};

export default CalculateButton;
