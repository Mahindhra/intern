import React from 'react';
import { ArrowUp, Heart, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer-wrap">
      <div className="container footer-inner">
        <div className="footer-col-left">
          <div className="footer-author">{personalInfo.fullName}</div>
          <div className="footer-colophon">
            Modern Editorial + Minimal Developer Portfolio · {personalInfo.title}
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-muted)', marginTop: '4px' }}>
            Built with React, Vite & Modern CSS3. Visakhapatnam, Andhra Pradesh, India.
          </div>
        </div>

        <div>
          <button
            onClick={scrollToTop}
            className="footer-back-to-top"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}
