
import React from 'react';

const posts = [
  {
    title: 'How to Choose the Right Logo for Your Brand',
    color: '#2d89ef',
    image: 'https://dummyimage.com/600x220/2d89ef/fff&text=Logo+Design',
    tags: ['Graphics', 'Branding'],
    excerpt: 'Tips and insights on creating a memorable, effective logo for your business or project.'
  },
  {
    title: 'Top 5 ICT Support Tips for Small Businesses',
    color: '#43b581',
    image: 'https://dummyimage.com/600x220/43b581/fff&text=ICT+Support',
    tags: ['ICT', 'Support'],
    excerpt: 'Simple ways to keep your tech running smoothly and avoid common pitfalls.'
  },
  {
    title: 'Learning to Code: Where to Start?',
    color: '#fbbc05',
    image: 'https://dummyimage.com/600x220/fbbc05/fff&text=Learn+to+Code',
    tags: ['Tutoring', 'Programming'],
    excerpt: 'A beginner’s guide to programming, resources, and how Mageza Hub can help.'
  },
  {
    title: 'Branding Trends 2025',
    color: '#e1306c',
    image: 'https://dummyimage.com/600x220/e1306c/fff&text=Branding+Trends',
    tags: ['Branding', 'Trends'],
    excerpt: 'What’s hot in branding and design for the coming year.'
  },
  {
    title: 'Why Every Business Needs a Website',
    color: '#1da1f2',
    image: 'https://dummyimage.com/600x220/1da1f2/fff&text=Business+Website',
    tags: ['Web', 'Business'],
    excerpt: 'The benefits of having a professional online presence.'
  }
];

const Blog = () => (
  <section style={{ padding: '2rem 0', textAlign: 'center', animation: 'fadeInUp 1.1s cubic-bezier(.23,1.01,.32,1)' }}>
    <style>{`
      @keyframes fadeInUp {
        0% { opacity: 0; transform: translateY(40px) scale(0.98); }
        100% { opacity: 1; transform: translateY(0) scale(1); }
      }
      .blog-card {
        background: #fff;
        border-radius: 18px;
        box-shadow: 0 2px 12px #2d89ef11;
        padding: 0 0 18px 0;
        margin-bottom: 18px;
        max-width: 600px;
        text-align: left;
        overflow: hidden;
        animation: fadeInUp 1.1s both;
        border-top: 5px solid #2d89ef;
        margin-left: auto;
        margin-right: auto;
      }
      .blog-img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-bottom: 2px solid #e3eaf6;
      }
      .blog-title {
        font-size: 1.3rem;
        font-weight: 700;
        color: #2d89ef;
        margin: 16px 0 0 0;
      }
      .blog-tags {
        margin: 8px 0 0 0;
      }
      .blog-tag {
        display: inline-block;
        background: linear-gradient(90deg, #2d89ef 60%, #43b581 100%);
        color: #fff;
        font-size: 0.8rem;
        font-weight: 700;
        border-radius: 8px;
        padding: 2px 10px;
        margin-right: 8px;
        margin-bottom: 4px;
        letter-spacing: 0.5px;
        box-shadow: 0 1px 4px #2d89ef22;
        vertical-align: middle;
      }
      .blog-excerpt {
        color: #555;
        font-size: 1.05rem;
        margin: 10px 0 0 0;
      }
    `}</style>
    <h2 style={{ color: '#2d89ef', marginBottom: 16 }}>Blog & Resources</h2>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
      {posts.map((post, i) => (
        <article key={i} className="blog-card" style={{ borderTop: `5px solid ${post.color}` }}>
          <img src={post.image} alt={post.title} className="blog-img" />
          <div className="blog-title" style={{ color: post.color }}>{post.title}</div>
          <div className="blog-tags">
            {post.tags.map(tag => (
              <span key={tag} className="blog-tag">{tag}</span>
            ))}
          </div>
          <div className="blog-excerpt">{post.excerpt}</div>
        </article>
      ))}
    </div>
  </section>
);

export default Blog;
