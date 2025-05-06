
import React from 'react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

interface ProButtonProps {
  label?: string;
  className?: string;
}

export const ProButton: React.FC<ProButtonProps> = ({ label = 'Upgrade to Pro', className = '' }) => {
  const navigate = useNavigate();
  const isPro = false; // Hardcoded since we removed internationalization

  if (isPro) return null;

  return (
    <Button
      size="sm"
      className={`bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white group ${className}`}
      onClick={() => navigate('/upgrade')}
    >
      <Sparkles className="w-4 h-4 mr-2 group-hover:animate-pulse" />
      {label}
    </Button>
  );
};

export default ProButton;
