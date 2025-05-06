function solution(n, computers) {
    const edge = {};
    for(const [index, info] of computers.entries()){
        if(!edge[index]) edge[index] = [];
        for(const [i, node] of info.entries()){
            if(index == i) continue;
            if(node == 1) edge[index].push(i);
        }
    }

    const visited = new Set();
    const stack = [];
    let answer = 0;
    const dfs = (curr, visited) => {
        visited.add(curr);
        
        for(const i of edge[curr]){
            if(visited.has(i)) continue;
            dfs(i, visited);
        }
    }
    
    for(let i = 0; i < computers.length; i++){
        if(visited.has(i)) continue;
        dfs(i, visited);
        answer += 1;
    }
    
    return answer;
}