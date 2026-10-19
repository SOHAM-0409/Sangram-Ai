import React from 'react'
import { MODELS } from '../data/mockData.js'

export default function ModelIcon({ icon, size = 28 }) {
  const stroke = MODELS.find((m) => m.icon === icon)?.color || '#00D9FF'
  const wrapper = { width: size, height: size, flexShrink: 0 }
  switch (icon) {
    case 'openai':
      return (
        <svg style={wrapper} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8" stroke={stroke} strokeWidth="1.6" />
          <circle cx="12" cy="12" r="3.2" stroke={stroke} strokeWidth="1.6" />
        </svg>
      )
    case 'gemini':
      return (
        <svg style={wrapper} viewBox="0 0 24 24" fill={stroke} aria-hidden="true">
          <path d="M12 2c.6 5.4 4.6 9.4 10 10-5.4.6-9.4 4.6-10 10-.6-5.4-4.6-9.4-10-10 5.4-.6 9.4-4.6 10-10z" />
        </svg>
      )
    case 'claude':
      return (
        <svg style={wrapper} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4.4" y="4.4" width="15.2" height="15.2" rx="4" transform="rotate(45 12 12)" stroke={stroke} strokeWidth="1.6" />
          <rect x="9" y="9" width="6" height="6" transform="rotate(45 12 12)" fill={stroke} opacity="0.55" />
        </svg>
      )
    case 'llama':
      return (
        <svg style={wrapper} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="7.4" stroke={stroke} strokeWidth="1.6" />
          <circle cx="12" cy="12" r="3.4" fill={stroke} />
        </svg>
      )
    default:
      return null
  }
}
