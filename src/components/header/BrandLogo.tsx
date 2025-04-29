
import React from 'react';
import { Link } from 'react-router-dom';
import { RefreshCw } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { refreshApplication } from '@/serviceWorker';
import { toast } from 'sonner';

const BrandLogo: React.FC = () => {
  const { t } = useTranslation();
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  
  const handleRefresh = async () => {
    setIsRefreshing(true);
    toast.info(t('common.refreshing', 'Refreshing application...'));
    
    try {
      await refreshApplication();
    } catch (error) {
      console.error('Error refreshing application:', error);
      toast.error(t('common.refreshError', 'Failed to refresh. Try again.'));
    } finally {
      // In case the page doesn't reload, reset the state after 3 seconds
      setTimeout(() => {
        setIsRefreshing(false);
      }, 3000);
    }
  };
  
  return (
    <div className="flex items-center gap-4">
      <Link to="/" className="flex items-center gap-2.5">
        <img src="/lovable-uploads/15936b17-7234-47a3-a949-d72c0d2932e6.png" alt="DoughLab Pro logo" className="h-8 w-auto" />
              </Link>
      
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={handleRefresh}
        disabled={isRefreshing}
        className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
        title={t('common.refreshApp', 'Refresh app')}
      >
        <RefreshCw size={18} className={`${isRefreshing ? 'animate-spin' : ''}`} />
      </Button>
    </div>
  );
};

export default BrandLogo;
