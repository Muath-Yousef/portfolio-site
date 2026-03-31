# Tools Directory

The `tools/` directory holds individual, lightweight utilities designed for practical operational use.

## Directory model

Each tool should have its own subdirectory with a focused scope and its own README.

## Expectations for each tool

- solve a real operational need
- keep dependencies minimal
- document usage, validation, and limitations clearly
- prefer maintainable implementation over over-engineering

## Current status

- `tool-01/` — working IOC extractor utility
- `examples/test_cases.md` — manual validation matrix for extraction behavior
- `tool-02/` — reserved for the next utility

## Real-World Use Cases

- **SOC triage prep:** quickly extract candidate IOCs from noisy alert exports before analyst review.
- **Incident handoff hygiene:** attach structured IOC output to case notes so escalation has consistent evidence.
- **Small-team operations:** enable teams without full SOAR platforms to automate repetitive parsing tasks.

### Who would use this

- SOC analysts and incident responders
- security engineers supporting triage automation
- platform/security teams that need low-friction CLI tooling

### Problem this solves

It reduces manual copy/paste parsing and creates consistent first-pass enrichment output that analysts can validate.

## Limitations (current state)

- Tooling is local and CLI-driven.
- No external integrations or API-based enrichment are included yet.
- This directory demonstrates a practical execution slice, not a full platform.


## Project Synapse alignment

These artifacts provide the practical building blocks used in the broader [project-synapse](https://github.com/Muath-Yousef/project-synapse) direction.
