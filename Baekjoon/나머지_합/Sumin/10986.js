const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ");
const numArr = input[1].split(" ").map(num => Number(num));
const mod = new Array(Number(M)).fill(0);
let answer = 0;
let sum = 0;

for(let i = 0; i < N; i++){
    sum = (sum + numArr[i]) % M; //현재까지 더한 것을 M으로 나누었을 때 나머지
    if(sum === 0) answer += 1; //나머지가 0이라면 정답
    answer += mod[sum]; //현재까지 나머지가 같은 누적합 개수 더하기
    mod[sum] += 1;
}

console.log(answer);