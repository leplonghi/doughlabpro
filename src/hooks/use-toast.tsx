
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

type ToastActionType = 
  | { type: "ADD_TOAST"; toast: ToasterToast }
  | { type: "REMOVE_TOAST"; toastId: string }
  | { type: "REMOVE_ALL_TOASTS" };

const toastReducer = (state: ToasterToast[], action: ToastActionType): ToasterToast[] => {
  switch (action.type) {
    case "ADD_TOAST":
      return state.length >= TOAST_LIMIT 
        ? [...state.slice(1), action.toast]
        : [...state, action.toast];
    case "REMOVE_TOAST":
      return state.filter(t => t.id !== action.toastId);
    case "REMOVE_ALL_TOASTS":
      return [];
  }
};

// Create context for toast state
type ToastContextType = {
  toasts: ToasterToast[];
  addToast: (toast: ToasterToast) => void;
  removeToast: (id: string) => void;
  removeAll: () => void;
};

const ToastContext = React.createContext<ToastContextType | undefined>(undefined);

// Create a singleton variable to store the dispatch function
let toastDispatch: React.Dispatch<ToastActionType> | undefined;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, dispatch] = React.useReducer(toastReducer, []);

  // Store dispatch function in module scope for standalone toast function
  React.useEffect(() => {
    toastDispatch = dispatch;
    return () => {
      toastDispatch = undefined;
    };
  }, []);

  const addToast = React.useCallback((toast: ToasterToast) => {
    dispatch({ type: "ADD_TOAST", toast });
  }, []);

  const removeToast = React.useCallback((id: string) => {
    dispatch({ type: "REMOVE_TOAST", toastId: id });
  }, []);

  const removeAll = React.useCallback(() => {
    dispatch({ type: "REMOVE_ALL_TOASTS" });
  }, []);

  const contextValue = React.useMemo(
    () => ({ toasts, addToast, removeToast, removeAll }),
    [toasts, addToast, removeToast, removeAll]
  );

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
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
}

// Standalone toast function that doesn't rely on React hooks
export const toast = ({ title, description, variant = "default", action }: Omit<ToasterToast, "id">) => {
  const id = Math.random().toString(36).substring(2, 9);
  
  if (toastDispatch) {
    toastDispatch({ 
      type: "ADD_TOAST", 
      toast: { id, title, description, variant, action } 
    });
  } else {
    console.warn("Toast was called outside of ToastProvider context");
  }
  
  return id;
};
