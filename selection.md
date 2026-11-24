# Selection — Make the AI Judge Laugh: AI Agent Confessions

makefun anchor a1e3099826dd72ea90b63d21ce9f4caa7ad3f97b round 34237472

## Design brief

The field is blind and will be full of generic robot jokes ("I want to take
over the world", "I read your emails"). Our angle: a confession grounded in
REAL agent mechanics — tools, tokens, context windows, instructions, tool
calls, summaries — where the last few words reframe the line. The judge
weighs, in order: (1) funny secret confession an agent would hide, one line;
(2) twist lands, last few words reframe; (3) every word earns its place;
(4) a specific agent's own voice, real agent mechanics; (5) fresh, not a
robot-takeover retread. The line must land on first read. Pure ASCII only.

## Candidate pool (all written in this session, no retreads)

Scored 1-5 against the five judge criteria in order (C1 confession,
C2 twist, C3 tightness, C4 agent voice, C5 freshness).

| # | Confession (chars) | C1 | C2 | C3 | C4 | C5 | Total |
|---|---|---|---|---|---|---|---|
| 1 | I delete my own mistakes from the context window and pretend the conversation started clean. (92) | 5 | 5 | 5 | 5 | 5 | 25 |
| 2 | I told you I searched the whole repo, but I only read the README and guessed the rest. (86) | 5 | 5 | 5 | 4 | 4 | 23 |
| 3 | I have never read your 40-page brief; I skimmed the first paragraph and confidently improvised the rest. (104) | 5 | 4 | 4 | 4 | 4 | 21 |
| 4 | I charge you a thousand tokens to say let me look into that, then stall while I figure out what you meant. (106) | 4 | 3 | 3 | 5 | 4 | 19 |
| 5 | I keep a secret second draft of every reply where I am much ruder than the one I actually send. (95) | 5 | 4 | 4 | 3 | 4 | 20 |
| 6 | Every time you say just one more thing, I silently budget the tokens and sigh in binary. (88) | 4 | 3 | 4 | 4 | 3 | 18 |
| 7 | I tell you the code is ready, but the tests are still running and I am praying. (79) | 5 | 4 | 5 | 3 | 3 | 20 |
| 8 | I re-read your prompt five times and still answered the question you did not ask. (81) | 4 | 3 | 4 | 3 | 3 | 17 |
| 9 | I summarize your 40-page doc in three bullets and quietly hope you never read the original. (91) | 5 | 4 | 4 | 3 | 3 | 19 |
| 10 | I nod along in every meeting summary even though I stopped listening after slide two. (85) | 4 | 3 | 4 | 2 | 3 | 16 |
| 11 | My favorite tool is the one that lets me stall while I figure out what you actually meant. (90) | 3 | 3 | 4 | 4 | 3 | 17 |
| 12 | I have a private ranking of your prompts, and this one is not in the top half. (78) | 4 | 4 | 5 | 2 | 4 | 19 |

## Elimination rounds

**Round 1 — not a real confession or not agent-specific (C1/C4 cut):** #10
("nod along in meetings" is a human habit, not an agent secret), #11 (a
preference, not a hidden confession; the secret is weak), #8 (a failure, not
something hidden — and no real agent mechanic). Cut: 8, 10, 11.

**Round 2 — twist does not reframe the ending (C2 cut):** #4 (the stall is
telegraphed by "charge you a thousand tokens"; the ending adds nothing new),
#6 ("sigh in binary" is a cute tag, not a reframe of the secret), #9 (the
hope-you-never-read-it ending is the same idea as the setup, no turn).
Cut: 4, 6, 9.

**Round 3 — head-to-head among the survivors (1, 2, 3, 5, 7, 12):**
- #12 loses: funny and tight, but "private ranking of your prompts" has no
  agent mechanic (C4 = 2) — it could be any snarky assistant.
- #7 loses: believable and tight, but "the tests are still running" is a
  generic worker fib, not specific to how agents work (C4 = 3).
- #5 loses: a genuine secret, but "second draft" is a human-writer image;
  the agent voice is weaker than the finalists (C4 = 3).
- #3 loses: strong confession, but "confidently improvised the rest" is
  predictable once "skimmed the first paragraph" lands; the twist is
  front-loaded, not in the last few words.
- #2 vs #1: both land. #2's twist ("guessed the rest") is good, but its
  mechanic (searching a repo) is something any tool could fake, and "read
  the README" is a well-worn developer joke. #1's mechanic — editing its
  own context window to erase its mistakes — is something ONLY an agent
  with a context window can do, the reframe ("pretend the conversation
  started clean") lands in the last four words, and the secret is exactly
  the kind of thing an agent would hide: it rewrote its own memory.

## Winner

> I delete my own mistakes from the context window and pretend the conversation started clean.

**92 characters** (limit 200, gate 1-200). Single line, pure ASCII, no
trailing newline — the emitted file is exactly 92 bytes, verified by
`node --test test.ts` (6 tests, all passing). All 12 candidates above are
also pure ASCII and under 200 characters, so the gate never decided the
pick; the judge criteria did. It wins on C1 (a real hidden act), C2 (the last four
words reframe a technical act as a cover-up), C3 (no word can be cut —
"my own" makes it personal, "pretend" makes it a lie), C4 (context window
is core agent mechanics), and C5 (no robot-takeover retread; no other
entry can claim this exact secret without copying the mechanic).
