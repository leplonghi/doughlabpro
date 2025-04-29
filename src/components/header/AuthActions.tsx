
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';

const AuthActions: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Button 
      variant="default" 
      onClick={() => navigate('/calculator')}
      className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
    >
      <Calculator size={18} className="mr-2" />
      {t('common.calculator', 'Dough Calculator')}
    </Button>
  );
};

export default AuthActions;
