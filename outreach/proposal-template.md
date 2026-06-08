# Proposal / Cover-Letter Templates

> The first 2 lines decide whether the client keeps reading. Lead with THEIR
> problem and a specific observation — never with "I am a passionate
> engineer". Keep it under ~150 words. One link (the service page or a sample
> report). One question at the end to start a conversation.

---

## Rules (why these win)

1. **First sentence = their pain, in their words.** Mirror the job post.
2. **Second sentence = proof you can remove it**, concretely (name the check).
3. **One artifact link**, not five. The sample audit report > everything.
4. **A low-risk first offer** (fixed, small, fast) to beat the "no reviews yet"
   objection. Winning the first review is worth more than the fee.
5. **End with one easy question** so they reply instead of bounce.
6. Never paste the same wall of text. Swap the bracketed `[...]` slots.

---

## Template A — "AI-written code I can't trust" gig

```
Hi [name],

You said the code was [written by an AI / handed over with no tests] and you
"can't be sure it actually does what it's supposed to" — that exact gap is the
only thing I do. I run a deterministic auditor I built (Claim-Auditor) that
flags where the code DIVERGES from what the commits/PRs/README claim: missing
tests that were reported as added, spec-vs-implementation drift, silently
weakened assertions, dependency claims with no manifest change.

You'd get: a PASS/FAIL report with evidence per finding, a prioritized fix
list, and a CI gate so it can't regress.

How I'd start, low-risk: a fixed [USD 200] audit of your [repo / one module],
delivered in [2–3 days], report + top fixes. If it's not useful, you don't
continue.

Quick question: is the codebase [Python / TypeScript / mixed], and roughly how
many files should I focus on first?

— [Your name]  ·  example report: https://liquitex-coder.github.io/services/sample-audit-report.html
```

## Template B — "code review / QA / test coverage" gig

```
Hi [name],

For [a Python/TS codebase] this size, a normal review gives you opinions; what
you actually need is a verdict you can trust. I combine the linters you already
run (ruff/mypy/eslint/bandit/semgrep) into one normalized report, AND add a
deterministic check that the change does what its commit/PR says it does —
catching the failures linters never see (untested "added tests", weakened
assertions, spec drift).

Deliverable: one PASS/FAIL report with evidence, concrete fixes, and a GitHub
Actions gate so the same issues can't come back silently.

To de-risk a first engagement: fixed [USD 200], [3 days], on [one module] of
your choice.

What's the repo's primary language and current test setup (if any)?

— [Your name]  ·  what I do: https://liquitex-coder.github.io/services/ai-code-audit.html
```

## Template C — "AI agent / LLM output is unreliable" gig

```
Hi [name],

When an LLM/agent generates code or content, the dangerous failure isn't a
crash — it's a confident, false claim that it did something it didn't. I build
deterministic verifiers that sit AFTER the model and check its output against
the actual artifact before it ships (the pattern behind my Claim-Auditor
project: the agent proposes, a deterministic checker confirms, nothing untrue
gets through).

For your [agent/pipeline], I'd add a verification gate that [checks generated
code compiles + matches the requested spec / blocks fabricated citations /
confirms claimed file changes are real].

Low-risk start: a [USD 250] proof-of-concept gate on [one step] of your
pipeline, in [3–4 days].

What does your pipeline output, and what's the worst failure you've seen ship?

— [Your name]  ·  background: https://liquitex-coder.github.io/services/ai-code-audit.html
```

---

## Reusable closers (rotate)

- "Happy to run a free 15-min look at a redacted sample and tell you the first
  thing I'd audit — no commitment."
- "I can send a 1-page sample report from a public repo so you see the exact
  format before you decide."

## After you win the first one

Every real gig = a regression case for Claim-Auditor. When the audit surfaces
a class of claim-vs-reality gap the tool *missed* or *false-flagged*, capture
it into `tests/regression/` and add/refine a detector. The gig pays once; the
hardened detector compounds forever. (See the main playbook.)
