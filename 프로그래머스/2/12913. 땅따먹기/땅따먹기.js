function solution(land) {
    const length = land.length;
    const dp = Array.from({length: length}, () =>
                         Array.from({length: 4}, () => 0));
    dp[0] = [...land[0]];
    
    for(let i = 1; i < length; i++){
        const nums = land[i];
        
        for(let j = 0; j < nums.length; j++){
            const temp = [];
            for(let z = 0; z < 4; z++){
                if(j === z) continue;
                temp.push(dp[i - 1][z]);
            }
            dp[i][j] = land[i][j] + Math.max(...temp);
        }
    }
    
    return Math.max(...dp[length - 1])
}