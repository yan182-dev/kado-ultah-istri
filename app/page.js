'use client';
import { useState } from 'react';

export default function BirthdayPage() {
  const [isOpen, setIsOpen] = useState(false);

  // Ganti src dengan direct link Google Drive foto keluarga Anda
   const photos = [
    { src: '/images/foto1.JPG', caption: 'Momen Indah Kita Bersama ❤️' },
    { src: '/images/foto2.JPG', caption: 'Keluarga Kecil Kebanggaanku 🥰' },
    { src: '/images/foto3.JPG', caption: 'Terima kasih telah menjadi istri terbaik ✨' },
  ];

  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '20px', 
      background: 'linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: '#2d3748'
    }}>
      {!isOpen ? (
        /* Halaman Pembuka / Amplop Digital Elegan */
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.9)', 
          backdropFilter: 'blur(12px)',
          padding: '40px 30px', 
          borderRadius: '24px', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.3)', 
          maxWidth: '420px', 
          width: '100%', 
          textAlign: 'center', 
          border: '1px solid rgba(255, 255, 255, 0.5)',
          animation: 'fadeIn 1s ease-in-out'
        }}>
          <span style={{ fontSize: '56px', display: 'block', marginBottom: '16px' }}>💌</span>
          <h1 style={{ fontSize: '24px', fontWeight: '700', color: '#831843', marginBottom: '12px', letterSpacing: '0.5px' }}>
            Untuk Sang Pemilik Hati
          </h1>
          <p style={{ fontSize: '14px', color: '#4b5563', marginBottom: '28px', lineHeight: '1.6' }}>
            Ada secarik rasa dan cinta yang sengaja kuukir khusus untuk merayakan hari istimewamu hari ini...
          </p>
          
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            style={{
              width: '100%',
              backgroundColor: '#be185d',
              color: 'white',
              fontWeight: '600',
              padding: '16px 24px',
              borderRadius: '50px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
              boxShadow: '0 8px 20px rgba(190, 24, 93, 0.4)',
              transition: 'all 0.3s ease'
            }}
          >
            Buka Kado Cinta 🎁
          </button>
        </div>
      ) : (
        /* Halaman Utama Ucapan Puitis & Galeri */
        <div style={{ 
          background: 'rgba(255, 255, 255, 0.95)', 
          backdropFilter: 'blur(16px)',
          padding: '36px 28px', 
          borderRadius: '30px', 
          boxShadow: '0 25px 50px rgba(0,0,0,0.3)', 
          maxWidth: '650px', 
          width: '100%', 
          margin: '20px 0', 
          border: '1px solid rgba(255, 255, 255, 0.6)'
        }}>
          {/* Header Ucapan */}
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <span style={{ fontSize: '32px', display: 'block', marginBottom: '8px' }}>🌹</span>
            <h1 style={{ fontSize: '30px', fontWeight: '800', color: '#831843', marginBottom: '6px' }}>
              Selamat Ulang Tahun, Istriku
            </h1>
            <p style={{ fontSize: '15px', color: '#db2777', fontWeight: '600', fontStyle: 'italic' }}>
              Barakallahu Fii Umrik, bidadari surgaku...
            </p>
          </div>

          {/* Kartu Pesan Puitis */}
          <div style={{ 
            backgroundColor: '#fff1f2', 
            padding: '24px', 
            borderRadius: '20px', 
            marginBottom: '32px', 
            border: '1px solid #fecdd3', 
            color: '#4c0519', 
            lineHeight: '1.8', 
            fontSize: '15px',
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)'
          }}>
            <p style={{ marginBottom: '16px', textIndent: '20px' }}>
              Waktu terus berjalan, dan lembaran tahun dalam hidupmu kembali terbuka. Di antara riuhnya dunia, kamu tetaplah ketenangan yang paling kurindukan. Terima kasih telah menjadi rumah tempat lelahku berlabuh, dan ibu yang luar biasa bagi anak-anak kita.
            </p>
            <p style={{ marginBottom: '16px', textIndent: '20px' }}>
              Semoga di pertambahan usiamu hari ini, Allah SWT senantiasa melimpahkan kesehatan, memberkahi setiap jengkal langkahmu, dan mendekatkan impian-impian indah yang tersimpan di dalam hatimu.
            </p>
            <p style={{ textAlign: 'right', fontWeight: '700', color: '#9f1239', marginTop: '20px', fontStyle: 'italic' }}>
              — Dari suamimu, dengan cinta yang tak pernah bertepi ❤️
            </p>
          </div>

          {/* Galeri Kenangan Puitis */}
          <h2 style={{ fontSize: '18px', fontWeight: '700', color: '#831843', marginBottom: '20px', textAlign: 'center', letterSpacing: '0.5px' }}>
            ✨ Jejak Langkah & Kisah Kita ✨
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', marginBottom: '28px' }}>
            {photos.map((photo, index) => (
              <div key={index} style={{ 
                backgroundColor: 'white', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                border: '1px solid #f3f4f6', 
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease'
              }}>
                <div style={{ height: '180px', width: '100%', backgroundColor: '#f3f4f6', position: 'relative' }}>
                  <img 
                    src={photo.src} 
                    alt={photo.caption} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <p style={{ padding: '14px', fontSize: '13px', textAlign: 'center', color: '#4b5563', fontStyle: 'italic', lineHeight: '1.4' }}>
                  "{photo.caption}"
                </p>
              </div>
            ))}
          </div>

          {/* Footer Elegan */}
          <div style={{ textAlign: 'center', fontSize: '12px', color: '#9ca3af', marginTop: '20px', letterSpacing: '1px' }}>
            ABADI DALAM DOA DAN CINTA • FOREVER YOURS
          </div>
        </div>
      )}
    </main>
  );
}