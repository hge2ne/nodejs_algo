// A+B - 3

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/).map(Number);
const T = input[0];

let lines = []; //빈배열에 받는 이유?
for (let i = 0, idx = 1; i < T; i++, idx += 2) {
  //idx[0] = T. idx : 1부터 시작. idx[1] = A, idx[2] = B
  //0번째 줄은 tc 수이므로 제외
  const A = input[idx];
  const B = input[idx + 1]; // 공백으로 여려
  lines.push(A + B); //lines 빈배열에 덧셈연산 값 넣기
}
console.log(lines.join("\n")); //줄바꿈해서 출력
