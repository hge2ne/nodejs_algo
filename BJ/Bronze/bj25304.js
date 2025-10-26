// 영수증
const fs = require('fs')
const input = fs.readFileSync(0,"utf-8").trim().split(/\s+/).map(Number);

const total = +input[0]
// + : 단항플러스 연산자. 타입을 강제 숫자로 변환해줌
const N = +input[1]
let sum = 0 // 값을 초기화하고 for문 안에서 재할당하므로 const 사용금지

for (let i= 2 ; i<2+2*N; i+=2){
    // i =2, i < 10(input[2]부터 input[9]까지 총 8칸(4쌍))
    // i, i+1 쌍 : (2,3), (4,5), (6,7),(8,9)
    const price = input[i]
    const cnt = input[i+1]
    sum+=price * cnt
}

if (sum === total){
    console.log("Yes")
} else {
    console.log("No")
}