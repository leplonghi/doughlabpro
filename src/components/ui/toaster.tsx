
import * as React from "react";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast, setToastFunction } from "@/hooks/use-toast";

export function Toaster() {
  const { toasts, toast } = useToast();
  
  // Set up the global toast function on first render
  React.useEffect(() => {
    if (toast) {
      setToastFunction(toast);
    }
  }, [toast]);

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, variant, ...props }) {
        // Convert variant to ensure it's compatible with Toast component
        const toastVariant = variant === "success" ? "default" : variant;
        
        return (
          <Toast key={id} {...props} variant={toastVariant}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
