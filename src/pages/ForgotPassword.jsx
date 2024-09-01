import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement password reset logic
    console.log("Password reset attempt with:", { email });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-gray-100">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen px-4 py-12">
        <Card className="w-full max-w-md bg-white text-gray-900 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-gray-800">Forgot Password</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Send Reset Link</Button>
            </form>
            <div className="mt-4 text-center">
              <Link to="/login" className="text-sm text-blue-400 hover:underline">Back to Login</Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ForgotPassword;
