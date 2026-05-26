---
slide: 5
title: MCP
style: hand-drawn field-notes infographic
aspect_ratio: 16:9
sources:
  - https://code.claude.com/docs/en/mcp
  - https://modelcontextprotocol.io/docs/learn/server-concepts
  - https://www.mcp.academy/concepts/tools-vs-resources-vs-prompts
---

Create a premium 16:9 presentation slide in the existing hand-drawn field-notes style.

Title text only at the top: "MCP"

Main visual: a hand-drawn protocol trace, still sparse and field-notes-like. It should show what an MCP connection looks like from the client side without becoming a documentation slide.

Layout:
- Left: a small notebook/code card labeled ".mcp.json" with this short readable config:
  `{ "github": { "command": "npx", "args": ["@github/mcp"] } }`
- Center: a simple connector box labeled "MCP server"
- Right: a larger returned card labeled "tools/list" showing two compact tool definitions:
  `create_issue(input_schema)`
  `search_repos(input_schema)`
- Bottom or side: the harness/system prompt as a long horizontal context bar. Show the returned tool definitions being inserted into the left side of that bar.

Add three small tags near the MCP server:
- tools
- resources
- prompts

Add one small handwritten side note near the context bar:
"not free: tool definitions take context"

Include the recurring orange pixel-art Claude blob mascot near the harness/context bar. The blob has no mouth, black square eyes, two stubby side arms, and four short legs.

The visual should communicate that MCP is a standard way for a harness to discover tools/resources/prompts and pass usable definitions to the model. Also hint that exposing many tools has a context cost. Do not make it feel alarmist.

Composition: clean, slightly more informational than the previous chapter-card slides, but still airy. The code cards should be small and readable, with the rest of the page mostly visual.

Style: warm off-white paper background, hand-drawn ink lines, restrained orange accent, light natural shadows, modern editorial polish, legible title.

Constraints: no paragraphs, no bullet lists visible in the image, no large code block, no hub-and-spoke diagram, no vendor logos, no dense technical labels. Keep the snippets short and exactly spelled. Do not add extra explanatory text beyond the labels and one side note.
