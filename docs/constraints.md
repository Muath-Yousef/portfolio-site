# Constraints

This document defines intentional constraints for the current implementation.

## Intentionally not handled

- Full incident lifecycle automation
- External API integrations (TI feeds, ticketing, SOAR execution)
- Distributed execution, queueing, or horizontal scaling concerns

## Design trade-offs

- **Simplicity over coverage:** regex-based extraction is easier to audit, but not exhaustive.
- **Local reproducibility over infrastructure depth:** scripts run locally with low setup friction.
- **Human-in-the-loop decisions:** analyst context remains required for escalation quality.

## Deferred complexity

The following are deferred until there is a stronger operational need:

- richer parsing for semi-structured formats (JSON variants, vendor-specific schemas)
- automated confidence scoring and prioritization
- robust observability, error budgets, and deployment controls
