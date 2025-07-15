
import React, { useState } from 'react';
import { iconMap } from './ContactIcons';

const contacts = [
  {
    name: 'Facebook',
    icon: 'Facebook',
    url: 'https://facebook.com/mikemageza',
    color: '#1877f3',
    label: 'Facebook Page',
  },
  {
    name: 'WhatsApp',
    icon: 'WhatsApp',
    url: 'https://wa.me/263772925445',
    color: '#25d366',
    label: 'WhatsApp Chat',
  },
  {
    name: 'Instagram',
    icon: 'Instagram',
    url: 'https://instagram.com/mikewashaya',
    color: '#e1306c',
    label: 'Instagram Profile',
  },
  {
    name: 'Twitter',
    icon: 'Twitter',
    url: 'https://twitter.com/mikewashaya',
    color: '#1da1f2',
    label: 'Twitter Profile',
  },
  {
    name: 'Phone',
    icon: 'Phone',
    url: 'tel:+263772925445',
    color: '#43b581',
    label: 'Call Us',
  },
  {
    name: 'Email',
    icon: 'Email',
    url: 'mailto:washayamike@gmail.com',
    color: '#2d89ef',
    label: 'Email Us',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(null);

  const faqs = [
    {
      q: 'How quickly do you respond?',
      a: 'We aim to reply to all messages within 24 hours during business days.'
    },
    {
      q: 'Can I visit your office without an appointment?',
      a: 'Yes, but we recommend calling ahead to ensure someone is available to assist you.'
    },
    {
      q: 'What services do you offer?',
      a: 'We provide graphics design, computer science tutoring, and ICT support.'
    },
    {
      q: 'How do I get a quote?',
      a: 'Use the contact form or any of our social handles to request a quote.'
    },
    {
      q: 'Do you offer discounts for students or NGOs?',
      a: 'Yes! We have special rates for students, NGOs, and startups. Ask us for details.'
    },
    {
      q: 'Can I get a free consultation?',
      a: 'Absolutely! Book a free 15-min consult via WhatsApp or the contact form.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah K.',
      text: 'Mageza Hub transformed our brand with stunning graphics and fast service! Highly recommended for any business looking to stand out.',
      avatar: '🧑‍🎨',
      color: '#2d89ef',
      role: 'Brand Manager, ZimStartups'
    },
    {
      name: 'Brian M.',
      text: 'The tutoring sessions were clear, practical, and helped me ace my exams. The interactive approach made learning fun and effective.',
      avatar: '👨‍💻',
      color: '#43b581',
      role: 'Computer Science Student'
    },
    {
      name: 'Linda O.',
      text: 'Excellent ICT support — quick, reliable, and affordable! Mageza is my go-to for all tech issues.',
      avatar: '👩‍🔧',
      color: '#fbbc05',
      role: 'Small Business Owner'
    }
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 1800);
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 1500);
  };

  return (
    <div style={{
      maxWidth: 700,
      margin: '3rem auto',
      background: 'linear-gradient(120deg, #f8f9fa 60%, #e3eaf6 100%)',
      borderRadius: 28,
      boxShadow: '0 8px 32px #2d89ef22',
      padding: '2.5rem 2rem',
      position: 'relative',
      overflow: 'hidden',
      animation: 'fadeInUp 1.2s cubic-bezier(.23,1.01,.32,1)'
    }}>
      {/* Confetti effect on submit */}
      {showConfetti && (
        <div style={{
          position: 'absolute', left: 0, top: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10,
          animation: 'confetti-fall 1.5s linear'
        }}>
          {[...Array(24)].map((_, i) => (
            <span key={i} style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: '-20px',
              fontSize: `${18 + Math.random() * 16}px`,
              color: ['#2d89ef', '#43b581', '#fbbc05', '#e1306c', '#1da1f2'][i % 5],
              opacity: 0.85,
              animation: `confettiDrop 1.5s ${i * 0.05}s linear forwards`
            }}>🎉</span>
          ))}
        </div>
      )}
      <style>{`
        @keyframes confettiDrop {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(420px) rotate(360deg); opacity: 0; }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .contact-hero-logo {
          width: 90px;
          height: auto;
          display: block;
          margin: 0 auto 10px auto;
          border-radius: 16px;
          box-shadow: 0 2px 12px #2d89ef22;
          background: #fff;
          animation: logoPop 1.1s cubic-bezier(.23,1.01,.32,1);
        }
        @keyframes logoPop {
          0% { opacity: 0; transform: scale(0.7) rotate(-10deg); }
          80% { opacity: 1; transform: scale(1.08) rotate(2deg); }
          100% { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        .contact-social-anim:hover {
          transform: scale(1.13) rotate(-3deg);
          box-shadow: 0 4px 18px #2d89ef33;
        }
        .testimonial-card {
          transition: box-shadow 0.3s, transform 0.3s;
        }
        .testimonial-card:hover {
          box-shadow: 0 8px 32px #43b58133;
          transform: translateY(-6px) scale(1.04);
        }
        .contact-form-anim:focus-within {
          box-shadow: 0 0 0 3px #2d89ef33;
        }
      `}</style>
      {/* Logo at top of contact page */}

      <h2 style={{ textAlign: 'center', fontSize: '2.2rem', color: '#2d2e32', marginBottom: 16, letterSpacing: 1, fontWeight: 700, textShadow: '0 2px 8px #2d89ef11' }} tabIndex={0} aria-label="Contact Us">Contact Us</h2>
      <p style={{ textAlign: 'center', color: '#444', marginBottom: 32, fontSize: 17, animation: 'fadeInUp 1.2s 0.2s both' }}>
        Reach out to us on your favorite platform, send a message, or visit us in person!
      </p>
      {/* Social Icons with tooltips and copy buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32, marginBottom: 32 }}>
        {contacts.map((c) => (
          <div key={c.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', animation: 'fadeInUp 1.1s cubic-bezier(.23,1.01,.32,1)' }}>
            <a
              href={c.url}
              target={c.name === 'Phone' || c.name === 'Email' ? undefined : '_blank'}
              rel={c.name === 'Phone' || c.name === 'Email' ? undefined : 'noopener noreferrer'}
              title={c.label}
              className="contact-social-anim"
              aria-label={c.label}
              tabIndex={0}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textDecoration: 'none',
                color: c.color,
                fontWeight: 600,
                fontSize: 18,
                width: 90,
                transition: 'transform 0.2s',
                filter: 'drop-shadow(0 2px 8px #0001)',
              }}
            >
              <span style={{ fontSize: 44, marginBottom: 8, filter: 'drop-shadow(0 2px 8px #0002)' }} aria-hidden="true">{iconMap[c.icon]}</span>
              <span style={{ color: '#222', fontSize: 15 }}>{c.name}</span>
            </a>
            {(c.name === 'Phone' || c.name === 'Email') && (
              <button
                onClick={() => handleCopy(c.url.replace('tel:', '').replace('mailto:', ''), c.name)}
                style={{ marginTop: 6, fontSize: 12, background: '#f4f7fb', border: '1px solid #eee', borderRadius: 8, padding: '2px 10px', cursor: 'pointer', boxShadow: '0 1px 4px #2d89ef11' }}
                aria-label={`Copy ${c.name}`}
              >
                {copied === c.name ? 'Copied!' : `Copy ${c.name}`}
              </button>
            )}
            <span style={{ position: 'absolute', top: -28, left: '50%', transform: 'translateX(-50%)', background: '#222', color: '#fff', borderRadius: 6, padding: '2px 10px', fontSize: 12, opacity: 0.9, pointerEvents: 'none', whiteSpace: 'nowrap', zIndex: 2, display: 'none' }} className="contact-tooltip">
              {c.label}
            </span>
          </div>
        ))}
      </div>
      {/* Animated Testimonials Carousel */}
      <div style={{ margin: '2.5rem 0', textAlign: 'center' }}>
        <h3 style={{ color: '#2d89ef', marginBottom: 18, fontSize: '1.4rem', letterSpacing: 0.5 }}>What Our Clients Say</h3>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          gap: 0,
          flexWrap: 'nowrap',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          margin: '0 auto',
          maxWidth: 800,
        }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card"
              style={{
                background: 'linear-gradient(120deg, #fff 80%, ' + t.color + '11 100%)',
                borderRadius: 22,
                boxShadow: '0 4px 24px ' + t.color + '22',
                padding: 32,
                minWidth: 280,
                maxWidth: 340,
                margin: '0 18px',
                borderTop: `5px solid ${t.color}`,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                animation: `fadeInUp 1.1s ${0.2 + i * 0.15}s both`,
                scrollSnapAlign: 'center',
                position: 'relative',
                transition: 'box-shadow 0.3s, transform 0.3s',
              }}
            >
              <span style={{
                fontSize: 54,
                marginBottom: 14,
                filter: 'drop-shadow(0 2px 8px ' + t.color + '33)',
                background: `linear-gradient(90deg, ${t.color} 60%, #fff 100%)`,
                borderRadius: '50%',
                padding: 12,
                display: 'inline-block',
                boxShadow: '0 2px 12px ' + t.color + '22',
              }}>{t.avatar}</span>
              <p style={{ color: '#444', fontStyle: 'italic', marginBottom: 10, fontSize: 17, minHeight: 60 }}>{t.text}</p>
              <span style={{ color: t.color, fontWeight: 700, fontSize: 17 }}>{t.name}</span>
              <span style={{ color: '#888', fontSize: 14, marginTop: 2 }}>{t.role}</span>
              <span style={{
                position: 'absolute',
                top: 18,
                right: 18,
                fontSize: 22,
                color: t.color,
                opacity: 0.13,
                pointerEvents: 'none',
                userSelect: 'none',
              }}>“</span>
            </div>
          ))}
        </div>
        <div style={{ color: '#aaa', fontSize: 13, marginTop: 10 }}>
          <span style={{ fontSize: 18, verticalAlign: 'middle', marginRight: 4 }}>⬅️</span> Swipe for more <span style={{ fontSize: 18, verticalAlign: 'middle', marginLeft: 4 }}>➡️</span>
        </div>
      </div>
      {/* Embedded Google Map */}
      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        <iframe
          title="Mageza ICT Hub Location"
          src="https://www.google.com/maps?q=65+Twentydales,+Hatfield,+Harare&output=embed"
          width="100%"
          height="220"
          style={{ border: 0, borderRadius: 12 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      {/* Office Hours */}
      <div style={{ textAlign: 'center', color: '#555', fontSize: '1.1rem', marginTop: 24 }}>
        <div style={{ fontWeight: 600, marginBottom: 4 }}>Physical Address:</div>
        <div>65 Twentydales, Hatfield, Harare</div>
        <div style={{ marginTop: 8, fontWeight: 500 }}>Office Hours: <span style={{ color: '#2d89ef' }}>Mon - Fri, 8:00am - 5:00pm</span></div>
      </div>
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form-anim" style={{ marginTop: 36, maxWidth: 400, marginLeft: 'auto', marginRight: 'auto', background: '#f8f9fa', borderRadius: 16, padding: 24, boxShadow: '0 2px 8px #2d89ef11', position: 'relative', animation: 'fadeInUp 1.1s 0.3s both' }}>
        <h3 style={{ textAlign: 'center', marginBottom: 18, color: '#2d2e32' }}>Send us a message</h3>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: 10, marginBottom: 12, borderRadius: 8, border: '1px solid #ccc', fontSize: 15 }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: 10, marginBottom: 12, borderRadius: 8, border: '1px solid #ccc', fontSize: 15 }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={4}
          style={{ width: '100%', padding: 10, marginBottom: 12, borderRadius: 8, border: '1px solid #ccc', fontSize: 15 }}
        />
        <button type="submit" style={{ width: '100%', background: 'linear-gradient(90deg, #2d89ef 0%, #43b581 100%)', color: '#fff', border: 'none', borderRadius: 8, padding: 12, fontWeight: 600, fontSize: 16, cursor: 'pointer', boxShadow: '0 2px 8px #2d89ef22' }}>Send</button>
        {submitted && <div style={{ color: '#43b581', marginTop: 12, textAlign: 'center', fontWeight: 500, fontSize: 16 }}>Thank you! Your message has been sent.</div>}
      </form>
      {/* Interactive FAQ Section */}
      <div style={{ marginTop: 40 }}>
        <h3 style={{ textAlign: 'center', color: '#2d2e32', marginBottom: 16 }}>Frequently Asked Questions</h3>
        <ul style={{ maxWidth: 500, margin: '0 auto', textAlign: 'left', color: '#444', fontSize: 15, lineHeight: 1.7, padding: 0, listStyle: 'none' }}>
          {faqs.map((faq, i) => (
            <li key={i} style={{ marginBottom: 14, borderBottom: '1px solid #e3eaf6', paddingBottom: 8 }}>
              <button
                onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                style={{ background: 'none', border: 'none', color: '#2d89ef', fontWeight: 600, fontSize: 15, cursor: 'pointer', padding: 0, outline: 'none', display: 'flex', alignItems: 'center', gap: 8 }}
                aria-expanded={activeFAQ === i}
                aria-controls={`faq-panel-${i}`}
              >
                <span>{faq.q}</span>
                <span style={{ fontSize: 18 }}>{activeFAQ === i ? '▲' : '▼'}</span>
              </button>
              {activeFAQ === i && (
                <div id={`faq-panel-${i}`} style={{ marginTop: 6, color: '#333', fontSize: 15, background: '#f4f8fb', borderRadius: 8, padding: 10, boxShadow: '0 1px 4px #2d89ef11' }}>
                  {faq.a}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      {/* Call to Action Banner */}
      <div style={{ marginTop: 48, background: 'linear-gradient(90deg, #2d89ef 0%, #43b581 100%)', borderRadius: 16, padding: '1.5rem 2rem', textAlign: 'center', color: '#fff', boxShadow: '0 2px 12px #2d89ef22' }}>
        <h3 style={{ margin: 0, fontSize: 22, fontWeight: 700, letterSpacing: 0.5 }}>Let’s build something amazing together!</h3>
        <p style={{ margin: '10px 0 0 0', fontSize: 16 }}>Contact us for a free quote or consultation. We’re excited to work with you!</p>
      </div>
    </div>
  );
}
