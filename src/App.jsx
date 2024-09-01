import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar bileşenini buraya import edin
import Index from './pages/Index';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import Features from './pages/Features';
import Prices from './pages/Prices';
import Download from './pages/Download';
import FAQ from './pages/FAQ';
import Videos from './pages/Videos';
import Forum from './pages/Forum';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar bileşenini burada ekleyin */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/features" element={<Features />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/download" element={<Download />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/forum" element={<Forum />} />
      </Routes>
    </Router>
  );
};

export default App;
