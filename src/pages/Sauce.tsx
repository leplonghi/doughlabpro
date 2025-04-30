
import * as React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PizzaStyle } from '@/components/PizzaStyleSelect';
import SauceRecipe from '@/components/sauce/SauceRecipe';
import SauceCalculator from '@/components/sauce/SauceCalculator';

const Sauce: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [pizzaStyle, setPizzaStyle] = React.useState<PizzaStyle>('napoletana');
  const [numberOfBalls, setNumberOfBalls] = React.useState<number>(4);

  // Check if we received state from previous page
  React.useEffect(() => {
    if (location.state?.pizzaStyle) {
      setPizzaStyle(location.state.pizzaStyle);
    }
    if (location.state?.numberOfBalls) {
      setNumberOfBalls(location.state.numberOfBalls);
    }
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-pizza-cream/30">
      <Header />
      
      <main className="flex-grow py-4 md:py-8">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-4xl font-serif font-bold mb-2">Sauce Builder</h1>
            <p className="text-gray-600 mb-6">Perfect your pizza sauce based on your dough style</p>
            
            {/* Navigation Progress Indicator */}
            <div className="mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span>Dough</span>
                <span className="font-medium">Sauce</span>
                <span>Toppings</span>
              </div>
              <Progress value={66} className="h-2" />
            </div>

            {/* Sauce Recipe Card */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>
                  {pizzaStyle === 'napoletana' ? 'Neapolitan Pizza Sauce' : 
                   pizzaStyle === 'newyork' ? 'New York-Style Pizza Sauce' :
                   pizzaStyle === 'focaccia' ? 'White Pizza Sauce' :
                   pizzaStyle === 'brioche' ? 'White Pizza Sauce' :
                   pizzaStyle === 'baguette' ? 'White Pizza Sauce' :
                   'Classic Pizza Sauce'}
                </CardTitle>
                <CardDescription>
                  Recipe selected for your {pizzaStyle === 'napoletana' ? 'Neapolitan' : 
                   pizzaStyle === 'newyork' ? 'New York-Style' :
                   pizzaStyle === 'focaccia' ? 'Focaccia' :
                   pizzaStyle === 'brioche' ? 'Brioche' :
                   pizzaStyle === 'baguette' ? 'Baguette' :
                   'Classic'} dough
                </CardDescription>
              </CardHeader>
              <CardContent>
                <SauceRecipe pizzaStyle={pizzaStyle} />
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
                  pizzaStyle={pizzaStyle} 
                  initialNumberOfBalls={numberOfBalls} 
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
                onClick={() => navigate('/toppings', { state: { pizzaStyle, numberOfBalls } })}
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
