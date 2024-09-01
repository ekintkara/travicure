import React from "react";
import Navbar from '@/components/Navbar';

const Download = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mt-20">
          <div className="bg-[rgba(90,91,105,0.32)] p-8 rounded-lg shadow-lg">
            <h1 className="text-4xl font-extrabold mb-6 text-gray-100">Download</h1>
            <p className="text-lg text-gray-200 mb-8">
              Download options for our Travian bot will be available here soon.
            </p>
            {/* Placeholder for download button */}
            <div className="flex justify-center">
              <a 
                href="#"
                className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-lg shadow-md font-semibold transition-colors"
              >
                Download Now
              </a>
            </div>
            {/* You can add more content or sections as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
