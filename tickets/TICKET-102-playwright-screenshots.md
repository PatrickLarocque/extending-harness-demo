# TICKET-102: Verify Intake With Browser Screenshots

## Problem

We need visual confidence that the claim intake workflow renders correctly at desktop and mobile sizes.

## Scope

- Use Playwright or an agent browser.
- Exercise the empty form, validation state, and successful submission state.
- Capture screenshots for desktop and mobile.
- Prefer stable selectors and accessible labels.

## Acceptance Criteria

- A Playwright spec covers the happy path and a validation path.
- Screenshots are saved under `apps/claims-portal/e2e/screenshots/`.
- The test summary explains what was visually verified.

## Demo Prompt

> Pick up TICKET-102. Start the frontend, use Playwright or agent-browser to exercise the intake form, capture desktop and mobile screenshots, and summarize what the screenshots prove.
