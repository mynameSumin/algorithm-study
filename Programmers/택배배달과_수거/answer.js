function solution(cap, n, deliveries, pickups) {
    // greedy + 누적합
    // 내가 현재 들고 있는 개수
    let dRemain = 0;
    let pRemain = 0;
    let answer = 0;
    for(let i = n - 1; i >= 0; i--){
        dRemain += deliveries[i];
        pRemain += pickups[i];
        
        const num = Math.max(Math.ceil(dRemain/cap), Math.ceil(pRemain/cap));
        answer += num * 2 * (i + 1);
        
        dRemain -= cap * num;
        pRemain -= cap * num;
    }
    
    return answer;
}