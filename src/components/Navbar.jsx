import { Link } from "react-router-dom";
import { navItems } from "@/nav-items";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next"; // Çeviri için i18next kullanıyoruz
import FlagEN from './icons/en.svg';
import FlagTR from './icons/tr.svg';
import FlagVI from './icons/vi.svg'; // Vietnam bayrağı ikonu ekliyoruz

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Çeviri hook'u kullanımı

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-10 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">Travicure</Link>
          
          {/* Navbar Items */}
          <div className="flex items-center space-x-2 pr-2">
            {navItems().map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "flex items-center px-2 py-1 rounded-full text-xs font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition-colors",
                  item.title === t("login") || item.title === t("register") ? "hidden sm:flex" : ""
                )}
              >
                <span className="mr-1">{item.icon}</span>
                <span className="hidden md:inline">{item.title}</span>
              </Link>
            ))}

            {/* Dil Değiştirici Butonlar */}
            <div className="flex items-center space-x-2">
              <button onClick={() => changeLanguage('en')} className="flex items-center space-x-1 text-white">
                <img src={FlagEN} alt="English Flag" className="h-4 w-4" />
                <span>EN</span>
              </button>
              <button onClick={() => changeLanguage('tr')} className="flex items-center space-x-1 text-white">
                <img src={FlagTR} alt="Turkish Flag" className="h-4 w-4" />
                <span>TR</span>
              </button>
              <button onClick={() => changeLanguage('vi')} className="flex items-center space-x-1 text-white">
                <img src={FlagVI} alt="Vietnamese Flag" className="h-4 w-4" />
                <span>VI</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
