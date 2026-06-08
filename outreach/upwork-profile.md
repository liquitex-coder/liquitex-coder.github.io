# Upwork Profile — AI Code Audit & Verification

> Copy/paste source for the Upwork profile (and adaptable to Toptal, Contra,
> LinkedIn, Wellfound). Target buyer: someone who had code written by an AI
> (or a cheap dev) and **can't trust that it does what was claimed**.
> Differentiator: a deterministic, LLM-free auditor (Claim-Auditor) that
> proves the gap between what was *claimed* and what was *actually done*.

---

## Title (≤ 70 chars)

Pick one (A/B test them):

- `AI Code Auditor — I verify AI-generated code actually does what it claims`
- `AI Code Review & Verification | Deterministic audits, tests, CI hardening`
- `I catch the gap between what your AI *said* it did and what it *did*`

## Hourly rate

- **Starting (first 1–3 jobs, to earn reviews):** $45–60/hr, or a fixed
  "Audit Sprint" at $180–350.
- **After 3–5 five-star reviews:** $75–110/hr.
- Lead with a **fixed-scope, low-risk first offer** — see proposal template.

## Overview (the profile body)

```
Your AI wrote the code. But does it actually do what the commit messages,
the PR description, and the README say it does? Usually nobody checks —
deterministically. I do.

I'm an engineer specializing in AUDITING and VERIFYING AI-generated (and
human) code. I don't just "review and give opinions" — I run a deterministic,
LLM-free auditor I built (Claim-Auditor) that catches the gap between what a
change CLAIMS and what the diff ACTUALLY shows:

  • spec ↔ code drift (the implementation quietly diverged from the spec)
  • false claims in commit messages / PR descriptions ("added tests",
    "0 lint errors", "removed X") that the diff does not support
  • silent test-count / assertion-strength reduction
  • dependency claims with no manifest change
  • resurrected designs that were supposed to be discarded

On top of that I ingest the linters you already run (ruff, mypy, bandit,
eslint, semgrep, trivy, …) into one normalized report (SARIF), so you get
ONE trustworthy verdict instead of ten dashboards.

What you get:
  • A clear PASS/FAIL audit report with evidence for every finding
  • Concrete fixes (or a prioritized fix list with effort estimates)
  • Tests + CI gate so the same class of problem can't come back silently
  • Plain-English summary for non-engineers (what was wrong, what it cost you)

Background: AI/ML and full-stack engineering (Python, TypeScript). I build
demos that run reproducibly right after `git clone`, and I work end-to-end
from requirements to delivery. Bilingual EN/JP.

Tools: Python, pytest, GitHub Actions/CI, SARIF, ruff/mypy/bandit/eslint/
semgrep, LightGBM/SHAP (ML work), FastAPI, Docker.

If you've ever shipped AI-written code and felt you were trusting it on faith
— that's exactly the problem I remove. Message me with your repo (or a
redacted sample) and I'll tell you what I'd audit first, free.
```

## Skills / tags to add

`Code Review` · `Software QA` · `Test Automation` · `CI/CD` · `Python` ·
`Static Analysis` · `Security Audit` · `pytest` · `GitHub Actions` ·
`Code Audit` · `AI Development` · `TypeScript`

## Portfolio items to attach

1. **Claim-Auditor** — the deterministic auditor itself (link the repo + the
   `services/ai-code-audit.html` page as the "service" URL).
2. **A sample audit report** — run Claim-Auditor on a public repo (or one of
   your own demos with a planted false claim) and export the PASS/FAIL report
   as the portfolio artifact. This is your single strongest proof.
3. **ML-Price-Optimize / ml-churn-recommend** — shows you also build, not just
   audit (useful when the gig drifts into "can you also fix it").
