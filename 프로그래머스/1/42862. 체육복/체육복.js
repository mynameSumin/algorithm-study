function solution(n, lost, reserve) {
    // 뒤에서부터 앞에 lost가 있으면 빌려줌
    const rest = {};
    for(let i = 1; i <= n; i++){
        rest[i] = 1;
    }
    
    for(let i = 0; i < reserve.length; i++){
        rest[reserve[i]] += 1;
    }
    
    for(const num of lost){
        rest[num] -= 1;
    }
    
    lost.sort((a, b) => b - a);
    for(const num of lost){
        if(rest[num] < 1){
             if(rest[num + 1] && rest[num + 1] > 1){
                rest[num] += 1;
                rest[num + 1] -= 1;
            } else if(rest[num - 1] && rest[num - 1] > 1){
                rest[num] += 1;
                rest[num - 1] -= 1;
            }   
        }
    }
    
    var answer = 0;
    for(const key in rest){
        if(rest[key] !== 0) answer += 1;
    }
    return answer;
}