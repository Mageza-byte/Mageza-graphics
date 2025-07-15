import React, { useState } from 'react';

const resources = [
// Add a category property to each resource for tab filtering
  {
    name: 'Sample Logo Design Brief (PDF)',
    color: '#2d89ef',
    icon: '📄',
    href: '#',
    desc: 'A template to help you communicate your brand vision to designers.',
    badge: 'New',
    category: 'Graphics'
  },
  {
    name: 'ICT Troubleshooting Checklist (PDF)',
    color: '#43b581',
    icon: '📄',
    href: '#',
    desc: 'Step-by-step guide for diagnosing common ICT issues.',
    badge: 'Popular',
    category: 'ICT'
  },
  {
    name: 'Tutoring Syllabus Outline (PDF)',
    color: '#fbbc05',
    icon: '📄',
    href: '#',
    desc: 'Overview of our tutoring curriculum and topics covered.',
    category: 'Tutoring'
  },
  {
    name: 'Branding Inspiration Pack (ZIP)',
    color: '#e1306c',
    icon: '🖼️',
    href: '#',
    desc: 'A collection of sample logos, color palettes, and font ideas.',
    category: 'Graphics'
  },
  {
    name: 'Free Social Media Templates (PPTX)',
    color: '#1da1f2',
    icon: '📊',
    href: '#',
    desc: 'Editable PowerPoint templates for your business posts.',
    badge: 'New',
    category: 'Graphics'
  },
  {
    name: 'Student Project Planner (XLSX)',
    color: '#43b581',
    icon: '📅',
    href: '#',
    desc: 'Excel sheet to help students organize and track their projects.',
    category: 'Tutoring'
  },
  {
    name: 'ICT Support Quick Reference (PDF)',
    color: '#2d89ef',
    icon: '🛠️',
    href: '#',
    desc: 'Handy reference for quick ICT fixes and contacts.',
    category: 'ICT'
  }
];

const categories = ['All', 'Graphics', 'Tutoring', 'ICT'];

const Resources = () => {
  const [activeTab, setActiveTab] = useState('All');
  const filteredResources = activeTab === 'All' ? resources : resources.filter(r => r.category === activeTab);
  return (
    <section style={{ padding: '2rem 0', textAlign: 'center', animation: 'fadeInUp 1.1s cubic-bezier(.23,1.01,.32,1)' }}>
      <style>{`
      .dashboard-tabs {
        display: flex;
        justify-content: center;
        gap: 18px;
        margin-bottom: 32px;
      }
      .dashboard-tab {
        background: #f4f8fb;
        color: #2d89ef;
        border: none;
        border-radius: 8px 8px 0 0;
        padding: 10px 28px;
        font-size: 1.08rem;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 2px 8px #2d89ef11;
        transition: background 0.2s, color 0.2s, box-shadow 0.2s;
        outline: none;
        position: relative;
      }
      .dashboard-tab.active, .dashboard-tab:focus {
        background: linear-gradient(90deg, #2d89ef 60%, #43b581 100%);
        color: #fff;
        box-shadow: 0 4px 16px #2d89ef22;
        z-index: 2;
      }
      .dashboard-tab:hover:not(.active) {
        background: #eaf3fa;
        color: #43b581;
      }
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(40px) scale(0.98); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      .resource-card {
        background: #fff;
        border-radius: 16px;
        box-shadow: 0 2px 12px #2d89ef11;
        padding: 18px 22px;
        margin-bottom: 18px;
        display: flex;
        align-items: flex-start;
        gap: 18px;
        min-width: 320px;
        max-width: 420px;
        transition: box-shadow 0.3s, transform 0.3s;
        animation: fadeInUp 1.1s both;
        position: relative;
      }
      .resource-card:hover {
        box-shadow: 0 8px 32px #43b58133;
        transform: translateY(-4px) scale(1.03);
      }
      .resource-icon {
        font-size: 2.1rem;
        margin-top: 2px;
      }
      .resource-link {
        color: inherit;
        text-decoration: none;
        font-weight: 600;
        font-size: 1.1rem;
        transition: color 0.2s;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        position: relative;
      }
      .resource-link .download-anim {
        display: inline-block;
        margin-left: 6px;
        font-size: 1.2em;
        transition: transform 0.2s;
      }
      .resource-link:hover {
        text-decoration: underline;
        color: #2d89ef;
      }
      .resource-link:hover .download-anim {
        transform: translateY(2px) scale(1.2) rotate(-12deg);
        animation: bounceDown 0.5s;
      }
      @keyframes bounceDown {
        0% { transform: translateY(0) scale(1) rotate(0); }
        40% { transform: translateY(6px) scale(1.2) rotate(-12deg); }
        100% { transform: translateY(2px) scale(1.2) rotate(-12deg); }
      }
      .resource-desc {
        color: #555;
        font-size: 0.98rem;
        margin-top: 2px;
      }
      .badge {
        display: inline-block;
        background: linear-gradient(90deg, #2d89ef 60%, #43b581 100%);
        color: #fff;
        font-size: 0.75rem;
        font-weight: 700;
        border-radius: 8px;
        padding: 2px 10px;
        margin-left: 10px;
        letter-spacing: 0.5px;
        box-shadow: 0 1px 4px #2d89ef22;
        vertical-align: middle;
        animation: badgePop 0.7s cubic-bezier(.23,1.01,.32,1);
      }
      .badge-popular {
        background: linear-gradient(90deg, #fbbc05 60%, #e1306c 100%);
      }
      @keyframes badgePop {
        0% { opacity: 0; transform: scale(0.7); }
        80% { opacity: 1; transform: scale(1.15); }
        100% { opacity: 1; transform: scale(1); }
      }
    `}</style>
      <h2 style={{ color: '#2d89ef', marginBottom: 16 }}>Downloadable Resources</h2>
      <div className="dashboard-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`dashboard-tab${activeTab === cat ? ' active' : ''}`}
            onClick={() => setActiveTab(cat)}
            tabIndex={0}
            aria-selected={activeTab === cat}
          >
            {cat}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
        {filteredResources.length === 0 ? (
          <div style={{ color: '#888', fontSize: 17, marginTop: 32 }}>No resources in this category yet.</div>
        ) : (
          filteredResources.map((r, i) => (
        <div key={i} className="resource-card" style={{ borderTop: `4px solid ${r.color}` }}>
          <span className="resource-icon" style={{ color: r.color }}>{r.icon}</span>
          <div>
            <a href={r.href} download className="resource-link" style={{ color: r.color }}>
              {r.name}
              <span className="download-anim" role="img" aria-label="Download">⬇️</span>
              {r.badge && (
                <span className={`badge${r.badge === 'Popular' ? ' badge-popular' : ''}`}>{r.badge}</span>
              )}
            </a>
            <div className="resource-desc">{r.desc}</div>
          </div>
        </div>
          ))
        )}
      </div>
      <div style={{ marginTop: 32, color: '#888', fontSize: 15 }}>
        Looking for something else? <a href="#" style={{ color: '#2d89ef', fontWeight: 600 }}>Contact us</a> for custom resources or requests!
      </div>
    </section>
  );
};

export default Resources;
