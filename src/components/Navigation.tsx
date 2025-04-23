import React, { useState } from 'react';
import { ShoppingCart, Lightbulb, Calendar, Utensils, Pizza, Menu } from 'lucide-react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navigation: React.FC = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const NavItems = () => (
    <NavigationMenuList className={cn(
      "flex-col space-y-2 md:flex-row md:space-y-0",
      isMobile ? "w-full" : ""
    )}>
      <NavigationMenuItem>
        <NavigationMenuLink
          className={cn(
            "group inline-flex h-10 w-full items-center justify-start rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
          )}
          href="/shop"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Shop
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          className={cn(
            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
          )}
          href="/sauce"
        >
          <Utensils className="mr-2 h-4 w-4" />
          Sauce
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          className={cn(
            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
          )}
          href="/toppings"
        >
          <Pizza className="mr-2 h-4 w-4" />
          Toppings
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          className={cn(
            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
          )}
          href="/tips"
        >
          <Lightbulb className="mr-2 h-4 w-4" />
          Tips
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          className={cn(
            "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
          )}
          href="/plans"
        >
          <Calendar className="mr-2 h-4 w-4" />
          Plans
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  );

  return (
    <nav className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {isMobile ? (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] max-w-sm pt-10">
              <NavigationMenu className="w-full">
                <NavItems />
              </NavigationMenu>
            </SheetContent>
          </Sheet>
        ) : (
          <NavigationMenu>
            <NavItems />
          </NavigationMenu>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
