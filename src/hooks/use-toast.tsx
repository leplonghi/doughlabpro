
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

// Standalone toast function for usage outside components
export function toast(props: Omit<ToasterToast, "id">) {
  const id = Math.random().toString(36).substring(2, 9);
  
  // Get the dispatch function from the context
  const dispatch = toastDispatch;
  
  if (dispatch) {
    dispatch({
      type: "ADD_TOAST",
      toast: {
        ...props,
        id,
      },
    });
  }
  
  return id;
}

// Toast dispatch reference
let toastDispatch: React.Dispatch<{
  type: "ADD_TOAST" | "REMOVE_TOAST" | "REMOVE_ALL_TOASTS";
  toast?: ToasterToast;
  toastId?: string;
}> | null = null;

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [toasts, dispatch] = React.useReducer(
    (state: ToasterToast[], action: {
      type: "ADD_TOAST" | "REMOVE_TOAST" | "REMOVE_ALL_TOASTS";
      toast?: ToasterToast;
      toastId?: string;
    }) => {
      switch (action.type) {
        case "ADD_TOAST":
          if (!action.toast) return state;
          
          if (state.length >= TOAST_LIMIT) {
            return [...state.slice(1), action.toast];
          }
          return [...state, action.toast];
          
        case "REMOVE_TOAST":
          if (!action.toastId) return state;
          return state.filter(t => t.id !== action.toastId);
          
        case "REMOVE_ALL_TOASTS":
          return [];
      }
    },
    []
  );

  React.useEffect(() => {
    toastDispatch = dispatch;
    return () => {
      toastDispatch = null;
    };
  }, [dispatch]);

  const addToast = React.useCallback((toast: ToasterToast) => {
    dispatch({ type: "ADD_TOAST", toast });
  }, []);

  const removeToast = React.useCallback((id: string) => {
    dispatch({ type: "REMOVE_TOAST", toastId: id });
  }, []);

  const removeAll = React.useCallback(() => {
    dispatch({ type: "REMOVE_ALL_TOASTS" });
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
