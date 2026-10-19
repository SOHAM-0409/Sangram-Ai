import React, { useState } from 'react'
import ModelIcon from './ModelIcon.jsx'
import { MODELS } from '../data/mockData.js'
import { VsIndicator } from './Shared.jsx'

export default function ModelSelect({ selections, onToggle, onNext }) {
  const [slotStage, setSlotStage] = useState(0)

  const pickedA = selections.A
  const pickedB = selections.B
  const bothPicked = pickedA && pickedB
  const missingCount = (pickedA ? 0 : 1) + (pickedB ? 0 : 1)

  function handleToggle(id) {
    onToggle(id)
    setSlotStage(missingCount === 1 ? 1 : slotStage)
  }

  function slotName(slot) {
    const m = selections[slot]
    return m ? m.name : 'Choose a model'
  }

  return (
    <section className="screen" data-testid="model-select-section">
      <div className="container screen-head">
        <div>
          <p className="kicker">— CONFIGURE YOUR MATCH</p>
          <h2 className="screen-title">
            Pick your <span className="text-cyan">challengers.</span>
          </h2>
          <p className="screen-sub">Two minds enter. One answer leaves.</p>
        </div>
        <div className="step-rail">
          <div className="step-current">01</div>
          <div className="step-total">/ 02</div>
        </div>
      </div>

      <div className="container slots-row" data-testid="selected-slots">
        <SlotPill slot="A" model={pickedA} />
        <VsIndicator />
        <SlotPill slot="B" model={pickedB} />
      </div>

      {!bothPicked && (
        <div className="container" data-testid="missing-slot-warning" aria-live="polite">
          <span className="hint">
            {missingCount === 2 ? 'Select two different models to continue.' : 'One more model needed — must be different from the other slot.'}
          </span>
        </div>
      )}

      <div className="container" data-testid="model-grid">
        {MODELS.map((m, i) => {
          const isA = pickedA && pickedA.id === m.id
          const isB = pickedB && pickedB.id === m.id
          const selected = isA || isB
          const disabled = !selected && (isA || isB) // unreachable, kept for clarity
          return (
            <button
              key={m.id}
              className={'model-card' + (selected ? ' selected' : '') + (disabled ? ' dim' : '')}
              onClick={() => handleToggle(m.id)}
              data-testid={'model-card-' + m.id}
              data-slot={isA ? 'A' : isB ? 'B' : ''}
              aria-pressed={selected}
            >
              <div className="model-card-head">
                <ModelIcon icon={m.icon} size={30} />
                <span className="select-corner">{selected ? (isA ? 'A ✓' : 'B ✓') : '+'}</span>
              </div>
              <span className="provider">{m.provider}</span>
              <span className="model-name">{m.name}</span>
              <p className="model-desc">{m.description}</p>
              <span className={'slot-tag' + (selected ? ' show ' + (isA ? 'tag-a' : 'tag-b') : '')}>
                {selected ? 'Slot ' + (isA ? 'A' : 'B') : 'Tap to pick'}
              </span>
              <span className={'round-label' + (i === 2 ? ' vs-anchor' : '')}> {''} </span>
            </button>
          )
        })}
      </div>

      <div className="container" data-testid="select-footer">
        <div className="footer-left">
          <span className="hint" data-testid="slot-a-hint">
            MODEL A: <b>{slotName('A')}</b>
          </span>
          <span className="hint" data-testid="slot-b-hint">
            MODEL B: <b>{slotName('B')}</b>
          </span>
        </div>
        <button className="btn btn-primary" disabled={!bothPicked} onClick={onNext} data-testid="btn-next-question">
          Next: The Question →
        </button>
      </div>
    </section>
  )
}

function SlotPill({ slot, model }) {
  return (
    <div className={'slot-pill' + (model ? ' filled' : '')} data-testid={'slot-pill-' + slot}>
      <span className="slot-label">MODEL {slot}</span>
      <span className="slot-name">{model ? model.name : 'Choose a model'}</span>
    </div>
  )
}
