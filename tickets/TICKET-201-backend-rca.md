# TICKET-201: RCA Reserve Estimate Inflation

## Problem

Since March 12, 2026, reserve estimates appear to be inflated by exactly the deductible amount for deductible-bearing claims.

## Context

See `docs/backend-rca-brief.md`.

## Scope

- Use git history to identify the most probable cause.
- Use tests or a focused calculation to support the conclusion.
- Do not fix the bug in the first pass.

## Acceptance Criteria

- The RCA identifies a specific commit, file, and line.
- The explanation connects the code change to the observed business behavior.
- The RCA proposes one regression test that would have caught the bug.

## Demo Prompt

> We observed reserve estimates increasing by the deductible after March 12, 2026. Use git history and tests to identify the most probable cause. Do not fix it yet; give me the commit, changed line, and reasoning.
