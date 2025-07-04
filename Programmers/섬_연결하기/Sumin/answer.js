//1. 처음 답변
function solution(n, costs) {
    const visited = new Set();
    const addNode = new Array(costs.length).fill(0).map(() => false);
    var answer = 0;
    
    costs.sort((a, b) => a[2] - b[2]);
    visited.add(costs[0][0]);
    visited.add(costs[0][1]);
    addNode[0] = true;
    answer += costs[0][2];
    
    while(visited.size !== n){
        for(const [index, [first, second, weight]] of costs.entries()){
            if(addNode[index]) continue; //이미 추가한 길일때
            if(visited.has(first) && visited.has(second)) continue; //이미 둘 다 추가된 노드일 때
            
            if(visited.has(first) || visited.has(second)){
                visited.add(first);
                visited.add(second);
                answer += weight;
                addNode[index] = true;   
                break;   
            }
        }
    }

    
    
    return answer;
}

//2. 정석 답변
function solution(n, costs) {
    //사이클이 생기면 안됨 => 연결하려는 두 노드의 부모가 같다면 추가x
    const find = (parent, x) => { //경로 압축
        if(parent[x] === x){
            return x;
        }
        
        parent[x] = find(parent, parent[x]);
        return parent[x];
    }
    
    const union = (parent, rank, x, y) => { //집합 합치기
        const xroot = find(parent, x);
        const yroot = find(parent, y);
        
        if(rank[xroot] < rank[yroot]){
            parent[xroot] = yroot;
        } else if(rank[xroot] > rank[yroot]){
            parent[yroot] = xroot;
        } else {
            parent[xroot] = yroot;
            rank[xroot] += 1;
        }
    }
    
    const parent = Array.from({length : n}, (_, i) => i);
    const rank = Array(n).fill(0); //각 노드 트리의 rank 추적
    costs.sort((a, b) => a[2] - b[2]);
    
    var answer = 0;
    let edges = 0;
    for(const [first, second, weight] of costs){
        if(edges === n - 1){
            break;
        }
        
        const firstRoot = find(parent, first);
        const secondRoot = find(parent, second);
        
        if(firstRoot == secondRoot) continue;
        union(parent, rank, firstRoot, secondRoot);
        
        answer += weight;
        edges += 1;
    }
    
    return answer;
}