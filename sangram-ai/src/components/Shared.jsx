import React from 'react'
import ModelIcon from './ModelIcon.jsx'
import { MODELS } from '../data/mockData.js'

export function ModelBadge({ model, slot }) {
  return (
    <div className={'model-badge ' + (slot === 'A' ? 'badge-a' : 'badge-b')} data-testid={'model-badge-' + slot}>
      <ModelIcon icon={model.icon} size={22} />
      <span>{model.name}</span>
      <small>Slot {slot}</small>
    </div>
  )
}

export function VsIndicator({ size = 'md' }) {
  return (
    <div className={'vs vs-' + size} data-testid="vs-indicator" aria-label="versus">
      VS
    </div>
  )
}

export function Thinking() {
  return (
    <span className="thinking" data-testid="thinking-indicator" aria-label="thinking">
      <span className="thinking-dot" />
      <span className="thinking-dot" style={{ animationDelay: '0.15s' }} />
      <span className="thinking-dot" style={{ animationDelay: '0.3s' }} />
    </span>
  )
}

export function SkeletonCard() {
  return (
    <div className="skeleton-card" data-testid="skeleton-card">
      <div className="skeleton-line" style={{ width: '40%' }} />
      <div className="skeleton-line" style={{ width: '88%' }} />
      <div className="skeleton-line" style={{ width: '70%' }} />
    </div>
  )
}

export default MODELS
