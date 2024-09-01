import React from 'react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Pricing Plans</h1>
          <p className="text-lg">Choose the plan that best suits your needs and start optimizing your Travian experience today!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Basic Plan</h2>
            <p className="text-4xl font-bold mb-4">$10<span className="text-base font-medium">/month</span></p>
            <ul className="mb-6 text-left">
              <li className="mb-2">Efficient Farming</li>
              <li className="mb-2">Basic Building Automation</li>
              <li className="mb-2">Standard Support</li>
            </ul>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
          </div>
          
          {/* Standard Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Standard Plan</h2>
            <p className="text-4xl font-bold mb-4">$25<span className="text-base font-medium">/month</span></p>
            <ul className="mb-6 text-left">
              <li className="mb-2">Efficient Farming</li>
              <li className="mb-2">Smart Building</li>
              <li className="mb-2">Advanced Combat</li>
              <li className="mb-2">Priority Support</li>
            </ul>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
          </div>
          
          {/* Premium Plan */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Premium Plan</h2>
            <p className="text-4xl font-bold mb-4">$40<span className="text-base font-medium">/month</span></p>
            <ul className="mb-6 text-left">
              <li className="mb-2">All Standard Plan Features</li>
              <li className="mb-2">Custom Strategies</li>
              <li className="mb-2">Exclusive Features</li>
              <li className="mb-2">24/7 Premium Support</li>
            </ul>
            <Button className="bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
