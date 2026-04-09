function solution(diffs, times, limit) {
    // 총 걸리는 시간
    // needTime = (diff - level) * (time_cur + time_prev) + time_curr;
    // limit을 넘지 않는 최소 숙련도
    let left = 1;
    let right = Math.pow(10, 15);
    let answer = 1;
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        let needTime = 0;
        
        for(let i = 0; i < diffs.length; i++){
            const diff = diffs[i];
            const time_curr = times[i];
            const time_prev = i === 0 ? 0 : times[i - 1];
            if(diff > mid){
                needTime += (diff - mid) * (time_curr + time_prev) + time_curr;    
            } else {
                needTime += time_curr;
            }
            
            if(needTime > limit) break;
        }
        
        if(needTime > limit){
            left = mid + 1;
        } else { // 더 작은 게 있는지 찾아보기
            answer = mid;
            right = mid - 1;
        }
    }
    
    return answer;
}