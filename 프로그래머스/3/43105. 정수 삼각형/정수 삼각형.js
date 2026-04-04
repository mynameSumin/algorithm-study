function solution(triangle) {
    const height = triangle.length;
    const dp = Array.from({length: height}, () => []);
    dp[0].push(triangle[0][0]);
    
    for(let i = 1; i < height; i++){
        const nums = triangle[i];
        
        for(let j = 0; j < nums.length; j++){
            if(j === 0) dp[i].push(nums[j] + dp[i - 1][0]);
            else if(j === nums.length - 1) {
                dp[i].push(nums[j] + dp[i - 1][dp[i - 1].length - 1]);
            }
            else {
                const left = dp[i - 1][j - 1];
                const right = dp[i - 1][j];
                
                dp[i].push(nums[j] + Math.max(left, right));   
            }
        }
    }

    var answer = 0;
    for(const num of dp[height - 1]){
        answer = Math.max(num, answer);
    }
    
    return answer;
}