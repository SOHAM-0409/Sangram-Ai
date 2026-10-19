import React from 'react'
import ModelIcon from './ModelIcon.jsx'
import { VsIndicator } from './Shared.jsx'

export default function Landing({ onEnterArena, onHowItWorks }) {
  const features = [
    {
      title: 'Choose Your Models',
      text: 'Pick any two different AI minds — each with its own reasoning style and priorities.',
      id: 'feature-models',
    },
    {
      title: 'Watch the AI Battle',
      text: 'Four rounds of opening arguments, counterarguments, rebuttals and final discussion — one shared arena.',
      id: 'feature-battle',
    },
    {
      title: 'Get One Final Answer',
      text: 'The strongest insights from both sides are synthesized into a single, consolidated answer.',
      id: 'feature-answer',
    },
  ]

  return (
    <section className="landing" data-testid="landing-section">
      <div className="container">
        <div className="hero press-title">
          <p className="kicker" data-testid="landing-kicker">
            — AI BATTLE ARENA
          </p>
          <h1 className="hero-title" data-testid="hero-heading">
            What Happens When <span className="text-cyan">AI Challenges AI?</span>
          </h1>
          <p className="hero-sub" data-testid="hero-subtitle">
            Choose your AI models. Enter your question. Watch them challenge each
            other&#39;s reasoning and work toward one ultimate answer.
          </p>
          <div className="hero-cta">
            <button className="btn btn-primary" onClick={onEnterArena} data-testid="btn-enter-arena">
              Enter the Arena →
            </button>
            <button className="btn btn-ghost" onClick={onHowItWorks} data-testid="btn-how-it-works">
              How It Works
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="arena-visual" data-testid="arena-visual">
          <div className="visual-side">
            <div className="visual-orb" style={{ borderColor: '#00D9FF', color: '#00D9FF' }}>
              <span className="orb-mark">A</span>
            </div>
            <div className="visual-name model-a-text" data-testid="visual-model-a">
              OpenAI GPT-4o
            </div>
            <div className="visual-desc">Precision. Structure. Evidence.</div>
          </div>

          <VsIndicator size="lg" />

          <div className="visual-side">
            <div className="visual-orb" style={{ borderColor: '#4285FF', color: '#4285FF' }}>
              <span className="orb-mark">B</span>
            </div>
            <div className="visual-name model-b-text" data-testid="visual-model-b">
              Google Gemini 2.0
            </div>
            <div className="visual-desc">Breadth. Synthesis. Speed.</div>
          </div>
        </div>
      </div>

      <div className="container features" data-testid="features">
        {features.map((f) => (
          <div className="feature-card" key={f.id} data-testid={f.id}>
            <div className="feature-glow" />
            <h3>{f.title}</h3>
            <p>{f.text}</p>
          </div>
        ))}
      </div>

      <footer className="site-footer" data-testid="site-footer">
        <div className="container footer-inner">
          <div className="brand-sm">
            <img src="/sangram-logo.jpeg" alt="Sangram AI logo" className="footer-logo" data-testid="footer-logo" />
            <span className="brand-name-sm">
              SANGRAM <em>AI</em>
            </span>
          </div>
          <p className="tagline-sm" data-testid="footer-tagline">
            Different Minds. One Arena.
          </p>
        </div>
      </footer>
    </section>
  )
}
