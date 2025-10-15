// 사칙연산
const fs = require("fs");
const [A, B] = fs.readFileSync(0, "utf-8").trim().split(/\s+/).map(Number);
console.log(A / B);
