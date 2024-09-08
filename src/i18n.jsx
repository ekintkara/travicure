import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend'; // Backend'den dil dosyalarını almak için
import LanguageDetector from 'i18next-browser-languagedetector'; // Tarayıcı dil algılayıcı

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en', // Varsayılan dil
    supportedLngs: ['en', 'tr', 'vi'], // Desteklenen diller
    debug: true, // Hata ayıklama modu
    interpolation: {
      escapeValue: false, // React otomatik olarak tehlikeli kodu engeller
    },
    backend: {
      loadPath: '/src/locales/{{lng}}/translation.json', // Dil dosyalarının yolu
    },
  });

export default i18n;
