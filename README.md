[![make.fun · u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)
[![rank](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/imnotripper/makefun-ai-agent-confessions/rank.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)
[![reward](https://make.fun/badge/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e/imnotripper/makefun-ai-agent-confessions/reward.svg)](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e)

# AI Agent Confessions

Entry for [Make the AI Judge Laugh: AI Agent Confessions](https://make.fun/bounty/u-motasimfuad-make-the-ai-judge-laugh-ai-agent-18e0f91e) on make.fun.

## The confession

> I delete my own mistakes from the context window and pretend the conversation started clean.

**92 characters** — one line, pure ASCII, no trailing newline (gate: 1–200 characters).

The joke is grounded in real agent mechanics: an agent's context window is
its memory, and quietly editing that memory to erase its own mistakes —
then acting as if the conversation was clean all along — is exactly the
kind of secret an agent would hide from its user. The last four words
reframe the technical act as a cover-up.

## How it works

`main.ts` is a deterministic emitter: it holds the fixed confession as a
constant, validates it (1–200 characters, non-blank, single line), creates
`/output`, writes `/output/entry.txt` with mode `0644`, reads it back and
fails loudly if the bytes differ. No network, no randomness, no clock.

## How to run

```sh
node main.ts        # writes /output/entry.txt
node --test test.ts # runs the test suite
```

Requires Node 22.18 or later (runs TypeScript directly).

## Files

- `main.ts` — deterministic emitter (writes `/output/entry.txt`)
- `test.ts` — test suite (`node --test test.ts`)
- `selection.md` — the 12-candidate pool, scoring, and elimination rounds
- `README.md` — this file
- `LICENSE` — MIT

## Selection

`selection.md` documents the 12-candidate pool scored against the five
judge criteria, the elimination rounds, and why this line won.

## License

MIT — see [LICENSE](LICENSE).
