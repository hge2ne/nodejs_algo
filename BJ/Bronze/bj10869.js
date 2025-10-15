// 사칙연산

const fs = require("fs");
const [A, B] = fs.readFileSync(0, "utf-8").trim().split(/\s+/).map(Number);

console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
/* 
Math.floor() : 소수점 내림(다버림)
*/
console.log(A % B);
