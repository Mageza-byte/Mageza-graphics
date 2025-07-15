import React from 'react';

export default function FeatureCard({ icon, title, color, children }) {
  return (
    <div style={{
      background: '#f4f7fb',
      borderRadius: 16,
      boxShadow: '0 2px 12px #0001',
      padding: '2rem 1.5rem',
      marginBottom: 24,
      borderLeft: `6px solid ${color}`,
      display: 'flex',
      alignItems: 'flex-start',
      gap: 18,
    }}>
      <span style={{ fontSize: 36, color }}>{icon}</span>
      <div>
        <h3 style={{ margin: 0, color, fontSize: '1.3rem', fontWeight: 700 }}>{title}</h3>
        <div style={{ marginTop: 8, fontSize: '1.05rem', color: '#222' }}>{children}</div>
      </div>
    </div>
  );
}
