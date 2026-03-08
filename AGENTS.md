# Agent Instructions

This repo is a presentation demo for AI-assisted software engineering. Favor small, inspectable changes that show how a harness can use project context, tools, tests, docs, and git history.

## Working Rules

- Read the relevant ticket in `tickets/` before changing code.
- Prefer existing project docs and official framework docs over guessing APIs.
- For Angular work, use Angular 21 patterns and the experimental Signal Forms API from `@angular/forms/signals`.
- For Iceberg design-system work, inspect `packages/iceberg` first. In the real Intact environment, use an opensrc-style source fetch for the actual organization package before assuming component APIs.
- For browser verification, use Playwright or an agent browser and capture screenshots when the ticket asks for visual proof.
- For infrastructure diagrams, inspect Terraform first, then update or generate `infra/diagrams/claims-platform.awsdac.yaml`.
- For backend root-cause analysis, use `git log`, `git show`, and focused tests. Do not stop at the first suspicious commit; explain why it is the most probable cause.
- Do not delete failing tests to make the run green. If a test is obsolete, explain why and update it deliberately.

## Useful Commands

```bash
npm run build:frontend
npm run test:e2e
npm run lint:frontend

cd services/claims-api && mvn test
cd infra/terraform && terraform fmt -check && terraform validate
awsdac infra/diagrams/claims-platform.awsdac.yaml -o infra/diagrams/claims-platform.png
```

## Presentation Intent

The point of this repo is to demonstrate surface area:

- code + tests
- browser + screenshots
- design-system source
- issue/ticket context
- git history
- infrastructure
- diagram tooling
- CI workflows
