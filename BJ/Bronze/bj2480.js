//주사위 세개

const fs = require("fs");
const [a, b, c] = fs.readFileSync(0, "utf-8").trim().split(/\s+/).map(Number);

//같은 눈 3개
if (a === b && b === c) {
  console.log(10000 + a * 1000);
} else if (a === b || a === c) {
  console.log(1000 + a * 100);
} else if (b === c) {
  console.log(1000 + b * 100);
} else {
  console.log(Math.max(a, b, c) * 100);
}

//Math.max() : 최대값 찾는 함수
