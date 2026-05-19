# Extending the Harness Demo

Synthetic monorepo for an AI Chapter demo on giving coding agents more useful surface area.

The repo is intentionally small, but it has enough real edges for an agent to inspect code, use docs, run checks, browse a local UI, generate screenshots, reason over infrastructure, and investigate git history.

## Repository Map

- `services/claims-api` — Spring Boot claims API with a seeded history regression for root-cause analysis.
- `apps/claims-portal` — Angular 21 claims intake UI that starts with Reactive Forms so a demo agent can migrate it to experimental Signal Forms.
- `packages/iceberg` — local stand-in for the Iceberg design system package.
- `infra/terraform` — Terraform for a small AWS claims platform.
- `infra/diagrams` — AWS diagram-as-code input for `awsdac`.
- `tickets` — sample work items for agent demos.
- `docs` — presenter runbook, source notes, and observed-production briefs.

## Demo Setup

```bash
npm install
npm run build:frontend
npm run test:e2e

cd services/claims-api
mvn test

cd ../../infra/terraform
terraform init
terraform validate

awsdac ../diagrams/claims-platform.awsdac.yaml -o ../diagrams/claims-platform.png
```

## Suggested Demo Flow

1. Start with `tickets/TICKET-101-intake-form-iceberg.md` to show an agent using Angular Signal Forms guidance.
2. Use `tickets/TICKET-103-iceberg-design-system.md` to show source-aware design-system work with Iceberg.
3. Use `tickets/TICKET-102-playwright-screenshots.md` to show browser/Playwright verification with screenshots.
4. Use `tickets/TICKET-301-iac-diagram.md` to show the agent traversing Terraform and producing an AWS architecture diagram with `awsdac`.
5. Use `tickets/TICKET-201-backend-rca.md` to show git-history root-cause analysis.

## Notes

This repo uses synthetic names and toy infrastructure. The intended lesson is not the business domain; it is how changing the harness changes what the model can inspect, change, run, and verify.
