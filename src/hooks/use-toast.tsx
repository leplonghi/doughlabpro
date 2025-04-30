
import * as React from "react";
import { toast as sonnerToast } from "sonner";

// Re-export the toast function from sonner
export const toast = sonnerToast;

// Helper function to maintain API compatibility with existing code
export function useToast() {
  return {
    toast: sonnerToast,
    dismiss: (id: string) => sonnerToast.dismiss(id),
    toasts: [], // Sonner manages its own toast state
    removeAll: () => sonnerToast.dismiss()
  };
};

// No provider needed for Sonner
export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// For compatibility with existing code
export type ToastProps = {
  id?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  variant?: "default" | "destructive" | "success";
};
