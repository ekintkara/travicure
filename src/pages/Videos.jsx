import React from 'react';
import Navbar from '@/components/Navbar';

const Videos = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-extrabold mb-6 text-center">Videos</h1>
        <p className="text-lg text-center">
          Video content will be available here soon.
        </p>
      </div>
    </div>
  );
};

export default Videos;
