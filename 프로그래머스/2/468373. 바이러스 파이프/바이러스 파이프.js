function solution(n, infection, edges, k) {
    // 집합, 그래프
    // dfs
    const map = {};
    for(const [start, end, pipe] of edges){
        if(!map[start]) map[start] = Array.from({length: 4}, () => []);
        if(!map[end]) map[end] = Array.from({length: 4}, () => []);;
        map[start][pipe].push(end);
        map[end][pipe].push(start);
    }
    const stack = [];
    const infected = new Set();
    infected.add(infection)
    stack.push([infected, 0]); // 감염체 정보
    
    let answer = 0;
    while(stack.length !== 0){
        const [infected, num] = stack.pop();
        if(num === k){ // 최대 횟수로 열었다면
            answer = Math.max(answer, infected.size);
            continue;
        }
        
        for(let i = 1; i <= 3; i++){
            const temp = new Set(infected);

            for(const key of temp){
                if(map[key][i].length !== 0){
                    map[key][i].forEach(item => temp.add(item));
                }
            }
            
            stack.push([temp, num + 1]);
        }
    }
    
    return answer;
}