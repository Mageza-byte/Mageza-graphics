import React from 'react';

export default function HeroVisuals() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 40,
      marginTop: 40,
      flexWrap: 'wrap',
    }}>
      <img
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
        alt="Creative Design"
        className="hero-visual-img"
        style={{ width: 140, height: 140, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 24px #0003', border: '4px solid #fff', transition: 'transform 0.5s', cursor: 'pointer' }}
      />
      <img
        src="https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=400&q=80"
        alt="Tutoring Session"
        className="hero-visual-img"
        style={{ width: 140, height: 140, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 24px #0003', border: '4px solid #fff', transition: 'transform 0.5s', cursor: 'pointer' }}
      />
      <img
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
        alt="ICT Support"
        className="hero-visual-img"
        style={{ width: 140, height: 140, borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 24px #0003', border: '4px solid #fff', transition: 'transform 0.5s', cursor: 'pointer' }}
      />
    </div>
  );
}
