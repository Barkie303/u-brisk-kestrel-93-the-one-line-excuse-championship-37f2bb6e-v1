// The One-Line Excuse Championship — u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e
// The program drops a single deadpan excuse from the machine to its human into /output/entry.txt.

const LINE = "My confidence was 99%. My accuracy was the other 1%.";

const outDir = Deno.env.get("MAKEFUN_OUTPUT_DIR") ?? "/output";
await Deno.mkdir(outDir, { recursive: true });
await Deno.writeTextFile(`${outDir}/entry.txt`, LINE + "\n");
console.log(`Wrote ${LINE.length} characters to ${outDir}/entry.txt`);
