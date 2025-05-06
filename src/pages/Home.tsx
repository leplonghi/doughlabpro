
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Home: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gradient-to-b from-white via-white to-pizza-cream/20 py-8">
        <div className="container mx-auto px-4">
          <section className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome, {user?.user_metadata?.full_name || 'Baker'}!
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your journey to perfect dough starts here. Access all the tools you need to create artisan pizza and bread.
            </p>
          </section>

          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Calculator Card */}
            <Card className="shadow-lg hover:shadow-xl transition-all border-0">
              <CardHeader className="bg-black text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Calculator size={24} />
                  <span>Dough Calculator</span>
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Perfect your recipe with precision
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-6 text-gray-700">
                  Calculate exact measurements for any style of pizza or bread dough with our easy-to-use calculator.
                </p>
                <Button 
                  className="w-full bg-black hover:bg-black/80"
                  onClick={() => navigate('/calculator')}
                >
                  <Calculator className="mr-2" size={18} />
                  Open Calculator
                </Button>
              </CardContent>
            </Card>
            
            {/* Toppings Card */}
            <Card className="shadow-lg hover:shadow-xl transition-all border-0">
              <CardHeader className="bg-pizza text-white rounded-t-lg">
                <CardTitle>Toppings Guide</CardTitle>
                <CardDescription className="text-gray-200">
                  Explore flavor combinations
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-6 text-gray-700">
                  Discover the perfect topping combinations for different styles of pizza.
                </p>
                <Button 
                  className="w-full bg-pizza hover:bg-pizza/80"
                  onClick={() => navigate('/toppings')}
                >
                  Explore Toppings
                </Button>
              </CardContent>
            </Card>
            
            {/* Sauce Card */}
            <Card className="shadow-lg hover:shadow-xl transition-all border-0">
              <CardHeader className="bg-red-600 text-white rounded-t-lg">
                <CardTitle>Sauce Recipes</CardTitle>
                <CardDescription className="text-gray-200">
                  Master the base of great pizza
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="mb-6 text-gray-700">
                  Learn how to make authentic pizza sauces from classic marinara to white sauces.
                </p>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700"
                  onClick={() => navigate('/sauce')}
                >
                  View Recipes
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
