# Mu'ath Yousef — Cybersecurity Engineering Portfolio

This repository contains the public portfolio of **Mu'ath Yousef**, a cybersecurity engineer working across SOC engineering, security automation, data-aware detection, and evidence-driven delivery.

## Professional direction

The portfolio presents two independent cybersecurity tracks:

- **[Project Synapse](https://github.com/Muath-Yousef/project-synapse)** — my graduation project: an open-source, hybrid cybersecurity architecture combining security tooling with data analytics and a documented path to scale.
- **[SOCRoot](https://socroot.com)** — a commercial cybersecurity innovation intended to sell automatable services by subscription when they provide measurable customer value.

The projects may reuse patterns or components, but one is not the brand or maturity proof of the other.

Older references to Kyrie represent a superseded brand direction and should not be treated as a separate active business.

## Selected work

- [Project Synapse](https://github.com/Muath-Yousef/project-synapse) — graduation-project architecture, data flow, integration boundaries, evidence gates, and scalability roadmap.
- [SOCRoot](https://socroot.com) — public product surface for subscription-based, automatable cybersecurity services; commercial validation is still pending.
- **SOCRoot control-plane candidate** — portals, RBAC, onboarding, client state, evidence workflows, and observability; private during Git-history and release-safety review.
- **Project Synapse runtime/POC** — ingestion, triage, HITL orchestration, and evidence capture for technical validation; private during Git-history review.
- [DVTA Security Assessment](https://github.com/Muath-Yousef/Reports) — authorized grey-box lab assessment with 12 confirmed findings.

## Working principles

- evidence before claims;
- explicit ownership and maturity boundaries;
- human approval for sensitive actions;
- dry-run by default;
- traceable evidence and rollback;
- no raw client data sent to external AI providers;
- no unsupported production, customer, or performance claims;
- technical evidence does not substitute for customer willingness to pay.

## Site structure

- `index.html` — professional overview;
- `about.html` — technical focus and working approach;
- `projects.html` — separate Project Synapse and SOCRoot tracks;
- `services.html` — scoped engineering capabilities;
- `contact.html` — professional contact channels;
- `docs/` — assumptions, constraints, and supporting material.

## Local review

```bash
python3 -m http.server 8080
```

Open <http://localhost:8080>.

## Scope

The site documents engineering work and project maturity. It does not claim that Project Synapse is production-ready or that SOCRoot currently has proven product-market fit, a guaranteed SLA, or recurring subscription customers.
