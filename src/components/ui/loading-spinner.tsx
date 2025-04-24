
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-background border-t-pizza"></div>
        <p className="text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
