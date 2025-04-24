
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-grow py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="border-border/50 shadow-sm rounded-xl overflow-hidden">
            <CardHeader className="border-b border-border/50 bg-primary/5 pb-6">
              <CardTitle className="text-2xl font-semibold text-center">Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm md:prose-base dark:prose-invert p-6 md:p-8">
              <h2 className="text-xl font-semibold mt-0">1. Introduction</h2>
              <p className="text-foreground/80">Welcome to the Pizza Dough Calculator App ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data.</p>
              
              <h2 className="text-xl font-semibold mt-6">2. Data We Collect</h2>
              <p className="text-foreground/80">We collect minimal information required to provide our services:</p>
              <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                <li>Account information (email, name) if you create an account</li>
                <li>Recipe data if you save recipes</li>
                <li>Usage statistics to improve our application</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6">3. How We Use Your Data</h2>
              <p className="text-foreground/80">We use your data to:</p>
              <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                <li>Provide and maintain our services</li>
                <li>Save your recipes when requested</li>
                <li>Improve and personalize your experience</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6">4. Data Security</h2>
              <p className="text-foreground/80">We implement appropriate security measures to protect your personal data.</p>
              
              <h2 className="text-xl font-semibold mt-6">5. Your Rights </h2>
              <p className="text-foreground/80">You have the right to:</p>
              <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                <li>Access your personal data</li>
                <li>Request correction or deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6">6. Cookies</h2>
              <p className="text-foreground/80">We use cookies to enhance your experience and analyze our traffic.</p>
              
              <h2 className="text-xl font-semibold mt-6">7. Third-Party Services</h2>
              <p className="text-foreground/80">We may use third-party services such as Google Analytics and advertising services.</p>
              
              <h2 className="text-xl font-semibold mt-6">8. Changes to This Policy</h2>
              <p className="text-foreground/80">We may update this policy periodically. Please check back for updates.</p>
              
              <h2 className="text-xl font-semibold mt-6">9. Contact Us</h2>
              <p className="text-foreground/80">If you have questions about this Privacy Policy, please contact us at privacy@doughlabpro.app</p>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
