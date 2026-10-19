import React, { useState } from 'react'
import { MOCK_FINAL_ANSWER } from '../data/mockData.js'
import { ModelBadge, VsIndicator } from './Shared.jsx'

export default function FinalAnswer({ modelA, modelB, onViewDebate, onReset }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(MOCK_FINAL_ANSWER.body)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className="screen" data-testid="final-answer-section">
      <div className="container final-head">
        <div className="final-vs">
          <ModelBadge model={modelA} slot="A" />
          <VsIndicator />
          <ModelBadge model={modelB} slot="B" />
        </div>
        <h2 className="screen-title center">
          One Answer. <span className="text-cyan">Stronger Together.</span>
        </h2>
        <p className="screen-sub center" data-testid="final-subtitle">
          Synthesized from the strongest insights of the debate.
        </p>
      </div>

      <div className="container">
        <div className="final-card" data-testid="final-answer-card">
          <div className="final-glow" />
          <h3 className="final-card-title" data-testid="final-answer-headline">
            {MOCK_FINAL_ANSWER.headline}
          </h3>
          <div className="final-body" data-testid="final-answer-body">
            {MOCK_FINAL_ANSWER.body.split('\n\n').map((para, i) => (
              <p
                key={i}
                dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="container final-actions" data-testid="final-actions">
        <button className="btn btn-primary" onClick={copy} data-testid="btn-copy-answer">
          {copied ? '✓ Copied' : 'Copy Answer'}
        </button>
        <button className="btn btn-ghost" onClick={onViewDebate} data-testid="btn-view-debate">
          View Full Debate
        </button>
        <button className="btn btn-outline" onClick={onReset} data-testid="btn-try-another">
          Try Another Battle ↺
        </button>
      </div>
    </section>
  )
}
