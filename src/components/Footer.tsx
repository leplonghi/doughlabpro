
import React from 'react';
import { Link } from 'react-router-dom';
import { Pizza } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Pizza className="h-5 w-5" />
              <span className="font-semibold text-lg">DoughLab Pro</span>
            </div>
            <p className="text-muted-foreground mb-4">Professional dough calculator for enthusiasts</p>
            <p className="text-muted-foreground text-sm">@doughlabpro</p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-muted-foreground hover:text-black transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-black transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-black transition-colors">Terms</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-muted-foreground mb-4">Subscribe for updates on new features and recipes.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email"
                className="border border-input rounded-md px-3 py-2 w-full focus:outline-none focus:ring-1 focus:ring-black"
              />
              <button 
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-black/80 transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4">
          <p className="text-muted-foreground text-sm">© 2025 DoughLab Pro. All rights reserved.</p>
          <p className="text-muted-foreground text-sm">Made with ♥ for pizza lovers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
