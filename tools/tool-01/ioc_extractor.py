#!/usr/bin/env python3
"""Extract simple indicators of compromise from line-based text input."""

from __future__ import annotations

import argparse
import ipaddress
import re
import sys
from pathlib import Path

IP_RE = re.compile(r"\b(?:\d{1,3}\.){3}\d{1,3}\b")
DOMAIN_RE = re.compile(r"\b(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}\b")
HASH_RE = re.compile(r"\b[a-fA-F0-9]{32}\b|\b[a-fA-F0-9]{40}\b|\b[a-fA-F0-9]{64}\b")
NON_DOMAIN_SUFFIXES = {"exe", "dll", "sys", "bat", "cmd", "ps1"}


def valid_public_ip(candidate: str) -> bool:
    try:
        ip = ipaddress.ip_address(candidate)
    except ValueError:
        return False
    return not (ip.is_private or ip.is_loopback or ip.is_link_local or ip.is_multicast)


def extract_iocs(text: str) -> dict[str, list[str]]:
    ips = sorted({ip for ip in IP_RE.findall(text) if valid_public_ip(ip)})
    domains = sorted(
        {
            d.lower()
            for d in DOMAIN_RE.findall(text)
            if not d.lower().endswith(".local")
            and d.rsplit(".", 1)[-1].lower() not in NON_DOMAIN_SUFFIXES
        }
    )
    hashes = sorted({h.lower() for h in HASH_RE.findall(text)})
    return {"ips": ips, "domains": domains, "hashes": hashes}


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Extract IP/domain/hash indicators from plain text logs."
    )
    parser.add_argument("input", type=Path, help="Path to input text file")
    args = parser.parse_args()

    if not args.input.exists():
        print(f"error: file not found: {args.input}", file=sys.stderr)
        return 2

    data = args.input.read_text(encoding="utf-8")
    iocs = extract_iocs(data)

    print("# IOC Extraction Summary")
    for kind in ("ips", "domains", "hashes"):
        values = iocs[kind]
        print(f"{kind}: {len(values)}")
        for value in values:
            print(f"  - {value}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
