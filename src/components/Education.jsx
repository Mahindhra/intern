import React from 'react';
import { educationHistory } from '../data/portfolioData';
import { GraduationCap, Award, MapPin, CheckCircle2, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section className="section" id="education" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Academic Pedigree</span>
          <h2 className="section-title">Rigorous foundational education in mathematics & computer science.</h2>
          <p className="section-subtitle">
            Formal collegiate and secondary school credentials reflecting academic rigor and disciplined study.
          </p>
        </div>

        <div className="education-grid">
          {educationHistory.map((edu, idx) => (
            <div key={idx} className="edu-card">
              <div className="edu-top">
                <div className="edu-score-badge">
                  <Award size={15} />
                  <span>{edu.score}</span>
                </div>

                <h3 className="edu-institution">{edu.institution}</h3>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-location">
                  <MapPin size={13} style={{ display: 'inline', marginRight: '4px' }} />
                  {edu.location}
                </div>
              </div>

              <div>
                <p className="edu-desc">{edu.description}</p>

                <ul className="edu-highlights">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx}>
                      <CheckCircle2 size={15} />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
