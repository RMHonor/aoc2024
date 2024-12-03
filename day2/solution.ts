import fs from "fs";

const input = fs.readFileSync(import.meta.dirname + "/input.txt").toString().split("\n").slice(0, -1);

const reports = input.map((line) => {
  const levels = line.split(" ").map(Number);

  return levels;
});

let result1 = 0;

function safeDiffs(diffs: number[]): boolean {
  const decreasing = diffs.every((diff) => Math.abs(diff) !== diff);

  // if each level is increasing
  const increasing = diffs.every((diff) => Math.abs(diff) === diff);

  // each increase/decrease is between 1 and 3
  const withinRange = diffs.every((diff) => Math.abs(diff) >= 1 && Math.abs(diff) <= 3);

  return (decreasing || increasing) && withinRange;
}

for (const report of reports) {
  const diffs: number[] = [];

  for (let i = 1; i < report.length; i++) {
    diffs.push(report[i] - report[i-1]);
  }

  if (safeDiffs(diffs)) {
    result1++;
  }
}

console.log("part 1", result1);

let result2 = 0;

reportLoop: for (const report of reports) {
  for (let i = 0; i < report.length; i++) {
    const diffs: number[] = [];

    const itemsRemoved = [...report]
    itemsRemoved.splice(i, 1);
    console.log(itemsRemoved)

    for (let j = 1; j < itemsRemoved.length; j++) {
      diffs.push(itemsRemoved[j] - itemsRemoved[j-1]);
    }

    if (safeDiffs(diffs)) {
      result2++;
      continue reportLoop;
    }
  }
}

console.log("part 2", result2);
