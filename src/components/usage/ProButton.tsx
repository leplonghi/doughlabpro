import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
const ProButton: React.FC = () => {
  return <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="border-amber-400 text-gray-950 bg-orange-500 hover:bg-orange-400 py-0 px-[5px] rounded-xl mx-0">
          <span className="mr-1">Upgrade to</span> 
          <Badge className="text-black bg-orange-200">PRO</Badge>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Upgrade to DoughLab Pro</DialogTitle>
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
          <Button type="button" className="w-full bg-amber-500 hover:bg-amber-600 text-white">
            Subscribe Now - $4.99/month
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>;
};
export default ProButton;