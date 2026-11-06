import React from 'react';
import { ArrowDown, FileText, Code2, Award, MapPin, Mail, Layers } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      const topOffset = 80;
      const elementPosition = projectsEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="section hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Asymmetric Editorial Information */}
          <div className="hero-left">
            <div className="hero-status-pill">
              <span className="status-dot"></span>
              <span>Available for Software Developer Roles</span>
            </div>

            <div className="mono-label" style={{ marginBottom: '14px', letterSpacing: '0.12em' }}>
              ASPIRING SOFTWARE DEVELOPER · VISAKHAPATNAM, INDIA
            </div>

            <h1 className="hero-headline">
              Engineering reliable software with clarity, precision, and modern systems.
              <br />
              <span className="name-highlight">I'm {personalInfo.preferredName}.</span>
            </h1>

            <p className="hero-intro">
              {personalInfo.objective}
            </p>

            <div className="hero-ctas">
              <a href="#projects" className="btn btn-primary" onClick={scrollToProjects}>
                View Projects <Layers size={16} />
              </a>

              <button className="btn btn-secondary" onClick={onOpenResume}>
                <FileText size={16} /> Download Resume
              </button>
            </div>

            {/* Technical Metadata Row */}
            <div className="hero-meta-row">
              <div className="hero-meta-item">
                <MapPin size={15} />
                <span>{personalInfo.location}</span>
              </div>
              <div className="hero-meta-item">
                <GithubIcon size={15} />
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'underline' }}
                >
                  github.com/{personalInfo.githubUsername}
                </a>
              </div>
              <div className="hero-meta-item">
                <Mail size={15} />
                <span>{personalInfo.email}</span>
              </div>
            </div>

            {/* Small Scroll Indicator */}
            <div className="scroll-indicator-wrap" aria-hidden="true">
              <div className="scroll-mouse">
                <div className="scroll-wheel"></div>
              </div>
              <span>Scroll to explore</span>
            </div>
          </div>

          {/* Right Column: Refined Editorial Portrait & Floating Badges */}
          <div className="hero-right">
            <div className="portrait-container">
              <div className="portrait-geometric-accent"></div>

              {/* Floating Badge Top */}
              <div className="floating-badge floating-badge-top">
                <div className="floating-icon-wrap">
                  <Code2 size={20} />
                </div>
                <div className="floating-text-wrap">
                  <span className="floating-title">Core Stack</span>
                  <span className="floating-subtitle">Java · SQL · Web · Tomcat</span>
                </div>
              </div>

              {/* Verified Portrait Frame */}
              <div className="portrait-frame">
                <img
                  src={personalInfo.portrait}
                  alt="Doddi Mahindhra"
                  className="portrait-img"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to stylized abstract monogram if local image fails
                    e.target.style.display = 'none';
                    if (e.target.parentNode) {
                      e.target.parentNode.style.display = 'flex';
                      e.target.parentNode.style.alignItems = 'center';
                      e.target.parentNode.style.justifyContent = 'center';
                      e.target.parentNode.style.background = 'linear-gradient(135deg, #17191C 0%, #315CFD 100%)';
                      e.target.parentNode.innerHTML = '<div style="color:white; font-family:var(--font-heading); font-size:4rem; font-weight:700;">DM</div>';
                    }
                  }}
                />
              </div>

              {/* Floating Badge Bottom */}
              <div className="floating-badge floating-badge-bottom">
                <div className="floating-icon-wrap" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10B981' }}>
                  <Award size={20} />
                </div>
                <div className="floating-text-wrap">
                  <span className="floating-title">Hackathon Recognition</span>
                  <span className="floating-subtitle">Android Live Challenges (2024)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
