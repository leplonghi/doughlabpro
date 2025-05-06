
import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const ProButton: React.FC = () => {
  const { user, isPro } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  // If user is already Pro, don't show the button
  if (isPro) {
    return null;
  }

  const handleClick = () => {
    if (!user) {
      // If not logged in, redirect to auth page first
      navigate('/auth');
    } else {
      // If logged in, open dialog or navigate to upgrade page
      setOpen(true);
    }
  };

  const handleUpgradeClick = () => {
    setOpen(false);
    navigate('/upgrade');
  };

  return <Dialog open={open} onOpenChange={setOpen}>
      <Button 
        variant="outline" 
        className="border-amber-400 text-gray-950 py-0 px-[5px] rounded-xl mx-0 bg-amber-500 hover:bg-amber-400"
        onClick={handleClick}
      >
        <span className="mr-1">Upgrade to</span> 
        <Badge className="text-black bg-orange-200">PRO</Badge>
      </Button>
      
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Subscribe to DoughLab Pro</DialogTitle>
          <DialogDescription>Unlock unlimited recipes, traditional and new types os sauces and toppings, and more with DoughLab Pro.</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 gap-3">
            <div className="flex items-start">
              <div className="mr-2 h-5 w-5 text-amber-500">✓</div>
              <p>Unlimited dough calculations</p>
            </div>
            <div className="flex items-start">
              <div className="mr-2 h-5 w-5 text-amber-500">✓</div>
              <p>Advanced fermentation methods</p>
            </div>
            <div className="flex items-start">
              <div className="mr-2 h-5 w-5 text-amber-500">✓</div>
              <p>Recipe saving and sharing</p>
            </div>
            <div className="flex items-start">
              <div className="mr-2 h-5 w-5 text-amber-500">✓</div>
              <p>No ads ever</p>
            </div>
          </div>
        </div>
        
        <DialogFooter>
          <Button 
            type="button" 
            className="w-full bg-amber-500 hover:bg-amber-600 text-white"
            onClick={handleUpgradeClick}
          >
            Subscribe Now - $3.99/month
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>;
};

export default ProButton;
