import fs from "fs";

const input = fs.readFileSync(import.meta.dirname + "/input.txt").toString();

const regexP1 = /mul\([0-9]+,[0-9]+\)/g;

const resultP1 = input.match(regexP1)?.reduce((sum, next) => {
  const [first, second] = next.match(/[0-9]+/g) || [];

  return sum + (Number(first) * Number(second));
}, 0);

console.log("part 1", resultP1);

const regexP2 = /(mul\([0-9]+,[0-9]+\))|do\(\)|don't\(\)/g;

let enabled = true;
let resultP2 = 0;

for (const match of input.match(regexP2) ?? []) {
  const [first, second] = match.match(/[0-9]+/g) || [];
  switch (match) {
    case "do()":
      enabled = true;
      break;
    case "don't()":
      enabled = false;
      break;
    default:
      if (enabled) {
        resultP2 = resultP2 + (Number(first) * Number(second));
      }
  }
}

console.log("part 2", resultP2);
