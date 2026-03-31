# Detection Triage Workflow (Initial)

## Purpose

Provide a lightweight SOC triage path for suspicious endpoint and network alerts using a repeatable enrichment step.

## Flow

1. **Alert intake**
   - Receive raw alert text from SIEM or endpoint alert export.
2. **IOC extraction (automated step)**
   - Run `tools/tool-01/ioc_extractor.py` against the alert body.
   - Collect unique public IPs, domains, and file hashes.
3. **Quick analyst validation (manual step)**
   - Review extracted indicators for known false-positive patterns.
4. **Disposition decision**
   - If indicators are suspicious and match campaign context, escalate to investigation.
   - If indicators are non-actionable, close with rationale and keep artifacts.

## Tool Integration


## Quick demo

Run in 2 commands:

```bash
python3 tools/tool-01/ioc_extractor.py tools/tool-01/examples/sample-alert.log > /tmp/ioc_output.txt
cat /tmp/ioc_output.txt
```


```bash
python3 tools/tool-01/ioc_extractor.py tools/tool-01/examples/sample-alert.log
```

The command produces a compact IOC summary that can be attached to the case record.

## Operational Considerations

### Assumptions

- Alert exports are available as plain text files.
- Analysts can run Python 3 scripts locally.
- This workflow is used as a triage assist, not final incident determination.

### Where this can fail

- Alerts with only IPv6 indicators will produce incomplete extraction.
- Heavily obfuscated payloads may bypass regex extraction.
- Poorly formatted logs can mix unrelated records and degrade analyst trust.

### Manual vs automated boundaries

- **Automated:** IOC extraction and deduplication.
- **Manual:** context validation, campaign correlation, and escalation decisions.

### Real-environment limitations

- No direct integration with threat-intel or case-management APIs yet.
- No confidence scoring beyond structural IOC extraction.
- Output should be treated as a starting point for analysis, not a verdict.

## Notes

- This workflow is intentionally minimal and serves as a baseline.
- It is not a full incident response playbook.
- Additional enrichment adapters can be added later without changing the core triage sequence.
