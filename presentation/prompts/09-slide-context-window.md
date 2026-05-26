---
slide: 9
title: Context Window
style: hand-drawn field-notes infographic
aspect_ratio: 16:9
sources:
  - https://platform.claude.com/docs/en/agents-and-tools/tool-use/manage-tool-context
  - https://platform.claude.com/docs/en/build-with-claude/prompt-caching
  - https://developers.openai.com/api/docs/guides/prompt-caching
  - https://arxiv.org/abs/2602.16069
  - https://arxiv.org/abs/2601.15300
---

Create a premium 16:9 presentation slide in the existing hand-drawn field-notes style.

Title text only at the top: "Context Window"

Main visual: a sparse two-part field note about context management.

Part 1, upper half: draw a long horizontal context window bar, like a delicate measuring tube. Fill it from left to right with labeled blocks:

- system
- tool defs
- skills
- docs
- tool results
- conversation

At the far right, leave a shrinking blank region labeled:

`room to think`

Near the crowded side, draw a small shaky gauge labeled:

`quality gets fragile`

Show a few small external inputs trying to enter the bar: MCP tools, skill docs, PRs, tickets. Do not draw too many.

Part 2, lower half: draw a prompt caching sketch. A bracket around the left side of a prompt says:

`stable prefix`

The stable prefix includes small chips:

`tools`
`system`
`instructions`

Draw that prefix going into a small cache box labeled:

`cache`

Then show two paths:

- a green/quiet path labeled `hit: cheap`
- an orange cracked path where a `tool defs changed` chip breaks the prefix, labeled `miss: recalc`

Include the recurring orange pixel-art Claude blob mascot holding a small measuring tape beside the context bar. The blob has no mouth, black square eyes, two stubby side arms, and four short legs.

The visual should communicate: context is finite; more surface area competes for the same window; long/full contexts can make work more brittle; prompt caching helps when the beginning of the prompt is stable; changing tool definitions or other prefix content can invalidate the cache.

Composition: clear, airy, and practical. More informational than the chapter cards, but still hand-drawn and not text-dominant.

Style: warm off-white paper background, hand-drawn ink lines, restrained orange accent, light natural shadows, modern editorial polish, legible title.

Constraints: no paragraphs, no bullet lists visible in the image, no vendor logos, no dense technical labels, no exact dollar pricing. Keep labels short and exactly spelled. Do not add extra explanatory text beyond the labels above.
