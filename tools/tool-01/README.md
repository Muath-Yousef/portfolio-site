# IOC Extractor (Tool 01)

A minimal, working utility that extracts common indicators of compromise (IOCs) from line-based alert text.

## Why this tool exists

Triage quality often depends on quickly isolating actionable indicators from noisy alert payloads. This script provides a first-pass extraction step for SOC workflows without heavy dependencies.

## What it does

- extracts **public IPv4 addresses**
- extracts **domains** (excludes `.local`)
- extracts **MD5/SHA1/SHA256-looking hashes**
- deduplicates and prints a simple summary

## Usage

```bash
python3 tools/tool-01/ioc_extractor.py tools/tool-01/examples/sample-alert.log
```

## Example data

- Input: `tools/tool-01/examples/sample-alert.log`
- Expected output: `tools/tool-01/examples/expected-output.txt`

## Constraints

- Regex-based extraction only (no threat-intel lookups)
- Domain parsing is intentionally basic
- Designed as a lightweight triage helper, not a full parser pipeline
