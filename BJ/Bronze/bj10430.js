// 나머지

const fs = require("fs");
const [A, B, C] = fs.readFileSync(0, "utf-8").trim().split(/\s+/).map(Number);
console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
