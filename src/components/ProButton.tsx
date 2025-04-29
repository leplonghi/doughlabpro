
import React from 'react';
import { Button } from '@/components/ui/button';
import { Crown } from 'lucide-react';

interface ProButtonProps {
  className?: string;
}

const ProButton: React.FC<ProButtonProps> = ({ className }) => {
  return (
    <Button 
      variant="default" 
      className={`bg-[#9b87f5] hover:bg-[#8a74f0] text-white font-medium ${className || ''}`}
      onClick={() => window.open('/pricing', '_self')}
    >
      <Crown size={18} className="mr-2" />
      Atualizar para PRO
    </Button>
  );
};

export default ProButton;
