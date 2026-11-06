import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onShowToast }) {
  const [copiedType, setCopiedType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    if (onShowToast) {
      onShowToast(`Copied ${type} to clipboard!`);
    }
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Recruiter'}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    if (onShowToast) {
      onShowToast('Opening your default email client...');
    }
  };

  return (
    <section className="section" id="contact" style={{ borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Initiate Contact</span>
          <h2 className="section-title">Open for graduate opportunities, SDE roles, and technical discussions.</h2>
        </div>

        <div className="contact-editorial-wrap">
          {/* Left Column: Oversized Typography & Direct Channels */}
          <div>
            <h3 className="contact-hero-statement">
              Let's build something <span style={{ color: 'var(--color-accent)' }}>impactful</span> together.
            </h3>

            <p className="contact-hero-desc">
              Currently based in Visakhapatnam, India. Open to relocate or work in hybrid/remote engineering roles across India. Feel free to copy my credentials, check my GitHub, or reach out directly.
            </p>

            <div className="direct-channels-list">
              {/* Email Channel */}
              <div className="contact-card-channel">
                <div className="channel-info-left">
                  <div className="channel-icon-box">
                    <Mail size={20} />
                  </div>
                  <div className="channel-meta-col">
                    <span className="channel-label">Email Address</span>
                    <a href={`mailto:${personalInfo.email}`} className="channel-value">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  className="copy-action-btn"
                  onClick={() => copyToClipboard(personalInfo.email, 'Email')}
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedType === 'Email' ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
                  <span>{copiedType === 'Email' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Channel */}
              <div className="contact-card-channel">
                <div className="channel-info-left">
                  <div className="channel-icon-box">
                    <Phone size={20} />
                  </div>
                  <div className="channel-meta-col">
                    <span className="channel-label">Phone & WhatsApp</span>
                    <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="channel-value">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  className="copy-action-btn"
                  onClick={() => copyToClipboard(personalInfo.phone, 'Phone')}
                  title="Copy phone number"
                  aria-label="Copy phone number"
                >
                  {copiedType === 'Phone' ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
                  <span>{copiedType === 'Phone' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* GitHub Channel */}
              <div className="contact-card-channel">
                <div className="channel-info-left">
                  <div className="channel-icon-box">
                    <GithubIcon size={20} />
                  </div>
                  <div className="channel-meta-col">
                    <span className="channel-label">GitHub Repository</span>
                    <span className="channel-value">github.com/{personalInfo.githubUsername}</span>
                  </div>
                </div>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="copy-action-btn"
                  style={{ textDecoration: 'none' }}
                >
                  <ArrowUpRight size={14} />
                  <span>Visit</span>
                </a>
              </div>

              {/* Location Channel */}
              <div className="contact-card-channel">
                <div className="channel-info-left">
                  <div className="channel-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div className="channel-meta-col">
                    <span className="channel-label">Current Location</span>
                    <span className="channel-value">{personalInfo.location}</span>
                  </div>
                </div>
                <span className="tag" style={{ marginLeft: 'auto' }}>
                  India
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Recruiter Direct Messaging Interface */}
          <div className="recruiter-form-card">
            <h4 className="form-card-title">Send a Quick Dispatch</h4>
            <p className="form-card-subtitle">
              Draft a direct note to schedule an interview or discuss potential developer openings.
            </p>

            <form onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="contact-name">Your Name / Organization</label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="e.g. Recruiters Team / Tech Lead"
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-email">Your Work Email</label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="recruiter@company.com"
                  className="form-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-subject">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Software Developer Opportunity"
                  className="form-input"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  required
                  placeholder="Hello Mahindhra, we reviewed your profile and would love to connect..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <Send size={16} /> Send Dispatch via Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
