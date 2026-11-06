import React from 'react';
import { keyAchievement, leadershipAndActivities } from '../data/portfolioData';
import { Trophy, Award, Calendar, CheckCircle2, Users, TrendingUp, Sparkles } from 'lucide-react';

export default function Achievements() {
  return (
    <section className="section" id="achievements" style={{ borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-label">Honors & Milestones</span>
          <h2 className="section-title">Competitive hackathon recognition & live problem-solving.</h2>
        </div>

        {/* Distinctive Highlighted Achievement Block */}
        <div className="achievement-banner">
          <div className="achievement-inner">
            <div className="achievement-left">
              <div className="achievement-trophy-badge">
                <Trophy size={16} />
                <span>{keyAchievement.badge}</span>
              </div>

              <h3 className="achievement-title">{keyAchievement.title}</h3>
              <div className="achievement-date">
                <Calendar size={14} style={{ display: 'inline', marginRight: '6px' }} />
                {keyAchievement.date} · {keyAchievement.organization}
              </div>

              <p className="achievement-statement">
                "{keyAchievement.statement}"
              </p>
            </div>

            <div className="achievement-metrics-grid">
              {keyAchievement.metrics.map((metric, idx) => (
                <div key={idx} className="achievement-metric-card">
                  <span className="achievement-metric-lbl">{metric.label}</span>
                  <span className="achievement-metric-val">{metric.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Leadership & Activities Summary */}
        <div className="leadership-grid">
          {leadershipAndActivities.map((item, idx) => (
            <div key={idx} className="leadership-card">
              <div className="leadership-icon">
                {idx === 0 ? <Users size={20} /> : idx === 1 ? <Calendar size={20} /> : <TrendingUp size={20} />}
              </div>
              <h4 className="leadership-title">{item.title}</h4>
              <p className="leadership-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
