
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ChevronLeft, ChevronRight, Lock, Plus, Tag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/components/ui/use-toast';
import ProButton from '@/components/usage/ProButton';

// Types
interface SauceRecipe {
  id: string;
  name: string;
  description: string;
  types: string[];
  ingredients: string[];
  instructions: string;
  idealFor: string;
  image?: string;
  yieldPerPizza: number;
}

interface SauceCategory {
  id: string;
  name: string;
  icon?: React.ReactNode;
  sauces: SauceRecipe[];
}

const Sauce: React.FC = () => {
  // State for the sauce calculator
  const [pizzaCount, setPizzaCount] = React.useState<number>(4);
  const [pizzaStyle, setPizzaStyle] = React.useState<string>("neapolitan");
  const { toast } = useToast();

  // Sauce data
  const sauceCategories: SauceCategory[] = [
    {
      id: "tomato-based",
      name: "Tomato-Based Sauces",
      sauces: [
        {
          id: "neapolitan",
          name: "Neapolitan Raw Tomato Sauce",
          description: "The classic no-cook sauce for authentic Neapolitan pizzas",
          types: ["Tomato", "No Cook"],
          ingredients: [
            "28 oz San Marzano tomatoes",
            "1 tsp sea salt",
            "4–6 basil leaves",
            "1 tbsp olive oil"
          ],
          instructions: "Hand-crush tomatoes, mix in salt and basil, add olive oil just before use, do not cook.",
          idealFor: "Neapolitan, high-temp pizzas",
          image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
          yieldPerPizza: 90
        },
        {
          id: "new-york",
          name: "New York-Style Cooked Tomato Sauce",
          description: "A rich, slow-cooked sauce perfect for classic New York pies",
          types: ["Tomato", "Cooked", "Classic"],
          ingredients: [
            "28 oz whole peeled tomatoes",
            "1 tbsp olive oil",
            "1 tbsp butter",
            "2 garlic cloves",
            "1 onion, diced",
            "Fresh basil",
            "1 tsp sugar",
            "Salt & oregano to taste"
          ],
          instructions: "Blend tomatoes, sauté aromatics, add tomatoes and simmer for 45 minutes.",
          idealFor: "Home ovens, New York & Sicilian styles",
          image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
          yieldPerPizza: 120
        },
        {
          id: "chicago",
          name: "Chicago Deep Dish Sauce",
          description: "A chunky, flavorful sauce that sits on top of Chicago deep dish pizza",
          types: ["Tomato", "Cooked", "Chunky"],
          ingredients: [
            "28 oz crushed tomatoes",
            "2 tbsp olive oil",
            "4 garlic cloves, minced",
            "2 tsp dried oregano",
            "1 tsp sugar",
            "Salt to taste"
          ],
          instructions: "Sauté garlic and spices, add tomatoes and simmer 30 min.",
          idealFor: "Layered deep-dish pies",
          image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
          yieldPerPizza: 200
        }
      ]
    },
    {
      id: "white-sauces",
      name: "White Sauces",
      sauces: [
        {
          id: "white-garlic",
          name: "White Garlic Parmesan",
          description: "A rich and creamy base for white pizza variations",
          types: ["White", "Cooked", "Creamy"],
          ingredients: [
            "1.5 tbsp butter",
            "2 tbsp flour",
            "3/4 cup milk",
            "1/2 cup Parmesan",
            "Salt to taste"
          ],
          instructions: "Make a roux, whisk in milk, add Parmesan, and stir until thick.",
          idealFor: "White pizza, focaccia, chicken-based",
          image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
          yieldPerPizza: 100
        }
      ]
    },
    {
      id: "alternative",
      name: "Alternative Sauces",
      sauces: [
        {
          id: "pesto",
          name: "Basil Pesto",
          description: "Fresh and herbal pesto sauce that pairs perfectly with lighter toppings",
          types: ["No Cook", "Pesto", "Herb"],
          ingredients: [
            "1 cup fresh basil leaves",
            "1/4 cup pine nuts",
            "1/2 cup olive oil",
            "1/4 cup grated Parmesan",
            "2 garlic cloves",
            "Salt to taste"
          ],
          instructions: "Blend all ingredients into a smooth paste.",
          idealFor: "Caprese, vegetarian pizzas",
          image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
          yieldPerPizza: 70
        },
        {
          id: "calabrian",
          name: "Spicy Calabrian Sauce",
          description: "A fiery sauce with authentic Italian heat from Calabrian chilies",
          types: ["Spicy", "Tomato", "Cooked"],
          ingredients: [
            "1 cup tomato sauce",
            "2-3 tbsp Calabrian chili paste",
            "2 garlic cloves, minced",
            "1 tbsp olive oil",
            "Salt to taste"
          ],
          instructions: "Simmer tomato base with chili paste and garlic",
          idealFor: "Heat lovers, meat pizzas",
          image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
          yieldPerPizza: 100
        }
      ]
    }
  ];

  // Get yield per pizza based on selected style
  const getYieldPerPizza = (): number => {
    switch (pizzaStyle) {
      case "neapolitan":
        return 90;
      case "new-york":
        return 120;
      case "chicago":
        return 200;
      case "sicilian":
        return 150;
      default:
        return 100;
    }
  };

  const calculateTotalSauce = (): number => {
    return getYieldPerPizza() * pizzaCount;
  };

  const handleProFeatureClick = () => {
    toast({
      title: "PRO Feature",
      description: "This feature is only available to PRO users.",
      variant: "default"
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-pizza-cream/30">
      <Header />
      
      <main className="flex-grow py-6 md:py-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="mb-12 text-center md:text-left">
            <div className="max-w-4xl mx-auto md:mx-0">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Discover the Perfect Sauce</h1>
              <p className="text-lg text-gray-700 mb-6">
                From tomato bases to white sauces and pesto, this collection helps you craft the perfect base for any pizza or dough style.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Button variant="outline" className="border-amber-400 bg-amber-50 gap-2" onClick={handleProFeatureClick}>
                  <Plus size={18} />
                  <span>Create Custom Sauce</span>
                  <Badge variant="secondary" className="ml-2 bg-amber-100">Coming Soon</Badge>
                </Button>
              </div>
            </div>
          </section>
          
          {/* Sauce Calculator */}
          <section className="mb-12 bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-2xl font-bold mb-4">How Much Sauce Do I Need?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="pizza-count" className="block text-sm font-medium mb-1">Number of Pizzas</label>
                  <Input 
                    id="pizza-count"
                    type="number" 
                    min={1}
                    value={pizzaCount}
                    onChange={(e) => setPizzaCount(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="pizza-style" className="block text-sm font-medium mb-1">Pizza Style</label>
                  <Select value={pizzaStyle} onValueChange={setPizzaStyle}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a pizza style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="neapolitan">Neapolitan</SelectItem>
                      <SelectItem value="new-york">New York</SelectItem>
                      <SelectItem value="chicago">Chicago Deep Dish</SelectItem>
                      <SelectItem value="sicilian">Sicilian</SelectItem>
                      <SelectItem value="custom">Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col justify-center bg-gray-50 p-6 rounded-lg">
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-500 mb-1">Recommended Total Sauce</p>
                  <div className="text-4xl font-bold">{calculateTotalSauce()}g</div>
                  <p className="text-sm text-gray-500 mt-2">Based on {getYieldPerPizza()}g per pizza</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Sauce Categories */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Sauce Categories</h2>
              <div className="hidden md:flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleProFeatureClick}>
                  <Tag className="mr-2 h-4 w-4" />
                  Filter
                </Button>
              </div>
            </div>
            
            {/* Filter Tabs - Mobile only */}
            <div className="md:hidden mb-6">
              <Tabs defaultValue="all">
                <TabsList className="w-full">
                  <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
                  <TabsTrigger value="tomato" className="flex-1">Tomato</TabsTrigger>
                  <TabsTrigger value="white" className="flex-1">White</TabsTrigger>
                  <TabsTrigger value="alternative" className="flex-1">Other</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            {/* Sauce Categories */}
            {sauceCategories.map((category) => (
              <div key={category.id} className="mb-12">
                <h3 className="text-2xl font-bold mb-4">{category.name}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.sauces.map((sauce) => (
                    <Dialog key={sauce.id}>
                      <DialogTrigger asChild>
                        <Card className="cursor-pointer hover:shadow-md transition-shadow">
                          <CardHeader className="pb-2">
                            <div className="flex flex-wrap gap-2 mb-2">
                              {sauce.types.map((type) => (
                                <Badge key={type} variant="secondary" className="bg-gray-100">
                                  {type}
                                </Badge>
                              ))}
                            </div>
                            <CardTitle>{sauce.name}</CardTitle>
                            <CardDescription>{sauce.description}</CardDescription>
                          </CardHeader>
                          {sauce.image && (
                            <div className="px-6 pb-2">
                              <div 
                                className="w-full h-36 rounded-lg bg-center bg-cover" 
                                style={{ backgroundImage: `url(${sauce.image})` }}
                              />
                            </div>
                          )}
                          <CardFooter className="pt-2 pb-4">
                            <div className="text-sm text-muted-foreground">
                              Yield: {sauce.yieldPerPizza}g per pizza
                            </div>
                          </CardFooter>
                        </Card>
                      </DialogTrigger>
                      
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>{sauce.name}</DialogTitle>
                          <DialogDescription>
                            {sauce.description}
                          </DialogDescription>
                        </DialogHeader>
                        
                        <div className="space-y-4 my-2">
                          {sauce.image && (
                            <div 
                              className="w-full h-48 rounded-lg bg-center bg-cover" 
                              style={{ backgroundImage: `url(${sauce.image})` }}
                            />
                          )}
                          
                          <div>
                            <h4 className="font-semibold mb-1">Ingredients</h4>
                            <ul className="list-disc list-inside space-y-1 text-sm">
                              {sauce.ingredients.map((ingredient, idx) => (
                                <li key={idx}>{ingredient}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-1">Instructions</h4>
                            <p className="text-sm">{sauce.instructions}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-1">Ideal For</h4>
                            <p className="text-sm">{sauce.idealFor}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-1">Yield</h4>
                            <p className="text-sm">{sauce.yieldPerPizza}g per pizza</p>
                          </div>
                        </div>
                        
                        <div className="flex gap-2 justify-between mt-4">
                          <Button variant="outline" onClick={handlePrint}>Print Recipe</Button>
                          <Button onClick={handleProFeatureClick}>
                            <Lock className="mr-2 h-4 w-4" />
                            Save Recipe
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
                
                <div className="text-center text-sm text-muted-foreground mt-2 mb-10">
                  Purchases via these links help support DoughLab Pro. Thank you!
                </div>
              </div>
            ))}
          </section>
          
          {/* Navigation Footer */}
          <Separator className="my-8" />
          
          <div className="flex flex-wrap justify-between items-center gap-4 mt-8">
            <Button variant="outline" asChild>
              <Link to="/calculator">
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Dough Calculator
              </Link>
            </Button>
            
            <div className="flex gap-4">
              <Button variant="outline" onClick={handleProFeatureClick}>
                <Lock className="mr-2 h-4 w-4" />
                Save to My Recipes
              </Button>
              
              <Button variant="outline" onClick={handlePrint}>
                Print
              </Button>
              
              <div className="hidden md:block">
                <ProButton />
              </div>
            </div>
            
            <Button variant="default" asChild>
              <Link to="/toppings">
                Explore Toppings
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sauce;
