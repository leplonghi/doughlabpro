
import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';

// Define types for our context
type Message = {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
};

type DoughGuideContextType = {
  messages: Message[];
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleChat: () => void;
  addMessage: (content: string, sender: 'user' | 'assistant') => void;
  clearMessages: () => void;
  isLoading: boolean;
};

// Create the context with default values
const DoughGuideContext = createContext<DoughGuideContextType>({
  messages: [],
  isOpen: false,
  openChat: () => {},
  closeChat: () => {},
  toggleChat: () => {},
  addMessage: () => {},
  clearMessages: () => {},
  isLoading: false,
});

// Helper function to generate unique IDs
const generateId = () => Math.random().toString(36).substring(2, 9);

// Provider component
export const DoughGuideProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openChat = useCallback(() => setIsOpen(true), []);
  const closeChat = useCallback(() => setIsOpen(false), []);
  const toggleChat = useCallback(() => setIsOpen(prev => !prev), []);

  // Create a separate function to add a message
  const addUserMessage = useCallback((content: string, sender: 'user' | 'assistant') => {
    setMessages(prev => [
      ...prev,
      {
        id: generateId(),
        content,
        sender,
        timestamp: new Date(),
      },
    ]);
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  // Mock assistant response - in a real app, this would call an API
  const handleUserMessage = useCallback((content: string) => {
    addUserMessage(content, 'user');
    setIsLoading(true);

    // Simulate API delay
    setTimeout(() => {
      addUserMessage("I'm Doughy, your baking assistant! I can help with recipes, techniques, and baking questions.", 'assistant');
      setIsLoading(false);
    }, 1000);
  }, [addUserMessage]);

  const contextValue = {
    messages,
    isOpen,
    openChat,
    closeChat,
    toggleChat,
    addMessage: handleUserMessage,
    clearMessages,
    isLoading
  };

  return (
    <DoughGuideContext.Provider value={contextValue}>
      {children}
    </DoughGuideContext.Provider>
  );
};

// Custom hook to use the DoughGuide context
export const useDoughGuide = () => useContext(DoughGuideContext);
