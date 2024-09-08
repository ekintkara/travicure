import { HomeIcon, LogInIcon, UserPlusIcon, StarIcon, DollarSignIcon, DownloadIcon, HelpCircleIcon } from "lucide-react";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx"; // Import ForgotPassword component
import Features from "./pages/Features.jsx";
import Prices from "./pages/Prices.jsx";
import Download from "./pages/Download.jsx";
import FAQ from "./pages/FAQ.jsx";
import Videos from "./pages/Videos.jsx";
import Forum from "./pages/Forum.jsx";
import { useTranslation } from 'react-i18next';

export const navItems = () => {
  const { t } = useTranslation(); // useTranslation'ı burada kullanıyoruz

  return [
    {
      title: t("homepageMenu"), // Başlıkları dinamik hale getiriyoruz
      to: "/",
      icon: <HomeIcon className="h-4 w-4" />,
      page: <Index />,
    },
    {
      title: t("features"),
      to: "/features",
      icon: <StarIcon className="h-4 w-4" />,
      page: <Features />,
    },
    {
      title: t("prices"),
      to: "/prices",
      icon: <DollarSignIcon className="h-4 w-4" />,
      page: <Prices />,
    },
    {
      title: t("download"),
      to: "/download",
      icon: <DownloadIcon className="h-4 w-4" />,
      page: <Download />,
    },
    {
      title: t("faq"),
      to: "/faq",
      icon: <HelpCircleIcon className="h-4 w-4" />,
      page: <FAQ />,
    },
    {
      title: t("login"),
      to: "/login",
      icon: <LogInIcon className="h-4 w-4" />,
      page: <Login />,
    },
    {
      title: t("register"),
      to: "/register",
      icon: <UserPlusIcon className="h-4 w-4" />,
      page: <Register />,
    }
  ];
};
