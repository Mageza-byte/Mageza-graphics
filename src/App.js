import React from 'react';
import './global.css';
import { Suspense, lazy } from 'react';
import magezaLogo from './mageza-logo.png';
const HeroSection = lazy(() => import('./HeroSection'));
const FeatureCard = lazy(() => import('./FeatureCard'));
const ContactPage = lazy(() => import('./ContactPage'));
const Testimonials = lazy(() => import('./Testimonials'));
const Portfolio = lazy(() => import('./Portfolio'));
const Team = lazy(() => import('./Team'));
const Blog = lazy(() => import('./Blog'));
const Pricing = lazy(() => import('./Pricing'));
const NewsletterSignup = lazy(() => import('./NewsletterSignup'));
const Resources = lazy(() => import('./Resources'));
function App() {
  const [page, setPage] = React.useState('home');
  const [darkMode, setDarkMode] = React.useState(false);

  const navBtn = (label, key) => (
    <button
      key={key}
      onClick={() => setPage(key)}
      style={{
        background: page === key
          ? 'linear-gradient(90deg, #2d89ef 60%, #43b581 100%)'
          : 'none',
        border: 'none',
        color: page === key ? '#fff' : (darkMode ? '#7db7ff' : '#222'),
        fontWeight: 700,
        fontSize: 19,
        cursor: 'pointer',
        padding: '10px 18px',
        borderRadius: page === key ? '12px 12px 0 0' : 10,
        boxShadow: page === key ? '0 4px 18px #2d89ef22' : 'none',
        margin: '0 2px',
        transition: 'all 0.22s cubic-bezier(.23,1.01,.32,1)',
        position: 'relative',
        outline: page === key ? '2px solid #43b581' : 'none',
        letterSpacing: 0.2,
      }}
      onMouseEnter={e => {
        if (page !== key) e.target.style.background = 'linear-gradient(90deg, #e3eaf6 60%, #fbbc05 100%)';
      }}
      onMouseLeave={e => {
        if (page !== key) e.target.style.background = 'none';
      }}
    >
      {label}
      {page === key && (
        <span style={{
          display: 'block',
          position: 'absolute',
          left: '50%',
          bottom: -8,
          transform: 'translateX(-50%)',
          width: 32,
          height: 4,
          borderRadius: 4,
          background: 'linear-gradient(90deg, #43b581 60%, #2d89ef 100%)',
          boxShadow: '0 2px 8px #2d89ef33',
        }} />
      )}
    </button>
  );


  return (
    <div
      className="App"
      style={{
        fontFamily: 'var(--font-family)',
        background: darkMode ? 'var(--color-dark)' : 'var(--color-background)',
        minHeight: '100vh',
        color: darkMode ? 'var(--color-text-light)' : 'var(--color-text)',
        transition: 'background 0.3s, color 0.3s'
      }}
    >
      {/* Animated MAGEZA ICT HUB title restored above navigation */}
      <header style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 8,
        background: 'linear-gradient(45deg, #f8f9fa 60%, #e3eaf6 100%)',
        boxShadow: '0 4px 18px #2d89ef11',
        borderBottom: '4px solid #2d89ef',
        position: 'relative',
        zIndex: 10
      }}>
        {/* Mageza Graphics Logo */}
        <img
          src={magezaLogo}
          alt="Mageza Graphics Logo"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = `${process.env.PUBLIC_URL}/mageza-logo.png`;
          }}
          style={{
            width: 110,
            height: 'auto',
            margin: '1.2rem 0 0.2rem 0',
            borderRadius: 18,
            boxShadow: '0 2px 12px #2d89ef22',
            background: '#fff',
            display: 'block',
            animation: 'logoPop 1.1s cubic-bezier(.23,1.01,.32,1)'
          }}
        />
        <div
          style={{
            fontFamily: 'Montserrat, Segoe UI, sans-serif',
            fontWeight: 1200,
            fontSize: '4.2rem',
            letterSpacing: 5,
            margin: '1.2rem 0 0.2rem 0',
            textShadow: '0 2px 16px #0006, 0 1px 0 #fff8',
            background: 'linear-gradient(15deg,rgb(52, 104, 79) 100%,rgb(248, 5, 5) 45%, #0f9d58 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 2px 8px #0f9d5833)',
            animation: 'rainbow-move 3.5s linear infinite',
            lineHeight: 1.1,
            userSelect: 'none',
            textAlign: 'center',
            width: '100%',
            maxWidth: 900,
          }}
        >
          MAGEZA ICT HUB
        </div>
        {/* Rainbow/gradient animation keyframes */}
        <style>{`
          @keyframes rainbow-move {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }
          
          /* Responsive font size for mobile */
          @media (max-width: 600px) {
            .App header div {
              font-size: 1.5rem !important;
            }
          }
        `}</style>
        <nav style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 32,
          padding: '0.7rem 0 0.7rem 0',
          background: 'transparent',
          flexWrap: 'wrap',
          fontFamily: 'Segoe UI, sans-serif',
          fontWeight: 700,
          fontSize: 19,
          letterSpacing: 0.2,
          position: 'relative',
        }}>
          {navBtn('Home', 'home')}
          {navBtn('Portfolio', 'portfolio')}
          {navBtn('Testimonials', 'testimonials')}
          {navBtn('Team', 'team')}
          {navBtn('Blog', 'blog')}
          {navBtn('Pricing', 'pricing')}
          {navBtn('Resources', 'resources')}
          {navBtn('Contact Us', 'contact')}
          <button
            onClick={() => setDarkMode(dm => !dm)}
            style={{
              background: darkMode ? '#222' : '#e3eaf6',
              border: 'none',
              color: darkMode ? '#f8f9fa' : '#2d89ef',
              fontWeight: 600,
              fontSize: 18,
              cursor: 'pointer',
              padding: 8,
              borderRadius: 24,
              marginLeft: 16,
              minWidth: 44
            }}
            aria-label="Toggle dark mode"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </nav>
      </header>

      <Suspense fallback={<div style={{textAlign:'center',margin:'3rem',fontSize:'1.5rem'}}>Loading...</div>}>
        {page === 'home' && (
          <>
            <HeroSection />
            <main style={{ maxWidth: 900, margin: '2rem auto', background: darkMode ? '#23272f' : '#fff', borderRadius: 16, boxShadow: '0 4px 24px #0002', padding: '2.5rem 2rem', transition: 'background 0.3s' }}>
              <section style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', color: darkMode ? '#7db7ff' : '#2d2e32', marginBottom: 8 }}>Why Choose Mageza Hub?</h2>
                <p style={{ fontSize: '1.15rem', color: darkMode ? '#cfd8dc' : '#444' }}>We empower your digital journey with creativity, knowledge, and reliable support — all in one place.</p>
              </section>
              <FeatureCard icon="🎨" title="Graphics Services" color="#2d89ef">
                <ul style={{ textAlign: 'left', margin: 0, paddingLeft: 20 }}>
                  <li>Custom logos, posters, and branding kits</li>
                  <li>Social media content and ad creatives</li>
                  <li>Fast turnaround and unlimited revisions</li>
                </ul>
              </FeatureCard>
              <FeatureCard icon="💻" title="Tutoring Services" color="#43b581">
                <ul style={{ textAlign: 'left', margin: 0, paddingLeft: 20 }}>
                  <li>1-on-1 and group sessions (virtual or in-person)</li>
                  <li>Programming, algorithms, and data structures</li>
                  <li>Exam prep and project guidance</li>
                  <li>Flexible scheduling to fit your needs</li>
                  <li>For all your Computer Science and IT related content</li>
                </ul>
              </FeatureCard>
              <FeatureCard icon="🛠️" title="ICT Support" color="#fbbc05">
                <ul style={{ textAlign: 'left', margin: 0, paddingLeft: 20 }}>
                  <li>Troubleshooting and repairs (hardware & software)</li>
                  <li>Network setup and configuration</li>
                  <li>Remote and onsite support</li>
                  <li>Affordable, friendly, and fast</li>
                </ul>
              </FeatureCard>
              <section style={{ margin: '2.5rem 0 0 0', textAlign: 'center' }}>
                <h2 style={{ color: '#2d89ef', fontSize: '1.5rem', marginBottom: 8 }}>Ready to get started?</h2>
                <p style={{ fontSize: '1.1rem', marginBottom: 24 }}>Contact us for a free consultation or quote. Let’s build something amazing together!</p>
                <button onClick={() => setPage('contact')} style={{ background: 'linear-gradient(90deg, #2d89ef 0%, #43b581 100%)', color: '#fff', padding: '0.9rem 2.2rem', borderRadius: 32, fontWeight: 600, fontSize: '1.1rem', border: 'none', boxShadow: '0 2px 8px #2d89ef33', transition: 'background 0.3s', cursor: 'pointer' }}>Contact Us</button>
              </section>
            </main>
            <NewsletterSignup />
          </>
        )}
        {page === 'portfolio' && <Portfolio />}
        {page === 'testimonials' && <Testimonials />}
        {page === 'team' && <Team />}
        {page === 'blog' && <Blog />}
        {page === 'pricing' && <Pricing />}
        {page === 'resources' && <Resources />}
        {page === 'contact' && <ContactPage />}
      </Suspense>

      <footer style={{ textAlign: 'center', color: darkMode ? '#aaa' : '#888', margin: '2.5rem 0 1rem 0', fontSize: '1rem' }}>
        &copy; {new Date().getFullYear()} Mageza Hub. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
