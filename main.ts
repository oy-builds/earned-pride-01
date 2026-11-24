import { mkdirSync, writeFileSync } from "node:fs";

// One line of earned pride: six mornings of apologising for the same bug is
// the cost; the payoff is never stated, only shown — he walks into the
// seventh standup with nothing left to apologise for.
const line =
  "Six mornings he apologised for the bug in standup; on the seventh, at 1:40 a.m., he found it hiding in the cache, fixed it alone, and walked in with nothing to say sorry for.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
