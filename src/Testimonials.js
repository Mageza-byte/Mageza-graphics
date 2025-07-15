
import React, { useState, useRef } from 'react';

const testimonials = [
  {
    text: 'Mageza Hub transformed our brand with stunning graphics and fast service!',
    author: 'Sarah K.',
    color: '#2d89ef',
    avatar: '🧑‍🎨',
    role: 'Brand Manager'
  },
  {
    text: 'The tutoring sessions were clear, practical, and helped me ace my exams.',
    author: 'Brian M.',
    color: '#43b581',
    avatar: '👨‍💻',
    role: 'Student'
  },
  {
    text: 'Excellent ICT support — quick, reliable, and affordable!',
    author: 'Linda O.',
    color: '#fbbc05',
    avatar: '👩‍🔧',
    role: 'Entrepreneur'
  }
];

const Testimonials = () => {
  const [idx, setIdx] = useState(0);
  const total = testimonials.length;
  const carouselRef = useRef();

  const goTo = (i) => {
    setIdx(i);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: i * 340, behavior: 'smooth' });
    }
  };

  return (
    <section style={{ padding: '2rem 0', textAlign: 'center' }}>
      <h2 style={{ color: '#2d89ef', marginBottom: 16 }}>Testimonials</h2>
      <div style={{ position: 'relative', maxWidth: 360, margin: '0 auto' }}>
        <div
          ref={carouselRef}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            gap: 0,
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{
                minWidth: 320,
                maxWidth: 340,
                margin: '0 10px',
                background: '#f4f8fb',
                borderRadius: 16,
                padding: 28,
                boxShadow: '0 2px 12px #2d89ef11',
                scrollSnapAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                transition: 'box-shadow 0.3s, transform 0.3s',
                borderTop: `4px solid ${t.color}`,
                position: 'relative',
              }}
            >
              <span style={{ fontSize: 44, marginBottom: 10 }}>{t.avatar}</span>
              <p style={{ color: '#444', fontStyle: 'italic', marginBottom: 10, fontSize: 17 }}>{t.text}</p>
              <span style={{ color: t.color, fontWeight: 700 }}>{t.author}</span>
              <span style={{ color: '#888', fontSize: 14 }}>{t.role}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 18 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => goTo(i)}
              style={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                border: 'none',
                background: idx === i ? '#2d89ef' : '#e3eaf6',
                boxShadow: idx === i ? '0 2px 8px #2d89ef33' : 'none',
                cursor: 'pointer',
                transition: 'background 0.2s',
                margin: 0,
                outline: idx === i ? '2px solid #43b581' : 'none',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
