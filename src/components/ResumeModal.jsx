import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Award, CheckCircle2, ExternalLink } from 'lucide-react';
import { personalInfo, educationHistory, internshipExperience, verifiedProjects, certificationsList, keyAchievement, skillCategories, leadershipAndActivities, personalInterests } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="resume-title">
      <div className="resume-modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <h3 id="resume-title" className="modal-title">Official Verified Resume</h3>
            <span className="badge" style={{ fontSize: '0.6875rem' }}>Recruiter Ready</span>
          </div>

          <div className="modal-header-actions">
            <button className="btn btn-secondary btn-sm" onClick={handlePrint} title="Print or Save as PDF">
              <Printer size={15} /> Print / Save PDF
            </button>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close resume viewer">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="modal-scrollable-body" id="printable-resume">
          {/* Resume Header */}
          <div style={{ borderBottom: '2px solid var(--color-border)', paddingBottom: '20px' }}>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--color-text)' }}>
              {personalInfo.fullName}
            </h1>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-accent)', fontWeight: 600, marginTop: '4px' }}>
              {personalInfo.title}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '12px', fontSize: '0.8125rem', color: 'var(--color-muted)' }}>
              <span>📍 {personalInfo.location}</span>
              <span>📞 {personalInfo.phone}</span>
              <span>✉️ {personalInfo.email}</span>
              <span>🐙 github.com/{personalInfo.githubUsername}</span>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 style={{ fontSize: '1.0625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text)', marginBottom: '8px', borderBottom: '1px solid var(--color-border)', paddingBottom: '4px' }}>
              Career Objective
            </h2>
            <p style={{ fontSize: '0.875rem', lineHeight: '1.7', color: 'var(--color-muted)' }}>
              {personalInfo.objective}
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 style={{ fontSize: '1.0625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text)', marginBottom: '12px', borderBottom: '1px solid var(--color-border)', paddingBottom: '4px' }}>
              Education
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {educationHistory.map((edu, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <strong style={{ fontSize: '0.9375rem', color: 'var(--color-text)' }}>{edu.institution}</strong>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-muted)' }}>{edu.location}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', marginTop: '2px' }}>
                    <span style={{ fontSize: '0.875rem', color: 'var(--color-accent)' }}>{edu.degree}</span>
                    <strong style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', color: 'var(--color-text)' }}>{edu.score}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 style={{ fontSize: '1.0625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text)', marginBottom: '10px', borderBottom: '1px solid var(--color-border)', paddingBottom: '4px' }}>
              Technical Skills
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.875rem' }}>
              <div>
                <strong>Programming Languages: </strong>
                <span>Java, C, Python (Fundamentals)</span>
              </div>
              <div>
                <strong>Web Technologies: </strong>
                <span>HTML, CSS, JavaScript, XML</span>
              </div>
              <div>
                <strong>Database Technologies: </strong>
                <span>SQL, MySQL</span>
              </div>
              <div>
                <strong>Tools & Platforms: </strong>
                <span>Git, GitHub, Apache Tomcat, MS Office</span>
              </div>
              <div>
                <strong>Soft Skills: </strong>
                <span>Communication (Pearson MePro Certified), Team Collaboration, Time Management, Problem Solving, Adaptability</span>
              </div>
            </div>
          </div>

          {/* Internships */}
          <div>
            <h2 style={{ fontSize: '1.0625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text)', marginBottom: '12px', borderBottom: '1px solid var(--color-border)', paddingBottom: '4px' }}>
              Internship Experience
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {internshipExperience.map((exp, idx) => (
                <div key={idx}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                    <strong style={{ fontSize: '0.9375rem', color: 'var(--color-text)' }}>
                      {exp.role} – <span style={{ color: 'var(--color-accent)' }}>{exp.company}</span>
                    </strong>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-muted)' }}>{exp.timeline}</span>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', marginTop: '4px', lineHeight: '1.6' }}>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects & Hackathon Live Sprint */}
          <div>
            <h2 style={{ fontSize: '1.0625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text)', marginBottom: '12px', borderBottom: '1px solid var(--color-border)', paddingBottom: '4px' }}>
              Projects & Hackathons
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <strong style={{ fontSize: '0.9375rem', color: 'var(--color-text)' }}>
                    Android Development Hackathon Live Project
                  </strong>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-muted)' }}>
                    30-09-2024 to 04-10-2024
                  </span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', marginTop: '4px', lineHeight: '1.6' }}>
                  Demonstrated exceptional skill and dedication in all live projects focusing on Android development and excelled in solving challenges presented under intense sprint deadlines.
                </p>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <strong style={{ fontSize: '0.9375rem', color: 'var(--color-text)' }}>
                    Enterprise Web Application & Database System
                  </strong>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-muted)' }}>
                    Apache Tomcat · MySQL · Java · XML
                  </span>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', marginTop: '4px', lineHeight: '1.6' }}>
                  Modular web application deployed on Apache Tomcat server container with MySQL database backend, MVC architecture, and XML configuration.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 style={{ fontSize: '1.0625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text)', marginBottom: '8px', borderBottom: '1px solid var(--color-border)', paddingBottom: '4px' }}>
              Certifications
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '0.875rem' }}>
              <div>• <strong>Microsoft Office: </strong>Certification in MS Office.</div>
              <div>• <strong>C Programming: </strong>Certification in C Language.</div>
              <div>• <strong>Pearson MePro: </strong>Communication skills certification.</div>
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 style={{ fontSize: '1.0625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text)', marginBottom: '8px', borderBottom: '1px solid var(--color-border)', paddingBottom: '4px' }}>
              Achievements
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: '1.6' }}>
              • <strong>Android Development Hackathon: </strong>Recognized for outstanding participation in a hackathon held from 30 September 2024 to 04 October 2024, focused on Android development and practical problem-solving challenges.
            </p>
          </div>

          {/* Leadership & Activities */}
          <div>
            <h2 style={{ fontSize: '1.0625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text)', marginBottom: '8px', borderBottom: '1px solid var(--color-border)', paddingBottom: '4px' }}>
              Leadership & Extracurricular Activities
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.875rem', color: 'var(--color-muted)' }}>
              <div>• <strong>Team Leadership: </strong>Coordinated team projects, distributed tasks, motivated team members, and supported timely completion.</div>
              <div>• <strong>Event Organization: </strong>Participated in organizing community-focused events to improve campus engagement.</div>
              <div>• <strong>Financial Literacy: </strong>Actively participated in trading and financial literacy activities, developing analytical and communication skills.</div>
            </div>
          </div>

          {/* Interests */}
          <div>
            <h2 style={{ fontSize: '1.0625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text)', marginBottom: '6px', borderBottom: '1px solid var(--color-border)', paddingBottom: '4px' }}>
              Interests
            </h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)' }}>
              Playing Piano, Cooking, Painting, and Drawing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
