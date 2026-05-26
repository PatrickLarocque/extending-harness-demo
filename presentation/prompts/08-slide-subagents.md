---
slide: 8
title: Subagents
style: hand-drawn field-notes infographic
aspect_ratio: 16:9
sources:
  - https://code.claude.com/docs/en/sub-agents
---

Create a premium 16:9 presentation slide in the existing hand-drawn field-notes style.

Title text only at the top: "Subagents"

Main visual: a parent harness delegating bounded work to specialized mini-agents, with visible context separation.

Layout:
- Left: a main terminal/workbench with the orange pixel-art Claude blob at the controls.
- In the center: a small delegation card labeled:
  `delegate task`
- Right side: three small specialist agent bubbles, each with a tiny orange pixel-art blob and a separate little context window:
  `reviewer`
  `researcher`
  `tester`
- Each specialist bubble should have its own small context bar labeled:
  `separate context`
- Draw compact result notes flowing back to the main harness:
  `findings`
  `summary`
  `patch`

Include one small readable agent file card:

`.claude/agents/reviewer.md`
`---`
`description: Review changed code`
`tools: Read, Grep, Bash`
`---`

Add one tiny side note near the main context bar:

`main context stays cleaner`

Add one tiny caution note near the returning result notes:

`still needs integration`

The visual should communicate: subagents are specialized assistants with their own prompts, tool permissions, and isolated context windows; the main harness sends them bounded tasks and receives compact results back. Do not imply that more agents automatically means better engineering.

Composition: clear, airy, and field-note-like. More informational than a chapter card, but less dense than a technical documentation slide.

Style: warm off-white paper background, hand-drawn ink lines, restrained orange accent, light natural shadows, modern editorial polish, legible title.

Constraints: no paragraphs, no bullet lists visible in the image, no hub-and-spoke diagram, no vendor logos, no dense technical labels. Keep all code-like text short and exactly spelled. Do not add extra explanatory text beyond the labels above.
