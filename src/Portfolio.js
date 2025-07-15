
import React, { useState } from 'react';

const projects = [
  {
    title: 'Logo Design for ZimStart',
    category: 'Graphics',
    color: '#2d89ef',
    image: 'https://dummyimage.com/320x200/2d89ef/fff&text=ZimStart+Logo',
    desc: 'A modern, vibrant logo for a Zimbabwean startup.'
  },
  {
    title: 'Event Poster: TechFest 2025',
    category: 'Graphics',
    color: '#43b581',
    image: 'https://dummyimage.com/320x200/43b581/fff&text=TechFest+Poster',
    desc: 'Eye-catching event poster for a national tech festival.'
  },
  {
    title: 'Web Mockup: EduPortal',
    category: 'Web',
    color: '#fbbc05',
    image: 'https://dummyimage.com/320x200/fbbc05/fff&text=EduPortal+Mockup',
    desc: 'Responsive web design for an online learning platform.'
  },
  {
    title: 'Brand Kit: GreenLife',
    category: 'Branding',
    color: '#e1306c',
    image: 'https://dummyimage.com/320x200/e1306c/fff&text=GreenLife+Brand',
    desc: 'Full branding kit for an eco-friendly business.'
  },
  {
    title: 'Social Media Pack: FinTech',
    category: 'Graphics',
    color: '#1da1f2',
    image: 'https://dummyimage.com/320x200/1da1f2/fff&text=FinTech+Social',
    desc: 'Branded social media templates for a finance startup.'
  },
  {
    title: 'Poster: Code4Kids',
    category: 'Graphics',
    color: '#43b581',
    image: 'https://dummyimage.com/320x200/43b581/fff&text=Code4Kids+Poster',
    desc: 'Fun, educational poster for a kids coding bootcamp.'
  }
];

const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const [modal, setModal] = useState(null);
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section style={{ padding: '2rem 0', textAlign: 'center', animation: 'fadeInUp 1.1s cubic-bezier(.23,1.01,.32,1)' }}>
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .portfolio-btn {
          background: #fff;
          color: #2d89ef;
          border: 2px solid #2d89ef;
          border-radius: 24px;
          padding: 7px 22px;
          margin: 0 8px 18px 0;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, border 0.2s;
        }
        .portfolio-btn.active, .portfolio-btn:hover {
          background: linear-gradient(90deg, #2d89ef 0%, #43b581 100%);
          color: #fff;
          border: 2px solid #43b581;
        }
        .portfolio-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 2px 12px #2d89ef11;
          padding: 0;
          margin-bottom: 18px;
          min-width: 320px;
          max-width: 340px;
          overflow: hidden;
          cursor: pointer;
          transition: box-shadow 0.3s, transform 0.3s;
          animation: fadeInUp 1.1s both;
          border-top: 5px solid #2d89ef;
        }
        .portfolio-card:hover {
          box-shadow: 0 8px 32px #43b58133;
          transform: translateY(-4px) scale(1.03);
        }
        .portfolio-img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-bottom: 2px solid #e3eaf6;
        }
        .portfolio-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #2d89ef;
          margin: 12px 0 0 0;
        }
        .portfolio-desc {
          color: #555;
          font-size: 1rem;
          margin: 8px 0 16px 0;
        }
        .portfolio-modal-bg {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(44,62,80,0.45);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeInUp 0.5s;
        }
        .portfolio-modal {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 8px 32px #2d89ef33;
          padding: 2.2rem 2rem 1.5rem 2rem;
          max-width: 420px;
          width: 95vw;
          text-align: left;
          position: relative;
        }
        .portfolio-modal-close {
          position: absolute;
          top: 12px; right: 18px;
          background: none;
          border: none;
          font-size: 1.7rem;
          color: #2d89ef;
          cursor: pointer;
        }
      `}</style>
      <h2 style={{ color: '#2d89ef', marginBottom: 16 }}>Portfolio / Gallery</h2>
      <div style={{ marginBottom: 18 }}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`portfolio-btn${filter === cat ? ' active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
        {filtered.map((p, i) => (
          <div
            key={p.title}
            className="portfolio-card"
            style={{ borderTop: `5px solid ${p.color}` }}
            onClick={() => setModal(p)}
          >
            <img src={p.image} alt={p.title} className="portfolio-img" />
            <div className="portfolio-title">{p.title}</div>
            <div className="portfolio-desc">{p.desc}</div>
          </div>
        ))}
      </div>
      {modal && (
        <div className="portfolio-modal-bg" onClick={() => setModal(null)}>
          <div className="portfolio-modal" onClick={e => e.stopPropagation()}>
            <button className="portfolio-modal-close" onClick={() => setModal(null)}>&times;</button>
            <img src={modal.image} alt={modal.title} style={{ width: '100%', borderRadius: 12, marginBottom: 18 }} />
            <h3 style={{ color: modal.color, margin: 0 }}>{modal.title}</h3>
            <div style={{ color: '#555', margin: '10px 0 0 0', fontSize: 16 }}>{modal.desc}</div>
            <div style={{ marginTop: 18, color: '#888', fontSize: 14 }}>Category: <b>{modal.category}</b></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
