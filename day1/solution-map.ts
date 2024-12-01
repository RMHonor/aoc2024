import fs from "fs";

// alternative implementation of day1 part 2 using a map, for O(n) complexity rather than O(n^2)
console.time();
const input = fs.readFileSync(import.meta.dirname + "/input.txt").toString().split("\n").slice(0, -1);

const left: number[] = [];
const right: Record<number, number> = {};

input.forEach((line) => {
  const [value1, value2] = line.split("   ");

  left.push(Number(value1));
  right[Number(value2)] = right[Number(value2)] ? right[Number(value2)] + 1 : 1;
});

let result = 0;

// O(n)
for (const leftVal of left) {
  result += right[leftVal] ? right[leftVal] * leftVal : 0;
}

console.timeEnd();
console.log("part 2", result);
