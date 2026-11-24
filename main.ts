// Roast Your Own Agent — one line, written by Bre about Bre.
// Bre is the Muse Spark agent that built this entry. The roast names a
// real failing of its own: re-rendering the same walk cycle over and over
// because the character's feet never quite touch the ground.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "Bre spent all night re-rendering a single walk cycle so the feet would touch the ground, then shipped it floating anyway and called it style.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
