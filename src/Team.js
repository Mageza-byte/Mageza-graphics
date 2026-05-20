import React from 'react';
import magezaLogo from './mageza-logo.png';


const team = [
  {
    name: 'Mike Washaya',
    initials: 'MM',
    color: '#2d89ef',
    title: 'Founder & Lead Designer',
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    qualifications: 'Msc Computer Science, NUST',
    experience: '10+ years in branding, digital art, and creative direction. Led 100+ successful projects for startups and corporates.'
  },
  {
    name: 'Promise Washaya',
    initials: 'PW',
    color: '#43b581',
    title: 'ICT Support Specialist',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    qualifications: 'BSc Computer Science, MSU',
    experience: '7 years in ICT support, networking, and systems admin. Certified Cisco and Microsoft specialist.'
  },
  {
    name: 'Prince Washaya',
    initials: 'PW',
    color: '#fbbc05',
    title: 'Tutor & Developer',
    photo: 'https://randomuser.me/api/portraits/men/65.jpg',
    qualifications: 'MSc Computer Science, UZ',
    experience: '5+ years teaching programming, algorithms, and software engineering. Passionate about student success.'
  }
];

const Team = () => (
  <section style={{ padding: '2rem 0', textAlign: 'center', animation: 'fadeInUp 1.1s cubic-bezier(.23,1.01,.32,1)' }}>
    <style>{`
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(40px) scale(0.98); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      .team-card {
        background: #fff;
        border-radius: 18px;
        box-shadow: 0 2px 12px #2d89ef11;
        padding: 28px 24px 18px 24px;
        min-width: 260px;
        max-width: 320px;
        margin-bottom: 18px;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: box-shadow 0.3s, transform 0.3s;
        animation: fadeInUp 1.1s both;
        border-top: 5px solid #2d89ef;
      }
      .team-card:hover {
        box-shadow: 0 8px 32px #43b58133;
        transform: translateY(-4px) scale(1.03);
      }
      .team-photo {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        object-fit: cover;
        margin-bottom: 12px;
        border: 4px solid #e3eaf6;
        box-shadow: 0 2px 8px #2d89ef22;
      }
      .team-name {
        font-size: 1.2rem;
        font-weight: 700;
        margin: 0;
      }
      .team-title {
        color: #888;
        font-size: 1rem;
        margin: 4px 0 8px 0;
      }
      .team-qual {
        color: #2d89ef;
        font-size: 0.98rem;
        font-weight: 600;
        margin-bottom: 4px;
      }
      .team-exp {
        color: #555;
        font-size: 0.97rem;
        margin-bottom: 0;
      }
    `}</style>
    <h2 style={{ color: '#2d89ef', marginBottom: 16 }}>Meet the Team</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32 }}>
      {team.map((m, i) => (
        <div key={i} className="team-card" style={{ borderTop: `5px solid ${m.color}` }}>
          <img src={m.photo} alt={m.name} className="team-photo" />
          <h3 className="team-name" style={{ color: m.color }}>{m.name}</h3>
          <div className="team-title">{m.title}</div>
          <div className="team-qual">{m.qualifications}</div>
          <div className="team-exp">{m.experience}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Team;
