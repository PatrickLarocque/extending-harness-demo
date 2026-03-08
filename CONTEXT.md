# Claims Experience Demo

This context captures the domain language for the synthetic claims platform used in the harness-extension presentation demo.

## Language

**Claim**:
A request from a policyholder to recover covered losses after an incident.
_Avoid_: Case, ticket

**Claim Intake**:
The first structured submission of incident details from a claimant.
_Avoid_: Form submission, lead

**Reserve Estimate**:
The system's estimated financial exposure for a claim before final adjudication.
_Avoid_: Payout, settlement

**Deductible**:
The amount the policyholder must absorb before covered loss is paid.
_Avoid_: Fee, penalty

**Iceberg**:
The design-system package used to style the claims portal.
_Avoid_: Component library, CSS kit

## Relationships

- A **Claim Intake** creates one **Claim**.
- A **Claim** has one current **Reserve Estimate**.
- A **Deductible** reduces the payable portion of a **Reserve Estimate**.
- The claims portal uses **Iceberg** to keep intake screens consistent.

## Example Dialogue

> **Developer:** "When someone submits **Claim Intake**, should the UI call it a ticket?"
> **Domain expert:** "No. It creates a **Claim**. Tickets are for our engineering workflow."
> **Developer:** "And the **Deductible** should reduce the **Reserve Estimate**, not increase it?"
> **Domain expert:** "Correct. If that changed, it would inflate exposure."

## Flagged Ambiguities

- "Ticket" can mean an engineering work item or a customer support record. In this repo, `tickets/` are engineering work items; the domain object is a **Claim**.
