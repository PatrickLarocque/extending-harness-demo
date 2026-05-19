# TICKET-101: Migrate Claim Intake To Signal Forms

## Problem

The claim intake screen works with standard Reactive Forms, but the team wants to trial Angular 21's experimental Signal Forms API.

This is intentionally a sharp-edged task for the demo: try it once with a generic agent, then install or enable Angular-specific Signal Forms guidance and compare the result.

## Scope

- Migrate the form from Reactive Forms to Angular 21 experimental Signal Forms.
- Use `@angular/forms/signals`; do not keep `FormBuilder`, `FormGroup`, or `formControlName` in the final component.
- Follow Angular's Signal Forms docs or an Angular Signal Forms skill before editing.
- Preserve the current page layout and behavior while changing the form implementation.

## Acceptance Criteria

- The component uses Signal Forms rather than Reactive Forms.
- Required fields expose clear validation states after interaction.
- The submit button disables while the form is invalid or submitting.
- `npm run build:frontend` succeeds.

## Demo Prompt

> Pick up TICKET-101. Migrate the claim intake form from Reactive Forms to Angular 21 Signal Forms and run the frontend build. If you are unsure about Signal Forms, read the relevant docs or installed Angular skills first.
