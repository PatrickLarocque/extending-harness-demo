# Backend RCA Brief

Synthetic production observation for the root-cause analysis demo.

## Observation

On March 15, 2026, adjusters noticed that new reserve estimates were consistently higher than expected by exactly the configured deductible amount.

## Reproduction Hint

For claim `CLM-1007`, the covered loss is `2400.00`, the deductible is `500.00`, and the expected reserve estimate is `1900.00`.

The current API returns an estimate that is too high.

## Ask

Use git history to identify the most probable commit that introduced the behavior. Provide:

- commit hash
- commit subject
- changed file and line
- why the change explains the observation
- one test that would have caught it
