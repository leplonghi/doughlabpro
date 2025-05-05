
import React, { createContext, useState, useContext, ReactNode, useCallback } from 'react';
import { supabase } from '@/lib/supabase';

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

  // Function to call our ChatGPT edge function
  const callChatGPT = useCallback(async (userMessage: string, previousMessages: Message[]) => {
    try {
      // Format the messages for the API
      const formattedMessages = previousMessages.map((msg) => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.content
      }));
      
      // Add the new user message
      formattedMessages.push({ role: 'user', content: userMessage });
      
      // Call the edge function
      const { data, error } = await supabase.functions.invoke('connect-chatgpt-to-lovable', {
        body: { messages: formattedMessages }
      });
      
      if (error) {
        console.error('Error calling ChatGPT:', error);
        return "I'm sorry, I'm having trouble connecting to my knowledge base right now. Please try again later.";
      }
      
      return data.message || "I'm Doughy, your baking assistant. How can I help you today?";
    } catch (error) {
      console.error('Error in ChatGPT call:', error);
      return "I'm sorry, something went wrong. Please try again later.";
    }
  }, []);

  // Handle user messages - now with real ChatGPT connection
  const handleUserMessage = useCallback(async (content: string) => {
    // Add user message immediately
    addUserMessage(content, 'user');
    setIsLoading(true);
    
    try {
      // Get the response from ChatGPT
      const response = await callChatGPT(content, messages);
      
      // Add the assistant's response
      addUserMessage(response, 'assistant');
    } catch (error) {
      console.error('Error handling message:', error);
      addUserMessage("I'm sorry, I encountered an error. Please try again later.", 'assistant');
    } finally {
      setIsLoading(false);
    }
  }, [addUserMessage, callChatGPT, messages]);

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
