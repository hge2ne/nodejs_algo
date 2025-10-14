// 몫 구하기
function solution(num1, num2) {
  var answer = ~~(num1 / num2);
  /* 
  ~ : 부정연산자
  ~~ : 값 -(n+1) 나옴
  다른 방법
  Math.floor() : 소수점 내림. 몫 구하기 가능
  */
  return answer;
}
