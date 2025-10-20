// 윤년

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim();

if ((input % 4 == 0 && input % 100 != 0) || input % 400 == 0) {
  console.log(1);
} else {
  console.log(0);
}

// || : OR 연산자. 수식 여러개 비교일 경우 ()에 넣어서 처리하고, || 연산자도 () 안에서 사용됨.
