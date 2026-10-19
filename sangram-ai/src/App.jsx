import React, { useCallback, useEffect, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Landing from './components/Landing.jsx'
import ModelSelect from './components/ModelSelect.jsx'
import QuestionInput from './components/QuestionInput.jsx'
import BattleArena from './components/BattleArena.jsx'
import FinalAnswer from './components/FinalAnswer.jsx'
import { MODELS } from './data/mockData.js'

export default function App() {
  const [screen, setScreen] = useState('landing')
  const [selections, setSelections] = useState({ A: null, B: null })
  const [question, setQuestion] = useState('')

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const go = useCallback((s) => {
    setScreen(s)
    scrollTop()
  }, [])

  function handleToggle(id) {
    setSelections((cur) => {
      const isA = cur.A && cur.A.id === id
      const isB = cur.B && cur.B.id === id
      if (isA) return { ...cur, A: null }
      if (isB) return { ...cur, B: null }
      if (!cur.A) return { ...cur, A: MODELS.find((m) => m.id === id) }
      if (!cur.B) return { ...cur, B: MODELS.find((m) => m.id === id) }
      return cur // both filled; ignore extra picks
    })
  }

  function reset() {
    setSelections({ A: null, B: null })
    setQuestion('')
    go('select')
  }

  function startBattle() {
    setQuestion(document.querySelector('[data-testid="question-input"]')?.value || '')
    go('battle')
  }

  const debateKeyRef = useRef('')

  useEffect(() => {
    if (screen === 'battle') {
      debateKeyRef.current = selections.A?.id + '-vs-' + selections.B?.id + ':' + question
    }
  }, [screen])

  document.title =
    screen === 'landing'
      ? 'Sangram AI — Different Minds. One Arena.'
      : 'Sangram AI — ' + screenLabel(screen)

  return (
    <div className="app" data-testid="app-root">
      <Header
        onLogoClick={() => go('landing')}
        onNavigate={() => go('landing')}
      />
      <main className="screen-host">
        {screen === 'landing' && (
          <Landing onEnterArena={() => go('select')} onHowItWorks={() => go('select')} />
        )}
        {screen === 'select' && (
          <ModelSelect selections={selections} onToggle={handleToggle} onNext={() => go('question')} />
        )}
        {screen === 'question' && (
          <QuestionInput
            key={question}
            questions={{ question }}
            onBack={() => go('select')}
            onStart={startBattle}
          />
        )}
        {screen === 'battle' && (
          <BattleArena
            key={selections.A?.id + selections.B?.id + question}
            modelA={selections.A}
            modelB={selections.B}
            question={question}
            onReveal={() => go('answer')}
          />
        )}
        {screen === 'answer' && (
          <FinalAnswer
            modelA={selections.A}
            modelB={selections.B}
            onViewDebate={() => go('battle-review')}
            onReset={reset}
          />
        )}
        {screen === 'battle-review' && (
          <BattleArena
            key={debateKeyRef.current}
            modelA={selections.A}
            modelB={selections.B}
            question={question}
            onReveal={() => go('answer')}
          />
        )}
      </main>
    </div>
  )
}

function screenLabel(s) {
  switch (s) {
    case 'select':
      return 'Pick your challengers'
    case 'question':
      return 'What should they battle over'
    case 'battle':
      return 'The debate'
    case 'battle-review':
      return 'The debate — review'
    case 'answer':
      return 'One answer'
    default:
      return 'Different Minds. One Arena.'
  }
}
