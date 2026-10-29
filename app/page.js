'use client';
import { useState } from 'react';

export default function BirthdayPage() {
  const [isOpen, setIsOpen] = useState(false);

  const photos = [
    { src: '/images/foto1.jpg', caption: 'Momen Indah Kita Bersama ❤️' },
    { src: '/images/foto2.jpg', caption: 'Keluarga Kecil Kebanggaanku 🥰' },
    { src: '/images/foto3.jpg', caption: 'Terima kasih telah menjadi istri terbaik ✨' },
  ];

  const handleOpenGift = () => {
    setIsOpen(true);
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '16px', background: 'linear-gradient(to bottom right, #fce7f3, #f3e8ff, #fce7f3)' }}>
      {!isOpen ? (
        <div style={{ background: 'white', padding: '32px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', maxWidth: '400px', width: '100%', textAlign: 'center', border: '1px solid #fbcfe8', zIndex: 50, position: 'relative' }}>
          <span style={{ fontSize: '48px', display: 'block', marginBottom: '16px' }}>💌</span>
          <h1 style={{ fontSize: '22px', fontWeight: 'bold', color: '#db2777', marginBottom: '8px' }}>Spesial Untuk Istri Tercinta</h1>
          <p style={{ fontSize: '14px', color: '#4b5563', marginBottom: '24px' }}>Ada sesuatu yang spesial nih buat kamu di hari ulang tahunmu...</p>
          
          <button
            type="button"
            onClick={handleOpenGift}
            style={{
              width: '100%',
              backgroundColor: '#ec4899',
              color: 'white',
              fontWeight: 'bold',
              padding: '16px 24px',
              borderRadius: '9999px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          >
            Buka Kado 🎁
          </button>
        </div>
      ) : (
        <div style={{ background: 'white', padding: '24px', borderRadius: '24px', boxShadow: '0 20px 25px rgba(0,0,0,0.15)', maxWidth: '600px', width: '100%', margin: '20px 0', border: '1px solid #fbcfe8', zIndex: 50, position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#db2777', marginBottom: '8px' }}>
              Selamat Ulang Tahun, Sayang! 🎉
            </h1>
            <p style={{ fontSize: '15px', color: '#f472b6', fontWeight: '500' }}>Barakallahu Fii Umrik, Istriku Tercinta</p>
          </div>

          <div style={{ backgroundColor: '#fdf2f8', padding: '20px', borderRadius: '16px', marginBottom: '24px', border: '1px solid #fce7f3', color: '#374151', lineHeight: '1.6', fontSize: '14px' }}>
            <p style={{ marginBottom: '12px' }}>
              Terima kasih sudah menjadi pendamping hidup yang luar biasa, ibu yang penyayang untuk anak-anak, dan rumah tempatku pulang yang paling nyaman. 
            </p>
            <p style={{ marginBottom: '12px' }}>
              Semoga di pertambahan usia ini, Allah SWT senantiasa memberikan kesehatan, kebahagiaan, keberkahan dalam setiap langkah, dan semoga semua doa-doamu dikabulkan.
            </p>
            <p style={{ textAlign: 'right', fontWeight: 'bold', color: '#db2777', marginTop: '16px' }}>
              — Dari suami dan anak-anak tercinta ❤️
            </p>
          </div>

          <h2 style={{ fontSize: '18px', fontWeight: 'bold', color: '#374151', marginBottom: '16px', textAlign: 'center' }}>Kenangan Indah Kita 📸</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', marginBottom: '24px' }}>
            {photos.map((photo, index) => (
              <div key={index} style={{ backgroundColor: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid #f3f4f6', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                <div style={{ height: '160px', width: '100%', backgroundColor: '#e5e7eb', position: 'relative' }}>
                  <img 
                    src={photo.src} 
                    alt={photo.caption} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <p style={{ padding: '12px', fontSize: '12px', textAlign: 'center', color: '#4b5563', fontWeight: '500' }}>{photo.caption}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', fontSize: '12px', color: '#9ca3af', marginTop: '24px' }}>
            Made with lots of love ❤️ | Special Gift
          </div>
        </div>
      )}
    </main>
  );
}