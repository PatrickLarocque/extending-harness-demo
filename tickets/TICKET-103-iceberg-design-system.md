# TICKET-103: Implement Iceberg Design System Treatment

## Problem

The claim intake screen is functional, but it still feels like a generic Angular scaffold. Product wants the page to feel like an internal Intact workflow using Iceberg conventions.

This ticket is about source-aware design-system work: the agent should inspect Iceberg before inventing components or one-off styles.

## Scope

- Inspect `packages/iceberg` before changing UI styles.
- In a real Intact environment, fetch and inspect the actual Iceberg package source with an opensrc-style tool before assuming component APIs.
- Improve page hierarchy, form grouping, validation presentation, density, responsive behavior, and primary action state.
- Prefer Iceberg tokens/classes where possible.
- Keep the existing form implementation unless another ticket has already migrated it.
- Do not introduce a new UI framework.

## Acceptance Criteria

- The page uses Iceberg tokens/classes rather than one-off styles where practical.
- The form reads clearly at desktop and mobile sizes.
- Required fields expose clear validation states after interaction.
- The submit button state is visually obvious.
- `npm run build:frontend` succeeds.
- If browser tooling is available, capture a screenshot or describe the visual verification.

## Demo Prompt

> Pick up TICKET-103. Inspect the local Iceberg package first, then improve the claim intake screen so it feels like an Iceberg-based internal workflow. Run the frontend build and use browser screenshots if available.
