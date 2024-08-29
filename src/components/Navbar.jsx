import { Link } from "react-router-dom";
import { navItems } from "@/nav-items";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-10 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600">Travicure</Link>
          <div className="flex items-center space-x-2 pr-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex items-center px-2 py-1 rounded-full text-xs font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors",
                  item.title === "Login" || item.title === "Register" ? "hidden sm:flex" : ""
                )}
              >
                <span className="mr-1">{item.icon}</span>
                <span className="hidden md:inline">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
