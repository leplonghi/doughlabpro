
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
const ToastContext = React.createContext<{
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

export const ToastProvider = ({
  children,
}: {
  children: React.ReactNode;
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

// Create toast instance for global usage
// We need to use a dynamic approach since hooks can only be used within components
let toastFn: (props: Omit<ToasterToast, "id">) => string;

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

export { ToastContext };
