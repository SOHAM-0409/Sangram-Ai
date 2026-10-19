import React, { useState } from 'react'
import { SUGGESTIONS } from '../data/mockData.js'

export default function QuestionInput({ questions, onBack, onStart }) {
  const [question, setQuestion] = useState(questions.question)
  const [touched, setTouched] = useState(false)
  const chars = question.length
  const valid = question.trim().length > 0

  return (
    <section className="screen" data-testid="question-section">
      <div className="container screen-head">
        <div>
          <p className="kicker">— THE QUESTION</p>
          <h2 className="screen-title">
            What Should They <span className="text-cyan">Battle Over?</span>
          </h2>
          <p className="screen-sub">One clear question. Four rounds. One synthesized answer.</p>
        </div>
        <div className="step-rail">
          <div className="step-total">02 / 02</div>
        </div>
      </div>

      <div className="container">
        <label className="label" htmlFor="question-input" data-testid="question-label">
          Your question
        </label>
        <textarea
          id="question-input"
          className={'question-textarea' + (touched && !valid ? ' invalid' : '')}
          placeholder="Ask anything. Let the AI models challenge each other's reasoning..."
          maxLength={500}
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onBlur={() => setTouched(true)}
          data-testid="question-input"
          rows={4}
        />
        <div className="question-meta">
          <span className="length" data-testid="char-counter">
            {chars}/500
          </span>
        </div>

        {touched && !valid && (
          <p className="error" data-testid="question-error">
            Enter a question before starting the battle.
          </p>
        )}

        <p className="label-suggestions">Need ideas? Try one of these:</p>
        <div className="suggestions" data-testid="suggestion-list">
          {SUGGESTIONS.map((s) => (
            <button key={s} className="chip" onClick={() => setQuestion(s)} data-testid={'suggestion-' + s.slice(0, 10).replace(/\W+/g, '')}>
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="container" data-testid="question-footer">
        <button className="btn btn-ghost" onClick={onBack} data-testid="btn-back-models">
          ← Back to Models
        </button>
        <div className="footer-right">
          <button className="btn btn-primary" disabled={!valid} onClick={() => (valid ? onStart() : setTouched(true))} data-testid="btn-start-battle">
            Start Battle ⚔
          </button>
        </div>
      </div>
    </section>
  )
}
