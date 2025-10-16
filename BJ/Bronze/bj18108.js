//1998년생인 내가 태국에서는 2541년생?!

const fs = require("fs");
const input = fs.readFileSync(0, "utf-8").trim().split(/\s+/).map(Number);
console.log(input[0] - 543);
