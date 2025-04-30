
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import SauceRecipe from '@/components/sauce/SauceRecipe';
import SauceCalculator from '@/components/sauce/SauceCalculator';
import { PizzaStyle } from '@/components/PizzaStyleSelect';

const Sauce: React.FC = () => {
  const navigate = useNavigate();
  const [selectedSauceType, setSelectedSauceType] = React.useState<PizzaStyle>('napoletana');
  const [numberOfPizzas, setNumberOfPizzas] = React.useState<number>(4);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-pizza-cream/30">
      <Header />
      
      <main className="flex-grow py-4 md:py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-serif font-bold mb-2">Sauce Builder</h1>
            <p className="text-gray-600 mb-6">Create the perfect sauce for your pizza</p>
            
            {/* Navigation Progress Indicator */}
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span>Dough</span>
                <span className="font-medium">Sauce</span>
                <span>Toppings</span>
              </div>
              <Progress value={66} className="h-2" />
            </div>

            {/* Sauce Type Selector */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Choose Your Sauce Type</CardTitle>
                <CardDescription>
                  Select the sauce that best complements your pizza
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                  <Button 
                    variant={selectedSauceType === 'napoletana' ? 'default' : 'outline'} 
                    className={`h-12 justify-center ${selectedSauceType === 'napoletana' ? '' : 'bg-white hover:bg-gray-50'}`}
                    onClick={() => setSelectedSauceType('napoletana')}
                  >
                    Neapolitan
                  </Button>
                  <Button 
                    variant={selectedSauceType === 'newyork' ? 'default' : 'outline'} 
                    className={`h-12 justify-center ${selectedSauceType === 'newyork' ? '' : 'bg-white hover:bg-gray-50'}`}
                    onClick={() => setSelectedSauceType('newyork')}
                  >
                    New York
                  </Button>
                  <Button 
                    variant={selectedSauceType === 'chicago' ? 'default' : 'outline'} 
                    className={`h-12 justify-center ${selectedSauceType === 'chicago' ? '' : 'bg-white hover:bg-gray-50'}`}
                    onClick={() => setSelectedSauceType('chicago')}
                  >
                    Chicago
                  </Button>
                  <Button 
                    variant={selectedSauceType === 'focaccia' ? 'default' : 'outline'} 
                    className={`h-12 justify-center ${selectedSauceType === 'focaccia' ? '' : 'bg-white hover:bg-gray-50'}`}
                    onClick={() => setSelectedSauceType('focaccia')}
                  >
                    White Sauce
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Sauce Recipe Card */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>
                  {selectedSauceType === 'napoletana' ? 'Neapolitan Pizza Sauce' : 
                   selectedSauceType === 'newyork' ? 'New York-Style Pizza Sauce' :
                   selectedSauceType === 'chicago' ? 'Chicago Deep-Dish Sauce' :
                   selectedSauceType === 'focaccia' ? 'White Pizza Sauce' :
                   'Classic Pizza Sauce'}
                </CardTitle>
                <CardDescription>
                  Recipe for {selectedSauceType === 'napoletana' ? 'Neapolitan' : 
                   selectedSauceType === 'newyork' ? 'New York-Style' :
                   selectedSauceType === 'chicago' ? 'Chicago Deep-Dish' :
                   selectedSauceType === 'focaccia' ? 'White Pizza' :
                   'Classic'} sauce
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SauceRecipe pizzaStyle={selectedSauceType} />
              </CardContent>
            </Card>
            
            {/* Sauce Quantity Calculator */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Sauce Calculator</CardTitle>
                <CardDescription>
                  Calculate the perfect amount of sauce for your pizzas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SauceCalculator 
                  pizzaStyle={selectedSauceType} 
                  initialNumberOfBalls={numberOfPizzas}
                  onNumberOfPizzasChange={setNumberOfPizzas}
                />
              </CardContent>
            </Card>
            
            {/* Navigation Buttons */}
            <div className="flex flex-wrap justify-between gap-4 mt-10">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => navigate('/calculator')}
              >
                <ArrowLeft size={18} />
                Back to Dough
              </Button>
              
              <Button 
                className="flex items-center gap-2 bg-pizza-light hover:bg-pizza-light/90 text-white"
                onClick={() => navigate('/toppings', { state: { numberOfPizzas } })}
              >
                Continue to Toppings
                <ArrowRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Sauce;
