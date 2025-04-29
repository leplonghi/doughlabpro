
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Terms: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">
            These Terms of Service govern your use of DoughLab Pro. By using our service, you agree to these terms.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">1. Account Terms</h2>
          <p className="mb-4">
            You are responsible for maintaining the security of your account and password. The company cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">2. API Usage</h2>
          <p className="mb-4">
            Customers may access their data via the Application API. Any use of the API, including use of the API through a third-party product that accesses the Service, is bound by the terms of this agreement.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">3. Copyright and Content Ownership</h2>
          <p className="mb-4">
            All content posted on the Service must comply with copyright law. We claim no intellectual property rights over the material you provide to the Service.
          </p>
          
          <h2 className="text-xl font-semibold mt-6 mb-3">4. General Conditions</h2>
          <p className="mb-4">
            Your use of DoughLab Pro is at your sole risk. The service is provided on an "as is" and "as available" basis. We reserve the right to modify or terminate the service for any reason, without notice at any time.
          </p>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
