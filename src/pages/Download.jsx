import React from "react";
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

const Download = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mt-20">
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Download</h1>
            <p className="text-lg">
              Download options for our Travian bot will be available here soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
