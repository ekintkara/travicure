import { useState } from "react";
import Navbar from "@/components/Navbar"; // Import Navbar
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-extrabold mb-6 text-center">Sıkça Sorulan Sorular</h1>
        <p className="text-lg mb-12 text-center">
          Travian botumuzla ilgili sıkça sorulan soruları aşağıda bulabilirsiniz:
        </p>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-[rgba(90,91,105,0.32)] text-gray-100 p-6 rounded-lg shadow-lg"
            >
              <button
                className="w-full text-left flex items-center justify-between"
                onClick={() => toggleItem(index)}
              >
                <h2 className="text-2xl font-semibold">{item.question}</h2>
                <svg
                  className={`w-6 h-6 transition-transform ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="mt-4">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Data for the FAQ section
const faqData = [
  {
    question: '1. Travian botu nedir?',
    answer: 'Travian botu, Travian strateji oyununda çeşitli görevleri otomatik olarak yerine getiren bir yazılımdır. Kaynak toplama, inşaat yapma, askeri harekatlar gibi işlemleri otomatikleştirir.'
  },
  {
    question: '2. Botun sunduğu başlıca özellikler nelerdir?',
    answer: (
      <>
        Botun sunduğu başlıca özellikler şunlardır:
        <ul className="list-disc list-inside mt-2">
          <li>Kaynak Yönetimi ve İnşaat</li>
          <li>Askeri Eğitim</li>
          <li>Festival Organizasyonu</li>
          <li>Saldırı Yönetimi</li>
          <li>Bildirimler</li>
          <li>Savunma Yönetimi</li>
          <li>Kaynak Transferi ve Ticaret</li>
          <li>Farming ve Saldırı Planlama</li>
          <li>Çevrimiçi Durum Takibi</li>
          <li>Kahraman Maceraları</li>
        </ul>
      </>
    )
  },
  {
    question: '3. Travian botunu nasıl kullanırım?',
    answer: 'Travian botunu kullanmaya başlamak için önce uygulamayı indirip kurmanız ve gerekli ayarları yapmanız gerekir. Kullanım kılavuzunu takip ederek adım adım nasıl kullanılacağını öğrenebilirsiniz.'
  },
  {
    question: '4. Bot ücretli mi?',
    answer: 'Botun farklı abonelik planları olabilir. Ücretler hakkında daha fazla bilgi almak için resmi web sitesini ziyaret edebilirsiniz.'
  },
  {
    question: '5. Travian botu güvenli mi?',
    answer: 'Travian botu, kullanıcı verilerini korumak için çeşitli güvenlik önlemleri uygular. Ayrıca, oyunun kurallarına uygunluk ve güvenliği sağlamak için düzenli olarak güncellenir.'
  }
];

export default FAQ;
