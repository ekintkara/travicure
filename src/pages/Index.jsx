import Navbar from "@/components/Navbar"; // Import Navbar
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mt-20">
          <h1 className="text-5xl font-extrabold mb-6">Welcome to Travicure</h1>
          <p className="text-xl mb-8">
            The ultimate bot solution for enhancing your Travian strategy experience.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-blue-100">
            Get Started
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white bg-opacity-20 text-gray-900 p-6 rounded-lg shadow-lg">
            <div className="relative mb-4 bg-gray-300 h-64 rounded-lg">
              <p className="absolute inset-0 flex items-center justify-center text-gray-600">Efficient Farming Image</p>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Efficient Farming</h2>
            <p>
              Automate resource collection and optimize your village growth with intelligent farming strategies.
            </p>
          </Card>

          <Card className="bg-white bg-opacity-20 text-gray-900 p-6 rounded-lg shadow-lg">
            <div className="relative mb-4 bg-gray-300 h-64 rounded-lg">
              <p className="absolute inset-0 flex items-center justify-center text-gray-600">Smart Building Image</p>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Smart Building</h2>
            <p>
              Upgrade your buildings automatically based on the most effective strategies to maximize efficiency.
            </p>
          </Card>

          <Card className="bg-white bg-opacity-20 text-gray-900 p-6 rounded-lg shadow-lg">
            <div className="relative mb-4 bg-gray-300 h-64 rounded-lg">
              <p className="absolute inset-0 flex items-center justify-center text-gray-600">Advanced Combat Image</p>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Advanced Combat</h2>
            <p>
              Coordinate attacks and defenses with precision to stay ahead of your competitors in Travian.
            </p>
          </Card>
        </div>

        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">Ready to Enhance Your Game?</h2>
          <p className="text-lg mb-8">
            Our Travian bot provides all the tools you need to dominate the game. Join us today and start optimizing your strategy!
          </p>
          <Button className="bg-white text-blue-600 hover:bg-blue-100">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
