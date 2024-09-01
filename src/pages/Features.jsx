import React from 'react';

const Features = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Features</h1>
      <p className="text-lg mb-4">Here you can list the features of your Travian bot:</p>
      <ul className="list-disc list-inside space-y-2 text-lg">
        <li>Bina ve Kaynak Yönetimi: Binaların inşası, iyileştirilmesi ve kaynak alanlarının geliştirilmesi.</li>
        <li>Asker Eğitimi: Askerlerin eğitimi ve demirci dükkanında iyileştirilmesi.</li>
        <li>Şenlikler: Otomatik olarak şenlik düzenleme.</li>
        <li>Saldırı Yönetimi: Saldırıları tespit etme, askerleri geri çekme ve kaynakları harcama.</li>
        <li>Bildirimler: Kullanıcıya bildirim gönderme.</li>
        <li>Savunma Yönetimi: Savunma operasyonlarını planlama ve yönetme.</li>
        <li>Kaynak Transferi ve Ticaret: Kaynakların transferi ve otomatik NPC ticareti.</li>
        <li>Tarım ve Saldırı Planlaması: Tarım yapma, asker toplama, saldırı planlama ve dalgalar gönderme.</li>
        <li>Çevrimiçi Durum Tespiti: Multihunter ve diğer oyuncuların çevrimiçi durumlarını izleme.</li>
        <li>Kahraman Maceraları: Kahraman maceralarını yönetme ve mesajları okuma.</li>
      </ul>
    </div>
  );
};

export default Features;