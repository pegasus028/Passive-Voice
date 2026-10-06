# Voice Control — The English Passive

A self-study app for the English passive voice and the causative family, B1 → C1, for Thai
M5 students preparing for TCAS70 (A-Level English 82). Eight stages, 24 levels, 72 modules,
568 questions, and three tests: a **triage** on the landing page that builds each student's
checklist, and two mock tests in TCAS70 format (B2 and C1).

It runs on the Mission Control engine (via Fine Tuning), with the additions listed below.

Live: https://pegasus028.github.io/Passive-Voice/

---

## The stages

| # | Stage | Levels |
|---|---|---|
| 1 | The Switch | Building the passive · Why switch? · Spot a broken passive |
| 2 | Doer or Receiver? | The Decision Test · Never passive · By itself? (two-way verbs) |
| 3 | Time Machine | Continuous and perfect · Past perfect and future · Modal passives |
| 4 | Beyond the Finite Verb | Passive infinitive · Passive gerund · Perfect forms and who does it |
| 5 | Objects and Prepositions | Two objects · Particles that stay · *by* and the other prepositions |
| 6 | Shortcuts | Relative clauses · Reduced passive clauses · Elliptical clauses and adverbs |
| 7 | The Causative Family | Have something done · Someone does it · Make, let and need |
| 8 | Said to Be | Reporting passive · Academic *it*-passives · *get*-passive and register |

Every module opens with lesson tabs: Explain · Simple English · ภาษาไทย · Mind map · Story ·
Chant · Moves, plus an analogy and the exam trap. (The Thai has not yet been read by a native
speaker — worth a skim.)

## The tests

| file | test | items |
|---|---|---|
| `test-1.js` | **Triage** — shown on the landing page. Parts A–H, one per stage, one item per level, so every miss routes to one module. **Must load first.** | 24 · 30 min |
| `test-2.js` | Mock Test 2 · B2 — sentence completion, error identification, two 5-gap Text Completion passages | 20 · 25 min |
| `test-3.js` | Mock Test 3 · C1 — same shape, C1 difficulty | 20 · 25 min |

## What is new compared with Mission Control

- **Second try.** A wrong first answer in any practice question is not revealed. The option
  is struck out, the student reads a diagnosis of *that* option's mistake (`fb[]`), and tries
  again. A second-try success earns half a mark and still goes on the fault list.
- **Hint button everywhere in practice** (modules, stage checks, fault list, sprints). Each
  item has its own `hint`: a rule reminder that never names the answer.
- **Retry after a test.** Tests run under exam conditions (no hints), but the result screen
  offers "Retry what I missed" — with hints and second tries — *before* the answers are shown.
- **The Voice Lab:**
  - *The Voice Switch* — flip 14 scenes between active and passive in ten tenses and watch the
    sentence rebuild itself (object → subject, *be* carries the tense, V3, *by* or not), then a
    build-it-yourself challenge with error-diagnosing distractors.
  - *The Decision Desk* — 12 TCAS-style gaps solved step by step with the Decision Test; each
    right step crosses out options until one is left.
  - Games: *Doer or Receiver?*, *Trap or OK?* (never-passive verbs), *Service Desk* (causatives).
  - Seven timed sprints (incl. TCAS70 Text Completion pace) and 80 flashcards (irregular
    participles, passive chunks, patterns) in a Leitner cycle.

## Release rules (all checked)

```
node verify.js --release   # structure + hint on every item, fb[4], near-miss index, no hint/fb leaks
node audit.js              # key position and key-length balance per stage and per test
node render-test.js        # needs jsdom: mounts all 568 items and answers each one
```

At release (6 Oct 2026): verify CLEAN; keys at positions 1–4 = 112/112/115/113 across 452
four-option items (each stage and each test ≈ 25% per position); the key is the strictly
longest option in 15% of items (no stage above 24%); every four-option item has a declared
near-miss distractor; every item has a hint and per-option second-try feedback. Every item
was reviewed a second time by an independent examiner for naturalness and for a single
defensible answer.

## Connecting the class server

The app works without a server, saving progress in the student's browser (keys start `pv.`,
so it does not collide with your other apps on pegasus028.github.io). To get the teacher
console and cross-device records, deploy the same `Code.gs` you use for Mission Control /
Fine Tuning into a **new** Google Sheet (Deploy → Web app → Execute as Me, access Anyone) and
paste the `/exec` URL into `window.MC_API_URL = ''` in **both** `index.html` and
`teacher.html`. Remember: after editing Apps Script, Deploy → Manage deployments → pencil →
New version → Deploy.

## Media

`media.js` has one entry per stage with empty `podcast`, `slides` and `video` fields. Put an
MP3 in `audio/` and its path in `podcast`, or paste a YouTube link into `video`; an empty
field simply shows no button. `roster.js` holds the Fast Access class list (empty for now).

## The files

| file | what it is |
|---|---|
| `index.html` / `student.js` | the student app (second try, hints, Voice Lab) |
| `teacher.html` / `teacher.js` | the class console |
| `engine.js` | rendering, marking (now with `retry()` on every item view), progress, tests |
| `content.js` | ranks (Muted → Broadcast), awards, empty REMEDIATION/LENSES/TOPICS/MOCKS |
| `topic-s1.js` … `topic-s8.js` | the stages, each with its own error tags |
| `lenses-s1.js` … `lenses-s8.js` | the lesson lenses |
| `test-1.js` … `test-3.js` | the triage and the two mock tests |
| `lab-data.js` | Voice Switch scenes, Decision Desk cases, game items, flashcards |
