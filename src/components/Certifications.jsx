import React from 'react';
import { certificationsList } from '../data/portfolioData';
import { Award, FileText, Code2, Check, ShieldCheck } from 'lucide-react';

export default function Certifications() {
  const getCertIcon = (iconName) => {
    switch (iconName) {
      case 'code': return <Code2 size={24} />;
      case 'award': return <Award size={24} />;
      case 'file-text': return <FileText size={24} />;
      default: return <ShieldCheck size={24} />;
    }
  };

  return (
    <section className="section" id="certifications" style={{ borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Verified Certifications</span>
          <h2 className="section-title">Industry & academic technical credentials.</h2>
          <p className="section-subtitle">
            Formal certifications validating structured programming principles, international business communication, and professional software analysis.
          </p>
        </div>

        <div className="cert-grid">
          {certificationsList.map((cert, idx) => (
            <div key={idx} className="cert-card">
              <div>
                <div className="cert-icon-row">
                  <div className="cert-icon-circle">
                    {getCertIcon(cert.icon)}
                  </div>
                  <span className="badge">
                    <ShieldCheck size={12} /> {cert.badge}
                  </span>
                </div>

                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-issuer">Issuer: {cert.issuer}</div>
                <p className="cert-focus">{cert.credentialFocus}</p>
              </div>

              <div className="cert-skills-group">
                {cert.skillsGained.map((skill, sIdx) => (
                  <span key={sIdx} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
