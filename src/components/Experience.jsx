import React from 'react';
import { internshipExperience } from '../data/portfolioData';
import { Briefcase, CheckCircle2, Calendar, MapPin, ExternalLink } from 'lucide-react';

export default function Experience() {
  return (
    <section className="section" id="experience" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Industry Internships</span>
          <h2 className="section-title">Hands-on practical experience in cloud systems and machine intelligence.</h2>
          <p className="section-subtitle">
            Formal engineering internships focused on cloud infrastructure fundamentals with AWS and machine learning workflows.
          </p>
        </div>

        <div className="timeline">
          {internshipExperience.map((exp, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-node"></div>
              
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <div className="timeline-company">{exp.company}</div>
                  </div>
                  <div className="timeline-date-badge">
                    {exp.timeline}
                  </div>
                </div>

                <p className="timeline-desc">
                  {exp.description}
                </p>

                <ul className="timeline-bullets">
                  {exp.keyPoints.map((point, pIdx) => (
                    <li key={pIdx}>
                      <CheckCircle2 size={16} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '16px', borderTop: '1px solid var(--color-border-subtle)' }}>
                  {exp.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
