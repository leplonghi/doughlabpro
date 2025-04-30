
import * as React from "react";
import { toast as sonnerToast } from "sonner";

// Define toast type that matches the API used in components
export type ToastProps = {
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  variant?: "default" | "destructive" | "success";
};

// Convert our toast format to Sonner's format
export const toast = (props: ToastProps) => {
  const { title, description, variant = "default", action } = props;
  
  // Convert our variant to Sonner's style
  const style: React.CSSProperties = {};
  if (variant === "destructive") {
    style.backgroundColor = "var(--destructive)";
    style.color = "var(--destructive-foreground)";
  } else if (variant === "success") {
    style.backgroundColor = "var(--success)"; 
    style.color = "var(--success-foreground)";
  }

  return sonnerToast(title as string, {
    description,
    action: action ? { label: 'Action', onClick: () => {} } : undefined,
    style
  });
};

// Helper function to maintain API compatibility with existing code
export function useToast() {
  return {
    toast,
    dismiss: (id: string) => sonnerToast.dismiss(id),
    toasts: [], // Sonner manages its own toast state
    removeAll: () => sonnerToast.dismiss()
  };
}

// This ToastProvider is a no-op as we're using Sonner's own provider in App.tsx
export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
