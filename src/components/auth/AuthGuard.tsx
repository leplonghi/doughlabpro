
import * as React from 'react';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  // Simply pass through children without any auth checking
  return <>{children}</>;
}
