
import * as React from "react";

// Define toast types
export type ToastProps = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  variant?: "default" | "destructive" | "success";
};

const TOAST_LIMIT = 5;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: React.ReactNode;
  dismissible?: boolean;
};

// Create context for toast state
export const ToastContext = React.createContext<{
  toasts: ToasterToast[];
  addToast: (toast: ToasterToast) => void;
  removeToast: (id: string) => void;
  removeAll: () => void;
}>({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
  removeAll: () => {},
});

// Set up global toast function
let toastFn: ((props: Omit<ToasterToast, "id">) => string) | null = null;

// Helper function to set the toast function when the context is available
export const setToastFunction = (fn: (props: Omit<ToasterToast, "id">) => string) => {
  toastFn = fn;
};

// Standalone toast function for usage outside components
export const toast = (props: Omit<ToasterToast, "id">) => {
  if (!toastFn) {
    console.warn("Toast function called before it was initialized");
    return "";
  }
  return toastFn(props);
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [toasts, setToasts] = React.useState<ToasterToast[]>([]);

  const addToast = React.useCallback((toast: ToasterToast) => {
    setToasts((toasts) => {
      if (toasts.length >= TOAST_LIMIT) {
        toasts.shift();
      }
      return [...toasts, toast];
    });
  }, []);

  const removeToast = React.useCallback((id: string) => {
    setToasts((toasts) => toasts.filter((t) => t.id !== id));
  }, []);

  const removeAll = React.useCallback(() => {
    setToasts([]);
  }, []);

  // Set up toast function when component mounts
  React.useEffect(() => {
    setToastFunction(({ title, description, variant = "default", action }) => {
      const id = Math.random().toString(36).substring(2, 9);
      addToast({ id, title, description, variant, action });
      return id;
    });
    
    // Clean up when component unmounts
    return () => setToastFunction(() => "");
  }, [addToast]);

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, removeAll }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = React.useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  const { addToast, removeToast, toasts, removeAll } = context;

  const toast = React.useCallback(
    ({ title, description, variant = "default", action }: Omit<ToasterToast, "id">) => {
      const id = Math.random().toString(36).substring(2, 9);
      addToast({ id, title, description, variant, action });
      return id;
    },
    [addToast]
  );

  return {
    toast,
    dismiss: removeToast,
    toasts,
    removeAll,
  };
};
