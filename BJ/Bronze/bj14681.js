// 사분면 고르기

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split("\n").map(Number); // 제출할 땐 0 으로 제출
// 로컬 입출력 테스트할 때는 "/dev/stdin"

if (input[0] > 0 && input[1] > 0) console.log(1);
else if (input[0] < 0 && input[1] > 0) console.log(2);
else if (input[0] < 0 && input[1] < 0) console.log(3);
else console.log(4);
