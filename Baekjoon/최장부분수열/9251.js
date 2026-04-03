const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const string1 = input[0];
const string2 = input[1];

// 최장부분수열
// 각 자리에서 가장 긴 부분을 저장
const m = string1.length;
const n = string2.length;
const arr = Array.from({length: m + 1}, () => Array.from({length: n + 1}, () => 0));

for(let i = 1; i <= m; i++){
    for(let j = 1; j <= n; j++){
        if(string1[i - 1] === string2[j - 1]){
            arr[i][j] = arr[i - 1][j - 1] + 1;
        } else {
            arr[i][j] = Math.max(arr[i][j - 1], arr[i - 1][j]);
        }
    } 
}

console.log(arr[m][n]);