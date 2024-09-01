import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 text-white">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen px-4 py-12">
        <Card className="w-full max-w-md bg-white bg-opacity-20 text-gray-900 shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-gray-100">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-100">Email</label>
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
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-100">Password</label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</Button>
            </form>
            <div className="mt-4 text-center">
              <Link to="/forgot-password" className="text-sm" style={{ color: "rgb(249, 251, 255)" }}>
                Forgot your password?
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
