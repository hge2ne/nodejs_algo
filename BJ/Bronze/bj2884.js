//알람시계

const fs = require("fs");
const [H, M] = fs.readFileSync(0, "utf-8").trim().split(/\s+/).map(Number);

let h = H;
let m = M - 45;

if (m < 0) {
  m += 60;
  h = (H - 1 + 24) % 24;
}

console.log(h, m);
