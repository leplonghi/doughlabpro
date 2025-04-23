
import * as React from 'react';
import { ShoppingCart, Lightbulb, Utensils, Menu as MenuIcon } from 'lucide-react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTranslation } from 'react-i18next';

const Navigation: React.FC = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();

  const NavItems = () => (
    <NavigationMenuList className={cn(
      "flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-1 w-full",
      isMobile ? "items-start" : "items-center justify-center"
    )}>
      <NavigationMenuItem>
        <NavigationMenuLink
          className={cn(
            "group inline-flex h-10 w-full md:w-max items-center justify-start md:justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
            isMobile ? "gap-3" : "gap-2"
          )}
          href="/shop"
        >
          <ShoppingCart className={cn("h-5 w-5", isMobile ? "mr-2" : "")} />
          <span className={isMobile ? "flex-1" : ""}>{t('common.menu.shop')}</span>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          className={cn(
            "group inline-flex h-10 w-full md:w-max items-center justify-start md:justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
            isMobile ? "gap-3" : "gap-2"
          )}
          href="/toppings"
        >
          <Utensils className={cn("h-5 w-5", isMobile ? "mr-2" : "")} />
          <span className={isMobile ? "flex-1" : ""}>{t('common.menu.toppings')}</span>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          className={cn(
            "group inline-flex h-10 w-full md:w-max items-center justify-start md:justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50",
            isMobile ? "gap-3" : "gap-2"
          )}
          href="/tips"
        >
          <Lightbulb className={cn("h-5 w-5", isMobile ? "mr-2" : "")} />
          <span className={isMobile ? "flex-1" : ""}>{t('common.menu.tips')}</span>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b z-50">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        {isMobile ? (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">{t('common.toggleMenu')}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] max-w-sm pt-10">
              <NavigationMenu className="w-full">
                <NavItems />
              </NavigationMenu>
            </SheetContent>
          </Sheet>
        ) : null}
        <NavigationMenu className={cn("w-full", isMobile ? "hidden md:block" : "")}>
          <NavItems />
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default Navigation;
