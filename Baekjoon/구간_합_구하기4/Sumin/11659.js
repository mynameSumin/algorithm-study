const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ");
const numArr = input[1].split(" ").map(n => Number(n)); //0 5 4 3 2 1
numArr.unshift(0);
const sum = new Array(N + 1).fill(0);
for(let i = 1; i <= N; i++){
    sum[i] = sum[i - 1] + numArr[i];
}

const answer = [];
for(let i = 0; i < M; i++){
    const distance = input[2 + i].split(" ").map(n => Number(n));
    answer.push(sum[distance[1]] - sum[distance[0] - 1]);
}

for(let i = 0; i < M; i++){
    console.log(answer[i]);
}