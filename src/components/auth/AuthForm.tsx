
import * as React from 'react';
import { Button } from '@/components/ui/button';

export function AuthForm() {
  return (
    <div className="space-y-4 w-full mt-6">
      <Button
        className="w-full bg-white text-black border border-gray-300 hover:bg-gray-50 h-12 font-medium flex items-center justify-center gap-3 shadow-sm"
        disabled={true}
      >
        Authentication Disabled
      </Button>
    </div>
  );
};
