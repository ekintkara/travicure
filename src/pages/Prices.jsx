import React from "react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 text-gray-100">
      <div className="flex items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-100">Pricing Plans</h1>
            <p className="text-lg text-gray-300">
              Choose the plan that best suits your needs and start optimizing your Travian experience today!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-[rgba(90,91,105,0.32)] p-6 rounded-lg shadow-lg text-center flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-100">Basic Plan</h2>
                <p className="text-4xl font-bold mb-4 text-gray-100">
                  $10<span className="text-base font-medium">/month</span>
                </p>
                <ul className="mb-6 text-gray-300 text-left mx-auto max-w-xs">
                  <li className="mb-2">Automated Resource Management</li>
                  <li className="mb-2">Basic Building Automation</li>
                  <li className="mb-2">Troop Training Support</li>
                  <li className="mb-2">Standard Support</li>
                </ul>
              </div>
              <Button className="bg-blue-500 text-white hover:bg-blue-600 mt-auto">
                Get Started
              </Button>
            </div>

            {/* Standard Plan */}
            <div className="bg-[rgba(90,91,105,0.32)] p-6 rounded-lg shadow-lg text-center flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-100">Standard Plan</h2>
                <p className="text-4xl font-bold mb-4 text-gray-100">
                  $25<span className="text-base font-medium">/month</span>
                </p>
                <ul className="mb-6 text-gray-300 text-left mx-auto max-w-xs">
                  <li className="mb-2">Efficient Farming Automation</li>
                  <li className="mb-2">Advanced Building Automation</li>
                  <li className="mb-2">Combat Strategy Assistance</li>
                  <li className="mb-2">Attack and Defense Alerts</li>
                  <li className="mb-2">Priority Support</li>
                </ul>
              </div>
              <Button className="bg-blue-500 text-white hover:bg-blue-600 mt-auto">
                Get Started
              </Button>
            </div>

            {/* Premium Plan */}
            <div className="bg-[rgba(90,91,105,0.32)] p-6 rounded-lg shadow-lg text-center flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-100">Premium Plan</h2>
                <p className="text-4xl font-bold mb-4 text-gray-100">
                  $40<span className="text-base font-medium">/month</span>
                </p>
                <ul className="mb-6 text-gray-300 text-left mx-auto max-w-xs">
                  <li className="mb-2">All Standard Plan Features</li>
                  <li className="mb-2">Custom Farming and Building Strategies</li>
                  <li className="mb-2">Real-time Online Status Monitoring</li>
                  <li className="mb-2">Hero Adventure Automation</li>
                  <li className="mb-2">Resource Transfer and Trade Automation</li>
                  <li className="mb-2">24/7 Premium Support</li>
                </ul>
              </div>
              <Button className="bg-blue-500 text-white hover:bg-blue-600 mt-auto">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
