//곱셈

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

// 일의 자리
const oneNum = input[1] % 10;
// 십의 자리
const tenNum = Math.floor((input[1] % 100) / 10);
// 백의 자리
const hundredNum = Math.floor(input[1] / 100);

// Math.floor 하는 이유: '/' 나머지 연산자는 소수점까지 출력되므로. 날리기
//계산 시작
console.log(input[0] * oneNum);
console.log(input[0] * tenNum);
console.log(input[0] * hundredNum);
console.log(input[0] * input[1]);
