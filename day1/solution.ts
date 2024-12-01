import fs from "fs";

const input = fs.readFileSync(import.meta.dirname + "/input.txt").toString().split("\n").slice(0, -1);

const left: number[] = [];
const right: number[] = [];

input.forEach((line) => {
  const [value1, value2] = line.split("   ");

  left.push(Number(value1));
  right.push(Number(value2));
});

left.sort();
right.sort();

let result1 = 0;

// O(n)
for (let i = 0; i < left.length; i++) {
  result1 += Math.abs(left[i] - right[i]);
}

console.log("part 1", result1);

let result2 = 0;

// O(n^2)
for (const leftVal of left) {
  // get count on right list from left val
  let found = 0;
  for (const rightVal of right) {
    if (leftVal === rightVal) {
      found++
    }
  }
  // sum by left num

  result2 += found * leftVal;
}

console.log("part 2", result2);
