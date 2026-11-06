import React from 'react';
import { verifiedProjects } from '../data/portfolioData';
import { Check, Terminal, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Projects() {
  return (
    <section className="section" id="projects" style={{ borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Verified Implementations</span>
          <h2 className="section-title">Applied engineering work & live challenge solutions.</h2>
          <p className="section-subtitle">
            Authentic projects and live architectures grounded directly in hackathon deliverables, server deployments, and verified technical competencies.
          </p>
        </div>

        <div className="projects-container">
          {verifiedProjects.map((project, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <article
                key={project.id}
                className={`project-card-editorial ${isReversed ? 'reversed' : ''}`}
              >
                {/* Content Side */}
                <div className="project-content">
                  <div>
                    <div className="project-top-meta">
                      <span className="project-category">{project.category}</span>
                      <span className="badge">
                        <ShieldCheck size={13} /> {project.badge}
                      </span>
                    </div>

                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.description}</p>

                    <ul className="project-deliverables">
                      {project.deliverables.map((item, dIdx) => (
                        <li key={dIdx}>
                          <Check size={16} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tags-wrap">
                    {project.technologies.map((tech, tIdx) => (
                      <span key={tIdx} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Code / Architecture Preview Side */}
                <div className="project-preview">
                  <div className="code-mockup-header">
                    <div className="window-dots">
                      <span className="dot dot-red"></span>
                      <span className="dot dot-yellow"></span>
                      <span className="dot dot-green"></span>
                    </div>
                    <span className="code-label">{project.tagline}</span>
                  </div>

                  <pre className="code-snippet">
                    <code>{project.visualCode}</code>
                  </pre>

                  {/* Architecture Metrics Grid */}
                  <div className="project-metrics-row">
                    {Object.entries(project.metrics).map(([key, val], mIdx) => (
                      <div key={mIdx} className="metric-pill">
                        <span className="metric-pill-val">{val}</span>
                        <span className="metric-pill-label">{key}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
