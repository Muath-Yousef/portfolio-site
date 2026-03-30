# Detection Triage Workflow (Initial)

## Purpose

Provide a lightweight SOC triage path for suspicious endpoint and network alerts using a repeatable enrichment step.

## Flow

1. **Alert intake**
   - Receive raw alert text from SIEM or endpoint alert export.
2. **IOC extraction (automated step)**
   - Run `tools/tool-01/ioc_extractor.py` against the alert body.
   - Collect unique public IPs, domains, and file hashes.
3. **Quick analyst validation**
   - Review extracted indicators for known false-positive patterns.
4. **Disposition decision**
   - If indicators are suspicious and match campaign context, escalate to investigation.
   - If indicators are non-actionable, close with rationale and keep artifacts.

## Tool Integration

```bash
python3 tools/tool-01/ioc_extractor.py tools/tool-01/examples/sample-alert.log
```

The command produces a compact IOC summary that can be attached to the case record.

## Notes

- This workflow is intentionally minimal and serves as a baseline.
- It is not a full incident response playbook.
- Additional enrichment adapters can be added later without changing the core triage sequence.
