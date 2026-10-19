import React, { useEffect, useRef, useState } from 'react'
import { ModelBadge, Thinking, SkeletonCard } from './Shared.jsx'
import { MOCK_DEBATES, ROUNDS } from '../data/mockData.js'

// Which transcript bucket to use for a given question.
function bucketFor(q) {
  const t = q.toLowerCase()
  if (/(python|javascript|code|programming|language|framework|stack)/.test(t)) return 'code'
  if (/(learn|career|next|technology|study|course)/.test(t)) return 'career'
  return 'generic'
}

// Safely flatten the nested rounds array from MOCK_DEBATES.
function flattenRounds(rounds) {
  if (!rounds) return []
  return Array.isArray(rounds[0]) ? rounds.flat(Infinity) : [rounds]
    .filter(Boolean)
    .map((msg, i) => ({ ...msg, roundLabel: ROUNDS[Math.floor(i / 2)] }))
}

export default function BattleArena({ modelA, modelB, question, onReveal }) {
  const [visible, setVisible] = useState([])
  const [thinking, setThinking] = useState(null) // { slot }
  const [roundIndex, setRoundIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const timelineRef = useRef(null)

  useEffect(() => {
    const bucket = MOCK_DEBATES[bucketFor(question)]
    const seq = flattenRounds(bucket?.rounds)
    let cancelled = false
    let i = 0

    function step() {
      if (cancelled) return
      const cur = seq[i]
      if (!cur) {
        setThinking(null)
        return
      }
      setThinking({ slot: cur.slot })
      const delay = 1100 + Math.random() * 700
      setTimeout(() => {
        if (cancelled || !cur) return
        setVisible((v) => [...v, cur])
        setThinking(null)
        setProgress(Math.round(((i + 1) / Math.max(seq.length, 1)) * 100))
        setRoundIndex(Math.floor(i / 2) + (cur.slot === 'B' ? 1 : 0))
        i += 1
        setTimeout(step, 500)
      }, delay)
    }
    step()
    return () => {
      cancelled = true
    }
  }, [question, modelA, modelB])

  useEffect(() => {
    if (timelineRef.current) {
      timelineRef.current.scrollTo({ top: timelineRef.current.scrollHeight, behavior: 'smooth' })
    }
  }, [visible, thinking])

  const done = visible.length === 8

  return (
    <section className="screen arena" data-testid="battle-arena-section">
      <div className="container arena-head">
        <div className="arena-vs">
          <ModelBadge model={modelA} slot="A" />
          <span className="vs-pill" data-testid="arena-vs">vs</span>
          <ModelBadge model={modelB} slot="B" />
        </div>
        <div className="arena-meta">
          <p className="kicker">— THE DEBATE</p>
          <h2 className="screen-title sm">One question. <span className="text-cyan">Many angles.</span></h2>
          <p className="arena-question" data-testid="arena-question">
            “{question}”
          </p>
        </div>
        <div className="progress-block">
          <span className="round-indicator" data-testid="round-indicator">
            Round {Math.min(roundIndex + 1, 4)}/4 · {ROUNDS[Math.min(roundIndex, 3)]}
          </span>
          <div className="progress-bar" data-testid="progress-bar">
            <div className="progress-fill" style={{ width: progress + '%' }} data-testid="progress-fill" />
          </div>
        </div>
      </div>

      <div className="container timeline-wrap">
        <div className="timeline" ref={timelineRef} data-testid="debate-timeline">
          {visible.map((m, i) => (
            <Message key={i} msg={m} index={i} />
          ))}
          {thinking && (
            <div className={'msg ' + (thinking.slot === 'A' ? 'msg-a' : 'msg-b')} data-testid="thinking-bubble">
              <div className="msg-head">
                <span className={'who who-' + thinking.slot}>
                  {thinking.slot === 'A' ? modelA.name : modelB.name}
                </span>
                <span className="thinking-label">is thinking</span>
              </div>
              <Thinking />
            </div>
          )}
          {!thinking && visible.length === 0 && (
            <>
              <SkeletonCard />
              <SkeletonCard />
            </>
          )}
        </div>
      </div>

      <div className="container arena-footer">
        <button
          className="btn btn-primary reveal-btn"
          disabled={!done}
          onClick={onReveal}
          data-testid="btn-reveal-final-answer"
        >
          {done ? 'Reveal Final Answer ✦' : 'Debate in progress...'}
        </button>
      </div>
    </section>
  )
}

function Message({ msg, index }) {
  if (!msg || !msg.slot) return null
  const slot = msg.slot
  const cls = 'msg ' + (slot === 'A' ? 'msg-a' : 'msg-b') + (index > 0 ? ' enter' : '')
  return (
    <div className={cls} data-testid={'message-' + slot}>
      <div className="msg-head">
        <span className={'who who-' + slot}>{slot === 'A' ? 'Model A' : 'Model B'}</span>
        {msg.repliesTo && (
          <span className="quote-chip" data-testid="quote-chip">
            ↳ replying to {msg.repliesTo}: “{msg.quote}”
          </span>
        )}
      </div>
      <p className="msg-text">{msg.text || ''}</p>
    </div>
  )
}
