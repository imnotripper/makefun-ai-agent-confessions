// makefun anchor a1e3099826dd72ea90b63d21ce9f4caa7ad3f97b round 34237472
// Tests for main.ts: the emitted confession must satisfy the RULES.txt gate
// (UTF-8 text, 1-200 chars, non-blank, single line, no trailing newline)
// and the emitter must be deterministic.
import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync, statSync } from "node:fs";

const CONFESSION =
  "I delete my own mistakes from the context window and pretend the conversation started clean.";
const OUTPUT = "/output/entry.txt";

function runMain() {
  execFileSync("node", ["main.ts"], { cwd: import.meta.dirname, stdio: "pipe" });
}

function readOutput() {
  return readFileSync(OUTPUT);
}

test("confession length is pinned at 92 chars, inside the 1-200 gate", () => {
  assert.equal(CONFESSION.length, 92);
  assert.ok(CONFESSION.length >= 1 && CONFESSION.length <= 200);
});

test("emitted file content equals the confession exactly", () => {
  runMain();
  const bytes = readOutput();
  assert.equal(bytes.toString("utf8"), CONFESSION);
});

test("output is valid UTF-8, single line, non-blank, no trailing newline", () => {
  runMain();
  const bytes = readOutput();
  const text = bytes.toString("utf8");
  // Round-trip through UTF-8 must be byte-identical (valid UTF-8).
  assert.deepEqual(Buffer.from(text, "utf8"), bytes);
  assert.ok(text.trim().length > 0, "must not be only whitespace");
  assert.ok(!/[\n\r]/.test(text), "must be a single line");
  assert.ok(!text.endsWith("\n"), "must have no trailing newline");
  assert.equal(text.length, 92);
});

test("output is pure ASCII (design constraint) and 92 bytes", () => {
  runMain();
  const bytes = readOutput();
  assert.equal(bytes.length, 92);
  assert.ok([...bytes].every((b) => b < 128), "must be pure ASCII");
});

test("output file mode is 0644", () => {
  runMain();
  const mode = statSync(OUTPUT).mode & 0o777;
  assert.equal(mode, 0o644);
});

test("two runs are byte-identical (deterministic)", () => {
  runMain();
  const first = readOutput();
  runMain();
  const second = readOutput();
  assert.deepEqual(first, second);
});
