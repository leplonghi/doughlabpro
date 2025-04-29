
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation(); // This will throw an error if used outside Router
  
  // Early return null if not inside Router context
  // This is a safety check and shouldn't be needed if we fix the rendering order
  try {
    // Just accessing useLocation is enough to check if we're in a Router context
    useLocation();
  } catch (error) {
    console.error("Footer rendered outside Router context");
    return null;
  }
  
  return (
    <footer className="bg-secondary border-t border-border mt-auto py-[9px]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} DoughLab Pro. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
