
import React, { useState, useEffect } from 'react';
import HeroVisuals from './HeroVisuals';

const highlights = [
  {
    icon: '🎨',
    title: 'Graphics',
    desc: 'Logos, posters, branding, and more. Stand out visually!'
  },
  {
    icon: '💻',
    title: 'Tutoring',
    desc: 'Programming, algorithms, and exam prep for all levels.'
  },
  {
    icon: '🛠️',
    title: 'ICT Support',
    desc: 'Repairs, troubleshooting, and network setup—fast and friendly.'
  }
];

export default function HeroSection() {
  const [highlightIdx, setHighlightIdx] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setHighlightIdx(i => (i + 1) % highlights.length), 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{
      background: 'linear-gradient(90deg, #2d89ef 0%, #43b581 100%)',
      color: '#fff',
      padding: '3.5rem 1rem 2.5rem 1rem',
      borderRadius: '0 0 32px 32px',
      boxShadow: '0 8px 32px #0002',
      textAlign: 'center',
      marginBottom: '2rem',
      position: 'relative',
      overflow: 'hidden',
      animation: 'fadeInUp 1.2s cubic-bezier(.23,1.01,.32,1)'
    }}>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .hero-highlight {
          background: rgba(255,255,255,0.13);
          border-radius: 18px;
          padding: 1.3rem 2.2rem;
          min-width: 200px;
          margin: 0 8px;
          box-shadow: 0 2px 12px #fff2;
          display: inline-block;
          animation: highlightPop 0.8s cubic-bezier(.23,1.01,.32,1);
        }
        @keyframes highlightPop {
          0% { opacity: 0; transform: scale(0.8) translateY(20px); }
          80% { opacity: 1; transform: scale(1.08) translateY(-4px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .hero-cta-btn {
          background: linear-gradient(90deg, #fff 0%, #e3eaf6 100%);
          color: #2d89ef;
          font-weight: 700;
          font-size: 1.2rem;
          border: none;
          border-radius: 32px;
          padding: 0.9rem 2.5rem;
          margin-top: 2.2rem;
          box-shadow: 0 2px 12px #2d89ef33;
          cursor: pointer;
          transition: background 0.3s, color 0.3s, transform 0.2s;
        }
        .hero-cta-btn:hover {
          background: linear-gradient(90deg, #2d89ef 0%, #43b581 100%);
          color: #fff;
          transform: scale(1.07) translateY(-2px);
        }
      `}</style>
      <p style={{ fontSize: '1.5rem', margin: '1.2rem 0 0.7rem 0', fontWeight: 400, textShadow: '0 1px 6px #2d89ef22' }}>
        Your all-in-one digital companion for creativity, learning, and tech support.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 36, flexWrap: 'wrap', minHeight: 120 }}>
        {highlights.map((h, i) => (
          <div
            key={h.title}
            className="hero-highlight"
            style={{
              opacity: highlightIdx === i ? 1 : 0.3,
              transform: highlightIdx === i ? 'scale(1.08)' : 'scale(0.97)',
              filter: highlightIdx === i ? 'drop-shadow(0 2px 12px #fff5)' : 'none',
              transition: 'all 0.5s cubic-bezier(.23,1.01,.32,1)'
            }}
          >
            <span style={{ fontSize: 36 }}>{h.icon}</span>
            <div style={{ fontWeight: 700, marginTop: 8, fontSize: 20 }}>{h.title}</div>
            <div style={{ fontSize: 15, marginTop: 4, color: '#e3eaf6' }}>{h.desc}</div>
          </div>
        ))}
      </div>
      <button className="hero-cta-btn" onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
        Get Started
      </button>
      <HeroVisuals />
    </section>
  );
}
