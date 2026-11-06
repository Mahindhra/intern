import React from 'react';
import { stats, personalInfo, leadershipAndActivities, personalInterests } from '../data/portfolioData';
import { UserCheck, Sparkles, Music, Utensils, Palette, Edit3, Compass, Users, Calendar, TrendingUp } from 'lucide-react';

export default function About() {
  const getInterestIcon = (name) => {
    switch (name) {
      case 'Playing Piano': return <Music size={15} />;
      case 'Cooking': return <Utensils size={15} />;
      case 'Painting': return <Palette size={15} />;
      case 'Drawing': return <Edit3 size={15} />;
      default: return <Sparkles size={15} />;
    }
  };

  const getLeadershipIcon = (title) => {
    switch (title) {
      case 'Team Leadership': return <Users size={18} />;
      case 'Event Organization': return <Calendar size={18} />;
      case 'Financial Literacy': return <TrendingUp size={18} />;
      default: return <Compass size={18} />;
    }
  };

  return (
    <section className="section" id="about" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Editorial Overview</span>
          <h2 className="section-title">A grounded foundation in computer science, structured logic, and continuous learning.</h2>
        </div>

        <div className="about-grid">
          {/* Left Column: Editorial Statement, Objective & Key Quantifiable Stats */}
          <div>
            <p className="about-intro-statement">
              "Software engineering is more than syntax — it is the disciplined synthesis of mathematical logic, clean architecture, and reliable execution."
            </p>

            <p className="about-body-text">
              Based in Visakhapatnam, Andhra Pradesh, I am an aspiring software developer with an academic background in 
              <strong> Mathematics, Electronics, and Computer Science (B.Sc. MECs)</strong> from Aditya Degree & PG College. 
              My technical work spans compiled application foundations in <strong>Java and C</strong>, full-stack web construction with 
              <strong> HTML, CSS, JavaScript, and XML</strong>, along with relational database engineering in <strong>MySQL and SQL</strong>.
            </p>

            <p className="about-body-text">
              My hands-on experience includes an intensive 5-day Android Hackathon where our team tackled live challenges, 
              as well as industry internships in <strong>AWS Cloud Computing (Adhoc Network)</strong> and 
              <strong> Artificial Intelligence & Machine Learning (ULearn)</strong>. I aim to join an innovative engineering team 
              where I can bring strong work ethic, high scholastic aptitude (97% in SSC), and collaborative problem solving.
            </p>

            {/* Quantifiable Stats Grid */}
            <div className="stats-grid">
              {stats.map((item, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-value">{item.value}</div>
                  <div className="stat-label">{item.label}</div>
                  <div className="stat-helper">{item.helper}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Leadership & Extracurriculars + Creative Interests */}
          <div className="about-side-panel">
            {/* Leadership & Campus Engagement Box */}
            <div className="info-box">
              <h3 className="info-box-title">
                <Compass size={20} />
                <span>Leadership & Extracurriculars</span>
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {leadershipAndActivities.map((act, index) => (
                  <div key={index} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      backgroundColor: 'var(--color-accent-subtle)',
                      color: 'var(--color-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {getLeadershipIcon(act.title)}
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '0.9375rem', fontWeight: 600, color: 'var(--color-text)' }}>
                        {act.title}
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', lineHeight: '1.5', marginTop: '2px' }}>
                        {act.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Creative Disciplines & Interests Box */}
            <div className="info-box">
              <h3 className="info-box-title">
                <Sparkles size={20} />
                <span>Creative Disciplines & Focus</span>
              </h3>
              <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', marginBottom: '14px' }}>
                Outside engineering, creative pursuits cultivate precision, spatial balance, and patient craftsmanship.
              </p>
              <div className="interests-pill-group">
                {personalInterests.map((interest, idx) => (
                  <div key={idx} className="interest-pill" title={interest.tag}>
                    {getInterestIcon(interest.name)}
                    <span>{interest.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
