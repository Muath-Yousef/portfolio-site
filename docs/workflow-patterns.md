# Workflow Patterns

This document captures practical workflow patterns for security operations automation.

## 1. Detect -> Enrich -> Triage -> Respond

A baseline pattern for alert-driven operations:

1. Receive detection signal from SIEM or telemetry source.
2. Enrich with context (asset criticality, identity, historical behavior, threat intel).
3. Apply triage logic to determine priority and confidence.
4. Execute response path (automated, analyst-approved, or manual).

Use this pattern when fast classification and controlled response are required.

## 2. Case-Centric Iterative Investigation

A pattern for complex or ambiguous incidents:

1. Open or update case with initial evidence.
2. Run iterative evidence collection tasks.
3. Re-evaluate hypotheses at each iteration.
4. Route to containment or escalation based on confidence changes.

Use this pattern when high-fidelity judgment and multi-step analysis are needed.

## 3. Guardrailed Automation with Human Checkpoints

A pattern for higher-risk actions:

1. Automation performs low-risk enrichment and validation.
2. Workflow pauses at decision checkpoints.
3. Analyst approval or rejection determines downstream action.
4. All decisions are logged for audit and improvement.

Use this pattern for containment actions that may impact business operations.

## Pattern Selection Guidance

Select patterns based on:

- impact tolerance for false positives
- required response speed
- confidence level of detection logic
- operational staffing and shift model

Pattern choice should be documented and periodically reviewed against incident outcomes.
