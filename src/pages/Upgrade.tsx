
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Loader2 } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

const PricingTier = ({ 
  title, 
  price, 
  description, 
  features, 
  buttonText, 
  active = false,
  loading = false,
  onClick 
}: { 
  title: string; 
  price: string; 
  description: string; 
  features: string[]; 
  buttonText: string;
  active?: boolean;
  loading?: boolean;
  onClick: () => void;
}) => (
  <Card className={`flex flex-col border-2 ${active ? 'border-amber-500' : 'border-border'}`}>
    {active && (
      <div className="bg-amber-500 text-white text-center text-sm font-medium py-1">
        Your Current Plan
      </div>
    )}
    <CardHeader>
      <CardTitle className="text-xl">{title}</CardTitle>
      <div className="mt-2">
        <span className="text-3xl font-bold">{price}</span>
        {price !== 'Free' && <span className="text-muted-foreground ml-1">/month</span>}
      </div>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="text-green-500 shrink-0 h-5 w-5 mr-2 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button 
        onClick={onClick}
        disabled={active || loading}
        className="w-full"
        variant={active ? "outline" : "default"}
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : active ? (
          "Current Plan"
        ) : (
          buttonText
        )}
      </Button>
    </CardFooter>
  </Card>
);

const Upgrade: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const isPro = false; // Hardcoded for now since we removed localization

  // If not logged in, redirect to auth page
  React.useEffect(() => {
    if (!user) {
      navigate('/auth');
    }
  }, [user, navigate]);

  const handleFreePlanSelect = () => {
    // For now, just navigate back to calculator
    navigate('/calculator');
  };

  const handleProPlanSelect = () => {
    setLoading(true);
    // This is a placeholder for Stripe integration
    // We'll implement this when we add Stripe
    setTimeout(() => {
      setLoading(false);
      alert("Pro subscription feature will be implemented with Stripe integration");
    }, 1000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-10 px-4 bg-gradient-to-br from-white to-pizza-cream/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2">Upgrade Your Pizza Experience</h1>
            <p className="text-muted-foreground">
              Choose the plan that best fits your dough-making needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <PricingTier
              title="Free"
              price="Free"
              description="Basic dough calculations and recipes"
              features={[
                "Basic dough calculator",
                "Standard pizza styles",
                "Limited calculations per day",
                "Basic recipe storage"
              ]}
              buttonText="Continue with Free"
              active={!isPro}
              onClick={handleFreePlanSelect}
            />
            
            <PricingTier
              title="Pro"
              price="$4.99"
              description="Advanced features for pizza enthusiasts"
              features={[
                "Unlimited dough calculations",
                "Advanced pizza styles",
                "Custom recipe creation",
                "Sauce & topping recommendations",
                "No ads"
              ]}
              buttonText="Upgrade to Pro"
              active={isPro}
              loading={loading}
              onClick={handleProPlanSelect}
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Upgrade;
