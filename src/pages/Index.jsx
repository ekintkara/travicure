import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next"; // i18n çeviri desteği ekliyoruz

const Homepage = () => {
  const { t } = useTranslation(); // Çeviri fonksiyonunu alıyoruz

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-400 to-purple-500 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mt-20">
          <h1 className="text-5xl font-extrabold mb-6">{t('homepage.welcome')}</h1> {/* Çeviri */}
          <p className="text-xl mb-8">
            {t('homepage.subtitle')} {/* Çeviri */}
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white bg-opacity-10 text-gray-900 p-6 rounded-lg shadow-lg">
            <div className="relative mb-4">
              <img
                src="/images/raid.png"
                alt={t('homepage.features.farmingAlt')} // Alt metin için çeviri
                className="h-64 w-full object-contain rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4">{t('homepage.features.farmingTitle')}</h2> {/* Çeviri */}
            <p>{t('homepage.features.farmingDescription')}</p> {/* Çeviri */}
            <Button className="mt-4 bg-white text-blue-600 hover:bg-blue-100">
              {t('homepage.getStarted')} {/* Çeviri */}
            </Button>
          </Card>

          <Card className="bg-white bg-opacity-10 text-gray-900 p-6 rounded-lg shadow-lg">
            <div className="relative mb-4">
              <img
                src="/images/build.png"
                alt={t('homepage.features.buildingAlt')} // Alt metin için çeviri
                className="h-64 w-full object-contain rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4">{t('homepage.features.buildingTitle')}</h2> {/* Çeviri */}
            <p>{t('homepage.features.buildingDescription')}</p> {/* Çeviri */}
            <Button className="mt-4 bg-white text-blue-600 hover:bg-blue-100">
              {t('homepage.getStarted')} {/* Çeviri */}
            </Button>
          </Card>

          <Card className="bg-white bg-opacity-10 text-gray-900 p-6 rounded-lg shadow-lg">
            <div className="relative mb-4">
              <img
                src="/images/stats.png"
                alt={t('homepage.features.combatAlt')} // Alt metin için çeviri
                className="h-64 w-full object-contain rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-semibold mb-4">{t('homepage.features.combatTitle')}</h2> {/* Çeviri */}
            <p>{t('homepage.features.combatDescription')}</p> {/* Çeviri */}
            <Button className="mt-4 bg-white text-blue-600 hover:bg-blue-100">
              {t('homepage.getStarted')} {/* Çeviri */}
            </Button>
          </Card>
        </div>

        <div className="text-center mt-20">
          <h2 className="text-3xl font-bold mb-4">{t('homepage.ready')}</h2> {/* Çeviri */}
          <p className="text-lg mb-8">
            {t('homepage.join')} {/* Çeviri */}
          </p>
          <Button className="bg-white text-blue-600 hover:bg-blue-100">
            {t('homepage.learnMore')} {/* Çeviri */}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
