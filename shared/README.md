# Shared Components

The `shared/` directory is reserved for reusable support components used across multiple tools.

## Intended content

- common utility helpers
- shared parsing or normalization logic
- reusable data handling modules
- small cross-tool support functions

## Guardrails

- keep interfaces stable and predictable
- avoid adding components that are only useful for one tool
- document behavior so reuse remains safe and clear
