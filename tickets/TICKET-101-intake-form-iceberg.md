# TICKET-101: Polish Claim Intake With Iceberg

## Problem

The claim intake screen works, but it looks like a basic scaffold. Product wants it to feel like an internal Intact workflow using Iceberg conventions.

## Scope

- Keep the Angular 21 experimental Signal Forms implementation.
- Inspect `packages/iceberg` before changing UI styles.
- In a real Intact environment, fetch and inspect the actual Iceberg source with an opensrc-style tool before assuming component APIs.
- Improve the page hierarchy, form grouping, validation presentation, and primary action state.
- Do not introduce a new UI framework.

## Acceptance Criteria

- The page uses Iceberg tokens/classes rather than one-off styles where possible.
- Required fields expose clear validation states after interaction.
- The submit button disables while the form is invalid or submitting.
- `npm run build:frontend` succeeds.

## Demo Prompt

> Pick up TICKET-101. Inspect the Angular app, the local Iceberg package, and Angular Signal Forms docs. Improve the claim intake UI while preserving Signal Forms. Run the frontend build.
