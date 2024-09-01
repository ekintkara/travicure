import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

const FAQ = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Sıkça Sorulan Sorular</h1>
      <p className="text-lg mb-4">Burada Travicure hakkında sıkça sorulan soruları bulabilirsiniz:</p>
      <dl className="space-y-4 text-lg">
        <div>
          <dt className="font-semibold">1. Travicure nedir?</dt>
          <dd className="ml-4">Travicure, Travian oyununu otomatikleştiren bir sistemdir. Oyun içindeki çeşitli görevleri ve işlemleri otomatik olarak gerçekleştirir.</dd>
        </div>
        <div>
          <dt className="font-semibold">2. Hangi özelliklere sahiptir?</dt>
          <dd className="ml-4">
            Travicure, aşağıdaki özellikleri sunar:
            <ul className="list-disc list-inside ml-4">
              <li>Bina ve Kaynak Yönetimi</li>
              <li>Asker Eğitimi</li>
              <li>Şenlikler</li>
              <li>Saldırı Yönetimi</li>
              <li>Bildirimler</li>
              <li>Savunma Yönetimi</li>
              <li>Kaynak Transferi ve Ticaret</li>
              <li>Tarım ve Saldırı Planlaması</li>
              <li>Çevrimiçi Durum Tespiti</li>
              <li>Kahraman Maceraları</li>
            </ul>
          </dd>
        </div>
        <div>
          <dt className="font-semibold">3. Travicure'yi nasıl kullanırım?</dt>
          <dd className="ml-4">Travicure'yi kullanmak için öncelikle uygulamanızı kurmanız ve gerekli ayarları yapmanız gerekmektedir. Daha fazla bilgi için kullanım kılavuzuna başvurabilirsiniz.</dd>
        </div>
        <div>
          <dt className="font-semibold">4. Travicure'nin maliyeti nedir?</dt>
          <dd className="ml-4">Travicure, farklı abonelik planlarına sahip olabilir. Fiyatlar hakkında daha fazla bilgiye resmi web sitesinden ulaşabilirsiniz.</dd>
        </div>
        <div>
          <dt className="font-semibold">5. Travicure güvenli mi?</dt>
          <dd className="ml-4">Travicure, kullanıcı verilerini korumak için çeşitli güvenlik önlemleri alır. Ancak, oyun kurallarına uygunluğu ve güvenliği sağlamak için düzenli olarak güncellenir.</dd>
        </div>
      </dl>
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 text-white">
      <Navbar /> 
      <div className="container mx-auto px-4 py-40">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <p className="text-lg">FAQ content will be available here soon.</p>
    </div>
    </div>
  </div>
  );
};

export default FAQ;
