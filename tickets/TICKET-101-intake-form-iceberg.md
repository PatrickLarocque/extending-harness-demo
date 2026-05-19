# TICKET-101: Migrate Claim Intake To Signal Forms + Iceberg

## Problem

The claim intake screen works with standard Reactive Forms, but the team wants to trial Angular 21's experimental Signal Forms API while also making the UI feel closer to an internal Intact workflow using Iceberg conventions.

This is intentionally a sharp-edged task for the demo: try it once with a generic agent, then install or enable Angular-specific Signal Forms guidance and compare the result.

## Scope

- Migrate the form from Reactive Forms to Angular 21 experimental Signal Forms.
- Use `@angular/forms/signals`; do not keep `FormBuilder`, `FormGroup`, or `formControlName` in the final component.
- Follow Angular's Signal Forms docs or an Angular Signal Forms skill before editing.
- Inspect `packages/iceberg` before changing UI styles.
- In a real Intact environment, fetch and inspect the actual Iceberg source with an opensrc-style tool before assuming component APIs.
- Improve the page hierarchy, form grouping, validation presentation, and primary action state.
- Do not introduce a new UI framework.

## Acceptance Criteria

- The component uses Signal Forms rather than Reactive Forms.
- The page uses Iceberg tokens/classes rather than one-off styles where possible.
- Required fields expose clear validation states after interaction.
- The submit button disables while the form is invalid or submitting.
- `npm run build:frontend` succeeds.

## Demo Prompt

> Pick up TICKET-101. Migrate the claim intake form from Reactive Forms to Angular 21 Signal Forms, inspect the local Iceberg package before styling, and run the frontend build. If you are unsure about Signal Forms, read the relevant docs or installed Angular skills first.
