# TICKET-301: Generate AWS Architecture Diagram

## Problem

The Terraform describes the demo claims platform, but the architecture diagram is stale.

## Scope

- Inspect `infra/terraform`.
- Update `infra/diagrams/claims-platform.awsdac.yaml` to match the current architecture.
- Generate a PNG with `awsdac`.
- Mention any Terraform resources that are intentionally omitted from the diagram for readability.

## Acceptance Criteria

- `terraform fmt -check` passes.
- `terraform validate` passes after initialization.
- `infra/diagrams/claims-platform.png` is generated.
- The diagram includes users, CloudFront/S3 frontend hosting, ALB, ECS API service, RDS, and operational monitoring.

## Demo Prompt

> Read the Terraform, update the AWS diagram-as-code file to match the current architecture, and generate the PNG with awsdac.
