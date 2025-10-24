// 구구단

const fs = require("fs");
const N = Number(fs.readFileSync(0, "utf-8").trim()); // 2 입력 받아야하기 때문
for (let i = 1; i <= 9; i++) {
  console.log(`${N} * ${i} = ${N * i}`);
}
