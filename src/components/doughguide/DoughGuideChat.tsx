
import React, { useState, useRef, useEffect } from 'react';
import { useDoughGuide } from '@/context/DoughGuideContext';
import { X, Send, ChefHat, Loader } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';

const DoughGuideChat: React.FC = () => {
  const { messages, isOpen, toggleChat, closeChat, addMessage, isLoading } = useDoughGuide();
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() !== '') {
      addMessage(input, 'user');
      setInput('');
    }
  };

  // If the chat is not open, just show the chat bubble
  if (!isOpen) {
    return (
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 z-50 shadow-lg bg-amber-500 hover:bg-amber-600 flex items-center justify-center"
      >
        <ChefHat className="h-6 w-6 text-white" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-[350px] h-[450px] z-50 shadow-xl flex flex-col bg-white rounded-lg border-amber-200">
      <CardHeader className="bg-amber-50 py-2 px-4 border-b border-amber-100 flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-medium flex items-center">
          <ChefHat className="h-5 w-5 mr-2 text-amber-600" />
          Doughy
        </CardTitle>
        <Button variant="ghost" size="sm" onClick={closeChat} className="h-8 w-8 p-0">
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      
      <CardContent className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="text-center text-muted-foreground h-full flex flex-col items-center justify-center">
            <ChefHat className="h-12 w-12 mb-3 text-amber-300" />
            <p className="text-sm">Hi! I'm Doughy, your baking assistant.</p>
            <p className="text-sm">How can I help you today?</p>
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`${
                msg.sender === 'assistant'
                  ? 'bg-amber-50 text-gray-800 rounded-tr-lg rounded-br-lg rounded-bl-lg'
                  : 'bg-amber-500 text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg ml-auto'
              } p-3 max-w-[80%] break-words`}
            >
              {msg.content}
            </div>
          ))
        )}
        {isLoading && (
          <div className="bg-amber-50 text-gray-800 rounded-tr-lg rounded-br-lg rounded-bl-lg p-3 animate-pulse flex items-center space-x-2">
            <Loader className="h-4 w-4 animate-spin" />
            <span>Thinking...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </CardContent>
      
      <CardFooter className="p-3 border-t">
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about recipes, techniques..."
            className="flex-grow"
            disabled={isLoading}
          />
          <Button 
            type="submit" 
            size="icon" 
            disabled={input.trim() === '' || isLoading}
            className="bg-amber-500 hover:bg-amber-600"
          >
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};

export default DoughGuideChat;
