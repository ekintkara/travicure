import { HomeIcon, LogInIcon, UserPlusIcon, StarIcon, DollarSignIcon, DownloadIcon, HelpCircleIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx"; // Import ForgotPassword component
import Features from "./pages/Features.jsx";
import Prices from "./pages/Prices.jsx";
import Download from "./pages/Download.jsx";
import FAQ from "./pages/FAQ.jsx";
import Forum from "./pages/Forum.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "HOMEPAGE",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "FEATURES",
    to: "/features",
    icon: <StarIcon className="h-4 w-4" />,
    page: <Features />,
  },
  {
    title: "PRICES",
    to: "/prices",
    icon: <DollarSignIcon className="h-4 w-4" />,
    page: <Prices />,
  },
  {
    title: "DOWNLOAD",
    to: "/download",
    icon: <DownloadIcon className="h-4 w-4" />,
    page: <Download />,
  },
  {
    title: "FAQ",
    to: "/faq",
    icon: <HelpCircleIcon className="h-4 w-4" />,
    page: <FAQ />,
  },
  {
    title: "Login",
    to: "/login",
    icon: <LogInIcon className="h-4 w-4" />,
    page: <Login />,
  },
  {
    title: "Register",
    to: "/register",
    icon: <UserPlusIcon className="h-4 w-4" />,
    page: <Register />,
  },
  // Removed Videos entry
];
