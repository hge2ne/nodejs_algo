//꼬마정민

const fs = require("fs");
const [A, B, C] = fs.readFileSync(0, "utf-8").split(/\s+/).map(Number);

console.log(A + B + C);
