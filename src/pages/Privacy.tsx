
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Privacy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-white to-pizza-cream/30">
      <Header />
      
      <main className="flex-grow py-4 md:py-8 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl">Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm md:prose-base">
              <h2>1. Introduction</h2>
              <p>Welcome to the Pizza Dough Calculator App ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data.</p>
              
              <h2>2. Data We Collect</h2>
              <p>We collect minimal information required to provide our services:</p>
              <ul>
                <li>Account information (email, name) if you create an account</li>
                <li>Recipe data if you save recipes</li>
                <li>Usage statistics to improve our application</li>
              </ul>
              
              <h2>3. How We Use Your Data</h2>
              <p>We use your data to:</p>
              <ul>
                <li>Provide and maintain our services</li>
                <li>Save your recipes when requested</li>
                <li>Improve and personalize your experience</li>
              </ul>
              
              <h2>4. Data Security</h2>
              <p>We implement appropriate security measures to protect your personal data.</p>
              
              <h2>5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul>
                <li>Access your personal data</li>
                <li>Request correction or deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>
              
              <h2>6. Cookies</h2>
              <p>We use cookies to enhance your experience and analyze our traffic.</p>
              
              <h2>7. Third-Party Services</h2>
              <p>We may use third-party services such as Google Analytics and advertising services.</p>
              
              <h2>8. Changes to This Policy</h2>
              <p>We may update this policy periodically. Please check back for updates.</p>
              
              <h2>9. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us at privacy@pizzadoughcalculator.app</p>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
