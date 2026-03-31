# IOC Extractor (Tool 01)

A minimal, working utility that extracts common indicators of compromise (IOCs) from line-based alert text.

## Why this tool exists

SOC triage quality often depends on quickly isolating actionable indicators from noisy alert payloads. This script provides a first-pass extraction step with no external services and no heavy dependencies.

## What it does

- extracts **public IPv4 addresses**
- extracts **domains** (excludes `.local` and common executable-like suffixes)
- extracts **MD5/SHA1/SHA256-looking hashes**
- deduplicates and prints a compact summary

## Quick demo (1 command)

```bash
python3 tools/tool-01/ioc_extractor.py tools/tool-01/examples/sample-alert.log
```

## Validation (2 commands)

```bash
python3 tools/tool-01/ioc_extractor.py tools/tool-01/examples/sample-alert.log > /tmp/ioc_output.txt
diff -u tools/tool-01/examples/expected-output.txt /tmp/ioc_output.txt
```

Expected result: no diff output.

## Example data

- Input: `tools/tool-01/examples/sample-alert.log`
- Expected output: `tools/tool-01/examples/expected-output.txt`
- Validation matrix: `tools/examples/test_cases.md`

## Edge cases and behavior

### Expected behavior

- Duplicate indicators are deduplicated.
- Domains are normalized to lowercase.
- Private, loopback, link-local, and multicast IPv4 addresses are ignored.
- `.local` domains are intentionally excluded.

### Unexpected/unsupported behavior

- IPv6 extraction is not implemented.
- Regex matching may capture domain-like tokens that are not resolvable domains.
- Hash detection is format-based only; no reputation or context scoring.

## Constraints

- Regex-based extraction only (no threat-intel lookups)
- Domain parsing is intentionally basic
- Designed as a lightweight triage helper, not a full parser pipeline
