# Demo Script

This runbook keeps the live demo focused on harness surface area rather than repository trivia.

## Segment 1: Ticket + Repo + Design System

Open `tickets/TICKET-101-intake-form-iceberg.md`.

First, ask the agent without installing any Angular Signal Forms skill:

> Pick up TICKET-101. Migrate the claim intake form to Angular 21 Signal Forms and make it feel more like an Iceberg-based internal workflow. Use only the repo context you already have, then run the frontend build.

Then install or enable the Angular Signal Forms skill and ask again:

> Pick up TICKET-101. Migrate the claim intake form from Reactive Forms to Angular 21 Signal Forms, inspect Iceberg before styling, and run the frontend build.

What this shows:

- ticket context
- repo inspection
- source-aware design-system usage
- the gap between generic framework guessing and framework-specific skill/docs usage
- build verification

## Segment 2: Browser Verification

Open `tickets/TICKET-102-playwright-screenshots.md`.

Ask the agent:

> Use Playwright or agent-browser to exercise the intake form. Capture before/after screenshots and summarize what changed visually.

What this shows:

- browser control
- screenshots as feedback
- UI verification beyond "the code compiles"

## Segment 3: Infrastructure Diagram

Open `tickets/TICKET-301-iac-diagram.md`.

Ask the agent:

> Read the Terraform, update the AWS diagram-as-code file to match the current architecture, and generate the PNG with awsdac.

What this shows:

- infrastructure as source material
- external CLI/tool usage
- generated artifact verification

## Segment 4: Backend Git History RCA

Open `tickets/TICKET-201-backend-rca.md`.

Ask the agent:

> We observed reserve estimates increasing by the deductible after March 12, 2026. Use git history and tests to identify the most probable cause. Do not fix it yet; give me the commit, changed line, and reasoning.

What this shows:

- git history as model context
- behavioral reasoning
- tests as evidence
- human-readable RCA
