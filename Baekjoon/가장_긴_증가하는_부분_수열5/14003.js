const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const numArr = input[1].split(" ").map((n) => Number(n));
const dpIdx = [];
const prev = new Array(N).fill(-1);
let dp = [];

dp.push(numArr[0]);

for (let i = 0; i < N; i++) {
  let left = 0;
  let right = dp.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (dp[mid] < numArr[i]) {
      //현재 값이 중앙값보다 크다면
      left = mid + 1;
    } else {
      //중앙값보다 작다면
      right = mid;
    }
  }

  if (left === dp.length) { //지금이 제일 큰 값이라면
    dp.push(numArr[i]);
    dpIdx.push(i); //인덱스 값
  } else { //중간값이라면
    dp[left] = numArr[i];
    dpIdx[left] = i;
  }

  if (left > 0) {
    prev[i] = dpIdx[left - 1];
  }
}

console.log(dp.length);
let result = [];
let idx = dpIdx[dp.length - 1];
while (idx !== -1) {
  result.push(numArr[idx]);
  idx = prev[idx];
}
result.reverse();
console.log(result.join(" "));
