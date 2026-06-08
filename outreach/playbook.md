# Go-to-Market Playbook — Win the First AI-Code-Audit Gig

Target market: **overseas / English-speaking** (you decided Japan screens out
too hard on paper). Focus: **gigs that double as Claim-Auditor fuel** — AI
code review, verification, test/CI hardening, LLM-output reliability.

The honest truth: no tool here *gets* you a gig. These raise your win-rate and
cut the time per application. The goal of the first gig is **the first 5-star
review**, not the fee. Underprice the first one on purpose.

---

## 1. Where to look (and the search terms)

**Upwork** (primary). Search/save these as job feeds:

- `audit AI generated code`
- `review code written by AI` / `vibe coded` / `ChatGPT wrote this`
- `code review` + `Python` / `TypeScript`
- `add tests to existing codebase` / `test coverage` / `pytest`
- `set up CI` / `GitHub Actions` / `pre-commit`
- `LLM output verification` / `AI agent reliability` / `hallucination`
- `technical due diligence` (someone bought/inherited a codebase)
- `static analysis` / `SARIF` / `semgrep`

**Secondary channels** (lower competition, warmer leads):

- **Contra / Wellfound / LinkedIn** — same profile text, repost.
- **X (Twitter) / Reddit (r/forhire, r/ExperiencedDevs)** — reply to people
  posting "I vibe-coded an app and it's a mess" with a useful 2-line audit
  observation, then DM. This is often faster than Upwork for #1.
- **Indie/AI communities** — lots of non-engineers shipped AI code and are
  scared of it. That fear is your market.

## 2. Filter for the RIGHT first gig

Prefer gigs where:
- the code already exists (you audit, not build from zero),
- it's **Python or TypeScript** (your strongest + best tool coverage),
- scope is small enough to deliver in 2–4 days (fast first review),
- the client expresses **distrust** of existing code (your exact pitch lands).

Avoid for #1: huge migrations, vague "build my whole app", anything needing
domain you don't have. You want a clean win on the board.

## 3. The offer that beats "0 reviews"

A new profile has no social proof. Neutralize it with a **fixed, small,
fast, refundable-feeling** offer:

> "Fixed $200. One module of your choice. PASS/FAIL audit report + top fixes,
>  in 3 days. If it's not useful, don't continue."

Low downside for them = easy yes. Your real ROI is the review + the regression
case for Auditor.

## 4. The one artifact that sells: a sample report (DONE)

Already built and live:
**`https://liquitex-coder.github.io/services/sample-audit-report.html`**

It's a *real* Claim-Auditor run on a demo repo with a deliberately planted
false-claim commit — the tool caught (a) a commit claiming it added
`tests/test_churn.py` when the diff added no such file, and (b) a "ruff: 0
violations" claim contradicted by a real F401. Raw SARIF/JSON evidence is
linked from the page.

Attach it to the profile and link it in every proposal. "Here's exactly what
you'd get" out-converts any amount of adjectives. To make a fresh one for a
specific niche, repeat: plant a false claim in a repo → run Claim-Auditor →
export the report.

## 5. Pricing ladder

| Stage | Rate | Offer |
|---|---|---|
| Gig 1–2 (earn reviews) | $45–60/hr or $180–350 fixed | "Audit Sprint" |
| Gig 3–5 (3+ reviews) | $70–90/hr | Audit + fixes + CI gate |
| Established | $90–120/hr | Retainer: every PR audited |

## 6. Delivery checklist (so the review is 5 stars)

- [ ] PASS/FAIL report with evidence per finding (not vibes)
- [ ] Prioritized fix list with effort estimates
- [ ] At least one fix applied (or a PR) so they feel progress
- [ ] A CI gate (GitHub Actions) so it can't regress — this is the upsell hook
- [ ] A 3-bullet plain-English summary for the non-engineer buyer

## 7. Close the loop back to Auditor (the second purpose)

For every gig:
1. Note any claim-vs-reality gap Auditor **missed** (false negative) or
   **false-flagged** (false positive).
2. Freeze it as a case in `Claim-Auditor/tests/regression/<case>/`.
3. Add/refine the detector; guard it with the precision/recall eval.
4. Log it in CHANGELOG.

The gig is the reagent; the regression corpus is the asset that can't be
copied. That corpus + your audit reviews = the moat. Don't skip step 1 just
because you got paid.

---

### Note on these files being public

This repo (`liquitex-coder.github.io`) is public, so this playbook and the
proposal templates are visible to anyone — including potential clients. That's
usually fine (it reads as "this person is organized"), but if you'd rather keep
your go-to-market private, move `outreach/` to a private repo. Say the word and
I'll set that up.
