# Demo Script

This runbook keeps the live demo focused on harness surface area rather than repository trivia.

## Segment 1: Ticket + Repo + Design System

Open `tickets/TICKET-101-intake-form-iceberg.md`.

Ask the agent:

> Pick up TICKET-101. Inspect the Angular app, the local Iceberg package, and the Angular 21 Signal Forms docs. Improve the claim intake UI without replacing the experimental Signal Forms pattern. Run the frontend build when done.

What this shows:

- ticket context
- repo inspection
- source-aware design-system usage
- framework-specific skill/docs usage
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
