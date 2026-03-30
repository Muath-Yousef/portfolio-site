# Operating Model

## Roles and Responsibilities

A practical operating model should define ownership across three core functions:

- **Security Engineering**: builds and maintains workflow, playbook, and pipeline artifacts.
- **SOC Operations**: executes workflows, provides feedback, and reports operational friction.
- **Incident Response Leadership**: governs severity handling, escalation thresholds, and post-incident improvements.

## Lifecycle for Workflow and Pipeline Changes

1. **Propose**: document use case, trigger, expected outcomes, and constraints.
2. **Design**: define workflow logic, control points, and fallback behavior.
3. **Review**: validate technical quality and operational suitability.
4. **Deploy**: release in controlled stages where possible.
5. **Operate**: monitor execution quality and capture exceptions.
6. **Improve**: update based on incidents, false positives, and analyst feedback.

## Governance Expectations

- version-control all workflow and playbook changes
- require peer review for logic affecting detection or response
- document assumptions and known limitations
- maintain traceability between incident learnings and artifact updates

## Metrics to Track Over Time

- workflow execution success/failure rates
- mean time from detection to triage decision
- mean time from triage to response action
- analyst intervention frequency by workflow
- false positive/false escalation contribution by pattern

These metrics should guide refinement priorities and highlight where additional automation is beneficial versus risky.
