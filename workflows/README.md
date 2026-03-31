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

## Real-World Use Cases

- **Alert triage standardization:** provide a repeatable flow for intake, extraction, review, and disposition.
- **Analyst onboarding:** document decision points so newer analysts can follow the same triage structure.
- **Process improvement reviews:** identify where automation helps and where human validation must remain mandatory.

### Who would use this

- SOC leads defining triage process quality
- security engineers implementing workflow automation
- incident response teams documenting escalation logic

### Problem this solves

It turns informal analyst habits into a shared, reviewable workflow with clear handoff boundaries.

## Operational realism

This repository intentionally documents operator decision points and real constraints:

- extraction output is a triage aid, not a final verdict
- workflow quality depends on input log quality
- human review remains mandatory for escalation decisions

## Expected evolution

As implementation matures, this folder should contain versioned workflow specifications and supporting references mapped to concrete SOC use cases.


## Project Synapse alignment

These artifacts provide the practical building blocks used in the broader [project-synapse](https://github.com/Muath-Yousef/project-synapse) direction.
