import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; // Çeviri hook'u

const Login = () => {
  const { t } = useTranslation(); // Çeviri hook'unu kullanıyoruz
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempt with:", { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 text-white">
      <div className="flex items-center justify-center min-h-screen px-4 py-12">
        <Card className="w-full max-w-md bg-[rgba(255,255,255,0.1)] text-white shadow-lg rounded-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-white">{t('login')}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white">{t('email')}</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t('enterEmail')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md bg-[rgba(255,255,255,0.2)] text-white placeholder-gray-400 border-transparent focus:border-blue-500 focus:bg-[rgba(255,255,255,0.3)] focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-white">{t('password')}</label>
                  <Input
                    id="password"
                    type="password"
                    placeholder={t('enterPassword')}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="mt-1 block w-full rounded-md bg-[rgba(255,255,255,0.2)] text-white placeholder-gray-400 border-transparent focus:border-blue-500 focus:bg-[rgba(255,255,255,0.3)] focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">{t('login')}</Button>
            </form>
            <div className="mt-4 text-center">
              <Link to="/forgot-password" className="text-sm text-blue-300 hover:text-blue-500">
                {t('forgotPassword')}
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
