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
- `tool-02/` — reserved placeholder for the next lightweight utility

## Limitations (current state)

- Tooling is local and CLI-driven.
- No external integrations or API-based enrichment are included yet.
- This directory demonstrates a practical execution slice, not a full platform.
