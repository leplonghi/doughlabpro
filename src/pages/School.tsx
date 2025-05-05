
import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import AdBanner from '@/components/monetization/AdBanner';
import { useDoughGuide } from '@/context/DoughGuideContext';
import { MessageCircle, ChevronDown, ChevronUp, ChefHat } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const School: React.FC = () => {
  const { openChat, addMessage } = useDoughGuide();
  const [expandedLessons, setExpandedLessons] = useState<number[]>([]);
  const [isIntroDialogOpen, setIsIntroDialogOpen] = useState(true);
  
  const toggleLesson = (index: number) => {
    setExpandedLessons(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index) 
        : [...prev, index]
    );
  };
  
  const handleAskQuestion = (question: string) => {
    openChat();
    addMessage(question, 'user');
  };
  
  const lessons = [
    {
      title: "What is Hydration?",
      icon: "💧",
      description: "Learn about water-to-flour ratios and how they affect your dough's texture and flavor.",
      askQuestion: "Can you explain dough hydration?",
      content: "Hydration in bread and pizza dough refers to the amount of water relative to flour, expressed as a percentage. For example, a dough with 1000g of flour and 700g of water has 70% hydration. Higher hydration (70%+) produces airier, more open crumbs with larger holes, while lower hydration (50-65%) creates denser, chewier textures. Neapolitan pizza typically uses 55-65% hydration, while ciabatta and focaccia can reach 80-90%. Beginners should start with 65-70% hydration as very wet doughs are harder to handle."
    },
    {
      title: "Poolish vs Biga",
      icon: "🧪",
      description: "Understand the differences between these two preferments and when to use them.",
      askQuestion: "What's the difference between poolish and biga?",
      content: "Poolish and biga are both preferments used to enhance flavor and texture in bread and pizza dough, but they differ in hydration and results. Poolish is a wet preferment (100% hydration) made with equal weights of flour and water plus a small amount of yeast. It ferments faster (8-12 hours) and produces a more extensible dough with a mild, sweet flavor. Biga is drier (50-60% hydration) with more flour than water, ferments longer (16-24 hours), and creates a stronger, more elastic dough with complex flavors and better structure. Use poolish for airy texture and mild flavor, biga for chewiness and more complex taste."
    },
    {
      title: "Mixing vs Kneading",
      icon: "🔄",
      description: "Learn the techniques for proper dough development and gluten formation.",
      askQuestion: "How is mixing different from kneading?",
      content: "Mixing and kneading are different stages in dough development. Mixing combines ingredients until they're just incorporated with minimal gluten development. It's the initial stage where flour, water, salt, and yeast are combined into a shaggy mass. Kneading comes after mixing and develops the gluten network through mechanical action, aligning the gluten strands to create the elastic structure that traps gas bubbles. Different methods include traditional hand kneading, stretch and fold, slap and fold, or using stand mixers. Higher hydration doughs often need less intensive kneading and can develop through gentler folding techniques over time."
    },
    {
      title: "How to Bake with No Scale",
      icon: "⚖️",
      description: "Master volume measurements when you don't have a kitchen scale.",
      askQuestion: "How can I bake bread without a scale?",
      content: "While a scale is ideal for consistency, you can bake without one by using volume measurements. For all-purpose flour, 1 cup equals roughly 120-125g. For water, 1 cup is 240ml or 240g. Remember that 1 tablespoon of salt weighs about 17-20g, and 1 teaspoon of active dry yeast is approximately 3-4g. The flour cup measurement is most variable due to compaction, so use the 'spoon and level' method: fluff the flour, spoon it into the measuring cup, and level with a straight edge. For consistent results, maintain the same measuring technique each time and take notes on what works. Adjust hydration by feel—the dough should be tacky but not sticky."
    },
    {
      title: "Understanding Fermentation",
      icon: "⏱️",
      description: "The science of fermentation and how time and temperature affect your dough.",
      askQuestion: "How does fermentation work in bread?",
      content: "Fermentation is the biological process where yeast consumes sugars in flour and produces carbon dioxide (gas), alcohol, and acids. This process creates flavor and structure in your dough. There are two main phases: bulk fermentation (the first rise after mixing) and proofing (the final rise after shaping). Temperature dramatically affects fermentation speed—warmer temperatures accelerate it while cooler temperatures slow it down. As a rule of thumb, every 15°F (8°C) increase doubles the fermentation rate. The ideal temperature range is 75-78°F (24-26°C) for balanced development. Signs of proper fermentation include increased volume (30-50%), a more extensible texture, and a pleasant aroma. Proper fermentation impacts oven spring, texture, and flavor complexity."
    },
    {
      title: "Choosing the Right Flour",
      icon: "🌾",
      description: "Learn about different types of flour and their protein content.",
      askQuestion: "What flour should I use for pizza dough?",
      content: "The best flour for pizza depends on the style you're making. For Neapolitan pizza, use tipo '00' flour (12-14% protein) for its fine texture and elasticity at high temperatures. For New York-style, bread flour (12-14% protein) provides the needed structure and chew. All-purpose flour (10-12% protein) works for home ovens and thinner crusts. For Sicilian or pan pizzas, a mix of all-purpose with some bread flour gives the right balance. When making sourdough pizza, protein content becomes even more important—aim for 12-14%. Always check the protein content on the package, as it determines gluten development potential. Freshness matters too; flour loses quality after 6-12 months."
    },
    {
      title: "Shaping Techniques",
      icon: "👐",
      description: "Master the art of shaping different types of bread and pizza.",
      askQuestion: "How do I shape a pizza without tearing?",
      content: "To shape pizza dough without tearing, start with properly fermented dough at room temperature. First, gently press outward from the center using flat fingertips, leaving a small rim for the crust. For hand-stretching, lift the dough onto your knuckles, then rotate and stretch it using gravity, letting its weight create even thinning. Avoid pressing the delicate center. For stubborn dough that springs back, let it rest 5-10 minutes to relax the gluten. Never use a rolling pin for Neapolitan-style pizza as it removes valuable gas bubbles. If tears occur, pinch them closed immediately. The dough should be thin enough to see light through the center when held up, but never so thin it tears easily."
    },
    {
      title: "Baking Temperature Guide",
      icon: "🔥",
      description: "Optimal temperatures for different dough styles and baking equipment.",
      askQuestion: "What temperature should I bake bread at?",
      content: "Baking temperatures vary by bread type and equipment. Artisan breads with high hydration typically need high initial heat (450-500°F/230-260°C) to create steam and oven spring, then reduced to 425-450°F/220-230°C to finish baking. Enriched breads with eggs, butter, and sugar burn easily, so bake at 350-375°F/175-190°C. For pizza, Neapolitan style ideally needs 750-900°F/400-485°C (only achievable in specialized ovens), while home oven pizzas work well at 500-550°F/260-290°C on a preheated stone or steel. Most home bread loaves take 35-45 minutes to bake properly, while pizzas only need 6-15 minutes depending on temperature and thickness. Always preheat your baking surface thoroughly—at least 45-60 minutes for stones and steels."
    }
  ];
  
  return (
    <PageLayout>
      <Dialog open={isIntroDialogOpen} onOpenChange={setIsIntroDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <ChefHat className="h-6 w-6 mr-2 text-amber-600" />
              Meet Doughy, Your Baking Assistant!
            </DialogTitle>
            <DialogDescription>
              Welcome to Dough School! I'm Doughy, your personal baking assistant. 
              I'm here to answer all your baking questions and help you master the art of dough making.
              Feel free to ask me anything about recipes, techniques, or troubleshooting.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <Button onClick={() => {
              setIsIntroDialogOpen(false);
              openChat();
              addMessage("Hi Doughy! I'm excited to learn about baking!", 'user');
            }} className="bg-amber-500 hover:bg-amber-600">
              Start Chatting with Doughy
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="container mx-auto px-4 py-8">
        <AdBanner />
        
        <div className="max-w-5xl mx-auto mt-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold">Dough School</h1>
            <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={() => {
              openChat();
              addMessage("Tell me about today's baking lesson", 'user');
            }}>
              <ChefHat className="h-4 w-4" />
              Ask Doughy
            </Button>
          </div>
          <p className="text-lg text-muted-foreground mb-8">
            Master the fundamentals of dough with these bite-sized lessons and Doughy's expert help
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {lessons.map((lesson, index) => (
              <Card key={index} className="border hover:shadow-md transition-all">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{lesson.icon}</div>
                  <h3 className="text-xl font-medium mb-2">{lesson.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{lesson.description}</p>
                  
                  <div className="space-y-3">
                    <Button 
                      variant="secondary" 
                      size="sm" 
                      className="w-full flex items-center justify-center"
                      onClick={() => toggleLesson(index)}
                    >
                      {expandedLessons.includes(index) ? (
                        <>
                          Hide Lesson <ChevronUp className="h-4 w-4 ml-2" />
                        </>
                      ) : (
                        <>
                          Show Lesson <ChevronDown className="h-4 w-4 ml-2" />
                        </>
                      )}
                    </Button>
                    
                    {expandedLessons.includes(index) && (
                      <div className="mt-4 p-4 bg-amber-50 rounded-md text-sm">
                        {lesson.content}
                      </div>
                    )}
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full flex items-center justify-center"
                      onClick={() => handleAskQuestion(lesson.askQuestion)}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Ask Doughy
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 bg-amber-50 p-6 rounded-lg border border-amber-100">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <ChefHat className="h-8 w-8 text-amber-600" />
              </div>
              <div>
                <h2 className="text-xl font-medium mb-2">Have a specific baking question?</h2>
                <p className="mb-4">
                  I'm Doughy, your AI baking assistant. I can help with any baking questions you might have!
                  Click the assistant icon or the button below to chat with me.
                </p>
                <Button 
                  onClick={() => openChat()} 
                  className="bg-amber-500 hover:bg-amber-600"
                >
                  Chat with Doughy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default School;
