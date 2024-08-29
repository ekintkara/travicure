import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mt-20">
          <h1 className="text-5xl font-bold mb-6">Welcome to Travicure</h1>
          <p className="text-xl mb-8">Your ultimate Travian bot solution</p>
          <Button className="bg-white text-blue-600 hover:bg-blue-100">Get Started</Button>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Efficient Farming</h2>
            <p>Automate resource collection and optimize your village growth.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Smart Building</h2>
            <p>Automatically upgrade buildings based on intelligent strategies.</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Advanced Combat</h2>
            <p>Coordinate attacks and defenses with precision timing.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
