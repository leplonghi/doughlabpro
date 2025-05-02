
import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import AdBanner from '@/components/monetization/AdBanner';
import { useDoughGuide } from '@/context/DoughGuideContext';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const School: React.FC = () => {
  const { openChat, addMessage } = useDoughGuide();
  
  const lessons = [
    {
      title: "What is Hydration?",
      icon: "💧",
      description: "Learn about water-to-flour ratios and how they affect your dough's texture and flavor.",
      askQuestion: "Can you explain dough hydration?"
    },
    {
      title: "Poolish vs Biga",
      icon: "🧪",
      description: "Understand the differences between these two preferments and when to use them.",
      askQuestion: "What's the difference between poolish and biga?"
    },
    {
      title: "Mixing vs Kneading",
      icon: "🔄",
      description: "Learn the techniques for proper dough development and gluten formation.",
      askQuestion: "How is mixing different from kneading?"
    },
    {
      title: "How to Bake with No Scale",
      icon: "⚖️",
      description: "Master volume measurements when you don't have a kitchen scale.",
      askQuestion: "How can I bake bread without a scale?"
    },
    {
      title: "Understanding Fermentation",
      icon: "⏱️",
      description: "The science of fermentation and how time and temperature affect your dough.",
      askQuestion: "How does fermentation work in bread?"
    },
    {
      title: "Choosing the Right Flour",
      icon: "🌾",
      description: "Learn about different types of flour and their protein content.",
      askQuestion: "What flour should I use for pizza dough?"
    },
    {
      title: "Shaping Techniques",
      icon: "👐",
      description: "Master the art of shaping different types of bread and pizza.",
      askQuestion: "How do I shape a pizza without tearing?"
    },
    {
      title: "Baking Temperature Guide",
      icon: "🔥",
      description: "Optimal temperatures for different dough styles and baking equipment.",
      askQuestion: "What temperature should I bake bread at?"
    }
  ];
  
  const handleAskQuestion = (question: string) => {
    openChat();
    addMessage(question, 'user');
  };
  
  return (
    <PageLayout>
      <div className="container mx-auto px-4 py-8">
        <AdBanner />
        
        <div className="max-w-5xl mx-auto mt-8">
          <h1 className="text-3xl font-bold mb-2">Dough School</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Master the fundamentals of dough with these bite-sized lessons
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {lessons.map((lesson, index) => (
              <Card key={index} className="border hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{lesson.icon}</div>
                  <h3 className="text-xl font-medium mb-2">{lesson.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{lesson.description}</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full flex items-center justify-center"
                    onClick={() => handleAskQuestion(lesson.askQuestion)}
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Ask DoughGuide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-amber-50 p-6 rounded-lg border border-amber-100">
            <h2 className="text-xl font-medium mb-4">Have a specific baking question?</h2>
            <p className="mb-4">
              Our DoughGuide AI assistant can help with any baking questions you might have. 
              Click the assistant icon in the bottom right corner!
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default School;
