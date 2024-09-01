import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white">
      <Navbar /> 
      <div className="container mx-auto px-4 py-40">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <p className="text-lg">FAQ content will be available here soon.</p>
    </div>
    </div>
  
  );
};

export default FAQ;