# Workflows

This directory is for security workflow definitions that model end-to-end operational logic.

## Scope

Store workflow artifacts that define:

- trigger conditions (alert/event/case driven)
- execution stages and ordering
- branching logic and analyst escalation points
- expected outputs and state transitions

## Operational Principles

- Keep workflows deterministic where possible.
- Make decision points explicit and reviewable.
- Separate detection logic from response execution when practical.
- Include failure paths and retry/rollback considerations.

## Current baseline workflow

- `detection-triage-workflow.md`: SOC-oriented flow with automated IOC extraction and manual analyst validation.

## Operational realism

This repository intentionally documents operator decision points and real constraints:

- extraction output is a triage aid, not a final verdict
- workflow quality depends on input log quality
- human review remains mandatory for escalation decisions

## Expected evolution

As implementation matures, this folder should contain versioned workflow specifications and supporting references mapped to concrete SOC use cases.
