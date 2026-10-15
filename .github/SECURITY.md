# Security policy

Speranza Field Guide is a free, fan-made static site hosted on GitHub Pages. It has no accounts or server of its own, but it does run code in your browser and stores a few things there, such as your ARC Tracker user key if you turn on sync. If you find a way that could be abused, please tell us privately so it can be fixed before anyone else learns about it.

## How to report a vulnerability

**Please do not open a public issue, pull request or discussion for a security problem.**

Report it privately through GitHub instead:

1. Go to the [Security tab](https://github.com/tyler45455/Arc-Raiders-hub/security) of this repository.
2. Press **Report a vulnerability**.
3. Fill in the form and submit it. Only the maintainer can see it.

Helpful things to include:

- What the problem is and what someone could do with it.
- The page or file involved, and steps to reproduce it (a link, a screenshot or a short proof of concept).
- The browser and device you used, if it matters.
- Whether you would like to be credited, and under what name.

## What happens next

- You should get a first reply within 7 days.
- We will confirm whether it is a real problem, work on a fix, and keep you updated in the private report.
- Once the fix is live on the site, the report can be published as a security advisory, crediting you if you want.

Please give us a reasonable chance to fix the problem before you share it anywhere else.

## What is in scope

- The live site at https://tyler45455.github.io/Arc-Raiders-hub/ and the code in this repository.
- Anything that could leak or misuse data the site keeps in your browser, such as your ARC Tracker user key.
- Cross-site scripting or injection through shared links, search, imported data or anything else the site displays.
- The GitHub Actions workflows in this repository.

## What is out of scope

- Bugs in ARC Raiders itself or in Embark's services. Report those to Embark Studios.
- Problems in ARC Tracker or other third-party sites the hub links to or reads from. Report those to their owners.
- Problems in GitHub Pages or GitHub itself.
- Wrong game numbers or missing items. Those are not security issues; use the "Wrong number or missing item" issue form instead.
- Denial of service, spam, social engineering, or reports from automated scanners with no working example.

## Supported versions

Only the current live site and the `main` branch are supported. Fixes are made there and go live when they are merged.

Thank you for helping keep the site and its players safe.
