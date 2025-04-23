
import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const RecipeActions: React.FC = () => (
  <>
    <Separator />
    <div className="flex justify-center gap-4">
      <Button variant="outline">
        Save Recepie
      </Button>
      <Button>
        New Recepie
      </Button>
    </div>
  </>
);

export default RecipeActions;
