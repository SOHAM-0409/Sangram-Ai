export const MODELS = [
  {
    id: 'gpt4o',
    provider: 'OpenAI',
    name: 'GPT-4o',
    color: '#00D9FF',
    icon: 'openai',
    description: 'Precise reasoning with a sharp analytical edge.',
  },
  {
    id: 'gemini',
    provider: 'Google',
    name: 'Gemini 2.0',
    color: '#4285FF',
    icon: 'gemini',
    description: 'Fast, broad thinking built for creative synthesis.',
  },
  {
    id: 'claude',
    provider: 'Anthropic',
    name: 'Claude 3.5',
    color: '#FFC46B',
    icon: 'claude',
    description: 'Thoughtful analysis with nuance and clarity.',
  },
  {
    id: 'llama',
    provider: 'Meta',
    name: 'Llama 3.1',
    color: '#C77DFF',
    icon: 'llama',
    description: 'Open intelligence with a practical point of view.',
  },
]

export const ROUNDS = ['Opening Arguments', 'Counterarguments', 'Rebuttals', 'Final Discussion']

export const SUGGESTIONS = [
  'Python vs JavaScript for beginners.',
  'Which technology should I learn next?',
  'What is the best solution to this coding problem?',
]

// Two generic mock transcripts keyed by question bucket (code / career / general).
// Messages reference the other model's argument via `repliesTo` (slot A/B) + `quote`.
const generic = {
  rounds: [
    [
      {
        slot: 'A',
        text: 'Opening argument: I would frame this around proven fundamentals first. A method with strong evidence lets you build confidence early, and every later decision compounds on that base. Skip the shortcuts; invest in the core.',
      },
      {
        slot: 'B',
        repliesTo: 'A',
        quote: 'invest in the core',
        text: 'I disagree with my opponent on emphasis. Fundamentals matter, but momentum matters more. Pick the path with the richest ecosystem and fastest feedback loop, and you will learn the fundamentals naturally on the way.',
      },
    ],
    [
      {
        slot: 'A',
        repliesTo: 'B',
        quote: 'momentum matters more',
        text: 'Momentum without direction is churn. When my opponent says "learn the fundamentals naturally," that usually means filling random gaps under pressure. Structured fundamentals give you a map; then momentum is an accelerator, not a substitute.',
      },
      {
        slot: 'B',
        repliesTo: 'A',
        quote: 'Momentum without direction',
        text: 'Deep theory first is exactly how people stall in the "endless tutorial loop." Counterpoint: skills are built by shipping. Start from a concrete goal and let the fundamentals arrive as required — that is how seniors actually work.',
      },
    ],
    [
      {
        slot: 'A',
        repliesTo: 'B',
        quote: 'start from a concrete goal',
        text: 'On the concrete goal we actually agree — so the real trade-off is sequencing. I maintain the fundamentals-first view for durability, but I accept goal-driven projects are the best way to make fundamentals stick.',
      },
      {
        slot: 'B',
        repliesTo: 'A',
        quote: 'sequencing',
        text: 'Conceded in part: structure has real value — but only when anchored to output. My refined position: choose a goal, then work a curated fundamentals track alongside it. Theory and shipping are allies, not rivals.',
      },
    ],
    [
      {
        slot: 'A',
        text: 'Final position: a hybrid wins — a rigorous core, exercised through real projects from day one.',
      },
      {
        slot: 'B',
        text: 'Final position: projects lead, fundamentals reinforce — and we were never far apart on that.',
      },
    ],
  ],
}

const code = {
  rounds: [
    [
      {
        slot: 'A',
        text: 'Opening argument: correctness and readability come first. A clear, well-typed solution costs minutes to write and saves hours of debugging. Any performance claim must be measured before it is trusted.',
      },
      {
        slot: 'B',
        repliesTo: 'A',
        quote: 'correctness and readability come first',
        text: 'Respectfully, that ordering skips the real-world constraint: time. In practice you profile first, fix the hot path, and keep the code ugly only where the data says so. Premature elegance can be as costly as premature optimization.',
      },
    ],
    [
      {
        slot: 'A',
        repliesTo: 'B',
        quote: 'profile first, fix the hot path',
        text: 'My opponent frames it as either/or, but profiling is not a substitute for structure — it depends on it. You cannot reason about a hot path in a tangle of side effects. Clean boundaries make profiles actionable.',
      },
      {
        slot: 'B',
        repliesTo: 'A',
        quote: 'clean boundaries make profiles actionable',
        text: 'I will grant that — boundaries help measurement. Counterpoint remains: keep them minimal. Over-abstracting before the second usage is how teams drown in indirection no profile ever asked for.',
      },
    ],
    [
      {
        slot: 'A',
        repliesTo: 'B',
        quote: 'over-abstracting before the second usage',
        text: 'We converge here: three similar rules of thumb — measure before optimizing, abstract only on duplication, and keep types honest at the edges. I will concede "first make it work" clearly, with tests as the spine.',
      },
      {
        slot: 'B',
        repliesTo: 'A',
        quote: 'tests as the spine',
        text: 'Agreed, and that is the synthesis: tests first, minimal structure, measured optimization. My position was never "write spaghetti" — it was "let evidence, not aesthetics, drive the polish."',
      },
    ],
    [
      {
        slot: 'A',
        text: 'Final position: correctness via tests, minimal structure at boundaries, and evidence-driven optimization.',
      },
      {
        slot: 'B',
        text: 'Final position: ship the simple version, measure, then refine exactly where the profile points.',
      },
    ],
  ],
}

const career = {
  rounds: [
    [
      {
        slot: 'A',
        text: 'Opening argument: choose by depth, not hype. The field that compounds — where year three is dramatically stronger than year one — will outperform whatever is fashionable this quarter.',
      },
      {
        slot: 'B',
        repliesTo: 'A',
        quote: 'outperform whatever is fashionable',
        text: 'Trend-spotting is not shallowness — it is optionality. Emerging stacks have odd proportionally more opportunities at the top. Depth matters, but only in a field that will still exist in ten years.',
      },
    ],
    [
      {
        slot: 'A',
        repliesTo: 'B',
        quote: 'optionality',
        text: 'Optionality is only valuable if you exercise it, and churn destroys compounding. My counterpoint: pick the durable core, and let fashion be a bonus — a strong base adapts to any trend in months, not years.',
      },
      {
        slot: 'B',
        repliesTo: 'A',
        quote: 'durable core',
        text: 'Fine — but the durable core today includes ecosystems that did not exist five years ago. "Classical fundamentals only" underweights how fast the ground shifts. Blend: one durable base, one emerging bet kept warm.',
      },
    ],
    [
      {
        slot: 'A',
        repliesTo: 'B',
        quote: 'one emerging bet kept warm',
        text: 'Actually a fair synthesis proposal. I will concede that a small enabled bet, capped at ~20% of learning time, is rational. My core claim survives: the base gets the other 80%.',
      },
      {
        slot: 'B',
        repliesTo: 'A',
        quote: 'capped at ~20%',
        text: 'Accepted — 80/20 in favor of fundamentals is closer to my intent than my original framing suggested. We disagree on the boundary, not the strategy.',
      },
    ],
    [
      {
        slot: 'A',
        text: 'Final position: ~80% depth in a durable core, ~20% maintained exposure to an emerging bet.',
      },
      {
        slot: 'B',
        text: 'Final position: the same — and review the split every six months as evidence changes.',
      },
    ],
  ],
}

export const MOCK_DEBATES = { code, career, generic }

export const MOCK_FINAL_ANSWER = {
  headline: 'The synthesized final answer',
  body: `After four rounds of challenge and concession, the strongest points of both models converge on one unified answer.

**The core position.** Depth in a durable base compounds; breadth without a base churns. But momentum is a force multiplier — so structure learning around a concrete goal, with fundamentals reinforcing it.

**On trade-offs.** Where the models disagreed — sequencing, polish, emerging bets — the resolution was not a compromise but a split with explicit ratios: roughly 80% to the foundational depth, 20% to the exploratory edge, re-balanced as evidence changes.

**Why this is stronger than either opening position.** Model A's rigor prevented thrash; Model B's pragmatism prevented stall. The debate exposed the failure mode of each pure position — endless preparation versus aimless shipping — and the unified answer avoids both.

**What to watch for.** The one condition on which this holds: honest measurement. Re-check assumptions periodically, because the correct 80/20 boundary is a function of your context, not a constant.`,
}
