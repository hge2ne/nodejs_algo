// 오븐 시계

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/).map(Number);
// 백준 코드는 위 스니펫 기본으로 넣고 input[0] 이런식으로 값 추출해서 사용

let H = input[0];
let M = input[1];
const add = input[2];

M += add;
//조리시간
H = (H + Math.floor(M / 60)) % 24;
M = M % 60;

console.log(H + " " + M);
