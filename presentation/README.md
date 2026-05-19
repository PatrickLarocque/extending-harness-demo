# Presentation Assets

This folder contains the slide images, prompts, speaker notes, and generated PowerPoint for **Extending the Harness**.

## Files

- `slides/` — final slide PNGs.
- `prompts/` — reproducible image-generation prompts.
- `speaker-notes.md` — talk track and demo prompts.
- `scripts/build-pptx.mjs` — stitches PNGs into a PowerPoint and embeds speaker notes.
- `deck/extending-the-harness.pptx` — generated deck.

## Rebuild

```bash
node presentation/scripts/build-pptx.mjs
```

The script expects the slide PNGs to exist in `presentation/slides/`.
In this Codex desktop workspace, the script uses the bundled `pptxgenjs` runtime path.
