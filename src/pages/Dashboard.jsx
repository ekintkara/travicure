import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  // Örnek veri
  const subscription = {
    plan: 'Standard Plan',
    expirationDate: '2024-10-01',
    lastUpdate: '2024-08-20',
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 text-white">
      <div className="flex flex-col items-center px-4 py-20">
        <div className="w-full max-w-3xl">
          <Card className="bg-white bg-opacity-20 text-gray-100 p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Welcome Back!</h1>
            <div className="space-y-6">
              <div className="bg-[rgba(90,91,105,0.32)] p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Subscription Details</h2>
                <p className="text-lg mb-2"><strong>Plan:</strong> {subscription.plan}</p>
                <p className="text-lg mb-2"><strong>Expiration Date:</strong> {subscription.expirationDate}</p>
                <p className="text-lg mb-2"><strong>Last Update:</strong> {subscription.lastUpdate}</p>
              </div>
              <div className="bg-[rgba(90,91,105,0.32)] p-6 rounded-lg">
                <h2 className="text-2xl font-semibold mb-4">Need Assistance?</h2>
                <p className="text-lg mb-4">If you have any questions or need help, please contact our support team.</p>
                <Button className="bg-blue-500 text-white hover:bg-blue-600">Contact Support</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
