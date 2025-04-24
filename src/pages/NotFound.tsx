
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Pizza } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
      <div className="text-center max-w-md">
        <div className="mx-auto bg-primary/10 p-4 rounded-full w-20 h-20 flex items-center justify-center mb-6">
          <Pizza className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-foreground">404</h1>
        <p className="text-xl text-foreground/70 mb-6">
          Oops! We couldn't find the page you're looking for
        </p>
        <Button asChild className="font-medium">
          <a href="/">Return to Home</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
