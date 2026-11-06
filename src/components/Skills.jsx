import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Code2, Globe, Database, Cpu, Users, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'code': return <Code2 size={22} />;
      case 'globe': return <Globe size={22} />;
      case 'database': return <Database size={22} />;
      case 'cpu': return <Cpu size={22} />;
      case 'users': return <Users size={22} />;
      default: return <Code2 size={22} />;
    }
  };

  return (
    <section className="section" id="skills" style={{ borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Technical Competencies</span>
          <h2 className="section-title">Structured skill architecture across application layers.</h2>
          <p className="section-subtitle">
            A comprehensive overview of programming languages, web standards, databases, platforms, and soft skills validated through coursework, certifications, and live hackathons.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category-panel">
              <div className="skill-header">
                <div className="skill-icon-wrap">
                  {getCategoryIcon(cat.icon)}
                </div>
                <div>
                  <h3 className="skill-category-name">{cat.category}</h3>
                  <p className="skill-category-desc">{cat.description}</p>
                </div>
              </div>

              <div className="skills-list">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-item">
                    <div className="skill-name-col">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}</span>
                    </div>
                    <span className="skill-badge">{skill.badge}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
