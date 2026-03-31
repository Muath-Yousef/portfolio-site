# IOC Extractor Test Cases

This file documents lightweight, manual test cases for `tools/tool-01/ioc_extractor.py`.

## Case 1: Baseline sample (deterministic output)

**Input:** `tools/tool-01/examples/sample-alert.log`  
**Command:**

```bash
python3 tools/tool-01/ioc_extractor.py tools/tool-01/examples/sample-alert.log
```

**Expected:** Output matches `tools/tool-01/examples/expected-output.txt` exactly.

---

## Case 2: Duplicate indicators collapse to unique values

**Input snippet:**

```text
Alert A src=8.8.8.8 domain=evil.example hash=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
Alert B src=8.8.8.8 domain=evil.example hash=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
```

**Expected:**

- `ips` contains one `8.8.8.8`
- `domains` contains one `evil.example`
- `hashes` contains one 32-char hash

---

## Case 3: Non-public IPs are filtered

**Input snippet:**

```text
src=10.0.0.4 src=127.0.0.1 src=169.254.1.1 src=224.0.0.1 src=1.1.1.1
```

**Expected:**

- only `1.1.1.1` appears in output

---

## Case 4: Local and executable-like domain suffixes are ignored

**Input snippet:**

```text
host=lab.local path=payload.exe host=good-example.org
```

**Expected:**

- `good-example.org` is included
- `lab.local` is excluded
- `payload.exe` is excluded as a domain

---

## Case 5: Missing file handling

**Command:**

```bash
python3 tools/tool-01/ioc_extractor.py /tmp/does-not-exist.log
```

**Expected:**

- exit code `2`
- stderr includes `error: file not found`

---

## Notes

These are practical verification cases, not a full automated test framework.
