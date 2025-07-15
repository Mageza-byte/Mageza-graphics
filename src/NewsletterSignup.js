import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section style={{ padding: '2rem 0', textAlign: 'center' }}>
      <h2 style={{ color: '#2d89ef', marginBottom: 16 }}>Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit} style={{ display: 'inline-flex', gap: 12, alignItems: 'center' }}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email address"
          required
          style={{ padding: '0.7rem 1.2rem', borderRadius: 24, border: '1px solid #2d89ef', fontSize: 16, outline: 'none' }}
        />
        <button type="submit" style={{ background: 'linear-gradient(90deg, #2d89ef 0%, #43b581 100%)', color: '#fff', padding: '0.7rem 1.8rem', borderRadius: 24, fontWeight: 600, fontSize: 16, border: 'none', cursor: 'pointer' }}>
          Subscribe
        </button>
      </form>
      {submitted && <div style={{ color: '#43b581', marginTop: 16 }}>Thank you for subscribing!</div>}
    </section>
  );
};

export default NewsletterSignup;
