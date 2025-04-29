
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProButton from '@/components/ProButton';

const AuthActions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex gap-2">
      <Button 
        variant="default" 
        onClick={() => navigate('/calculator')}
        className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
      >
        <Calculator size={18} className="mr-2" />
        Dough Calculator
      </Button>
      <ProButton />
    </div>
  );
};

export default AuthActions;
