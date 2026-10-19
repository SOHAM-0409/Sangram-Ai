import React from 'react'
import ModelIcon from './ModelIcon.jsx'

export default function Header({ onNavigate, onLogoClick }) {
  return (
    <header className="site-header" data-testid="site-header">
      <div className="container header-inner">
        <button className="brand" onClick={onLogoClick} data-testid="brand-home">
          <img src="/sangram-logo.jpeg" alt="Sangram AI logo" className="brand-logo" data-testid="brand-logo" />
          <span className="brand-name">
            SANGRAM <em>AI</em>
          </span>
        </button>
        <div className="header-actions">
          <button className="link-btn" onClick={onNavigate} data-testid="nav-how-it-works">
            ⓘ How it works
          </button>
          <span className="badge" data-testid="status-badge">
            ● Prototype mode
          </span>
        </div>
      </div>
    </header>
  )
}
