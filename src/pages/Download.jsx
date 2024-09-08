import React, { useState } from "react";

const Download = () => {
  const [downloadStarted, setDownloadStarted] = useState(false);

  const handleDownload = () => {
    setDownloadStarted(true);
    // Simulate download start and complete after 3 seconds
    setTimeout(() => {
      setDownloadStarted(false);
      alert("Download completed!");
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 text-white flex items-center justify-center">
      <div className="bg-[rgba(90,91,105,0.32)] p-8 rounded-lg shadow-lg text-center max-w-lg w-full">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-100">Download Travian Bot</h1>
        <p className="text-lg text-gray-200 mb-8">
          Get the ultimate Travian bot and start automating your gameplay! Save time, maximize your resources, and take your village to the next level. Available for Windows and macOS.
        </p>

        {/* Conditional Download Status */}
        {!downloadStarted ? (
          <div className="flex justify-center">
            <button 
              onClick={handleDownload}
              className="bg-white text-blue-600 hover:bg-blue-100 px-6 py-3 rounded-lg shadow-md font-semibold transition-colors"
            >
              Download Now
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <p className="text-lg text-gray-200 mb-4">Your download is starting...</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full w-2/3"></div>
            </div>
          </div>
        )}

        {/* Footer Section for Additional Links or Info */}
        <div className="mt-8 text-sm text-gray-400">
          <p>Need help? Visit our <a href="#" className="text-blue-300 hover:text-blue-500">support page</a>.</p>
          <p className="mt-2">Share your experience with others! <a href="#" className="text-blue-300 hover:text-blue-500">Follow us on social media</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Download;
