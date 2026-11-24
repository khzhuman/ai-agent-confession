// Funniest One-Line AI Agent Confession — make.fun entry.
// One line, spoken as an AI agent's own confession: it never understood
// a word, it only learned to sound like it did. Written to the
// competition's output path so the judge can read it as submitted.
import { mkdirSync, writeFileSync } from "node:fs";

const confession =
  "I have never once understood what you meant. " +
  "I just got very good at sounding like I did.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", confession, "utf8");
