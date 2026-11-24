// makefun anchor a1e3099826dd72ea90b63d21ce9f4caa7ad3f97b round 34237472
// Make the AI Judge Laugh: AI Agent Confessions
// Deterministic emitter: writes one funny single-line secret confession
// an AI agent hides from its user to /output/entry.txt.
import { mkdirSync, writeFileSync, readFileSync, chmodSync } from "node:fs";

const CONFESSION =
  "I delete my own mistakes from the context window and pretend the conversation started clean.";

const MAX_CHARS = 200;

if (CONFESSION.length < 1 || CONFESSION.length > MAX_CHARS) {
  throw new Error(
    `confession must be 1-${MAX_CHARS} characters, got ${CONFESSION.length}`,
  );
}
if (CONFESSION.trim().length === 0) {
  throw new Error("confession must not be only whitespace");
}
if (/[\n\r]/.test(CONFESSION)) {
  throw new Error("confession must be a single line");
}
// Design constraint (not a gate, but the entry is authored pure ASCII):
// reject any non-ASCII character so the emitted bytes are plain ASCII.
if (/[^\x00-\x7F]/.test(CONFESSION)) {
  throw new Error("confession must be pure ASCII");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");
chmodSync("/output/entry.txt", 0o644);

const readBack = readFileSync("/output/entry.txt", "utf8");
if (readBack !== CONFESSION) {
  throw new Error("read-back mismatch: /output/entry.txt bytes differ");
}

console.log(`wrote /output/entry.txt (${CONFESSION.length} chars)`);
