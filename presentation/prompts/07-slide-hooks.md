---
slide: 7
title: Hooks
style: hand-drawn field-notes infographic
aspect_ratio: 16:9
sources:
  - https://code.claude.com/docs/en/hooks
---

Create a premium 16:9 presentation slide in the existing hand-drawn field-notes style.

Title text only at the top: "Hooks"

Main visual: a hand-drawn harness event loop, drawn like an IDE feedback system rather than a big architecture diagram.

Layout:
- Left: a small terminal or harness workbench with the orange pixel-art Claude blob nearby.
- Across the top or middle: a thin event rail with a few event labels:
  `PreToolUse`
  `PostToolUse`
  `FileChanged`
  `Idle`
- Under `PostToolUse`, draw a small highlighted matcher gate labeled:
  `matcher: Edit|Write`
- From that matcher, draw a cable to a small shell-script card labeled:
  `./lint-changed.sh`
- From the shell-script card, draw outputs as IDE-style feedback: a red squiggle under a code line, a checkmark, and a tiny review note.

Include one compact readable config card:

`"PostToolUse": [{`
`  "matcher": "Edit|Write",`
`  "command": "./lint-changed.sh"`
`}]`

At the bottom, draw a long horizontal context bar that stays mostly empty. Add a small note beside it:

`context unchanged`

Add a tiny optional return arrow from the hook output back to the context bar labeled:

`only if reported`

The visual should communicate: hooks run from harness events; matchers decide when they fire; the handler can run any command/script/check/review process; and the model does not pay context cost unless the hook sends something back.

Composition: more informational than a chapter card, but still sparse, hand-drawn, and easy to explain live. Keep the code snippet compact and readable.

Style: warm off-white paper background, hand-drawn ink lines, restrained orange accent, light natural shadows, modern editorial polish, legible title.

Constraints: no paragraphs, no bullet lists visible in the image, no hub-and-spoke diagram, no vendor logos, no dense technical labels. Keep all code-like text short and exactly spelled. Do not add extra explanatory text beyond the labels above.
