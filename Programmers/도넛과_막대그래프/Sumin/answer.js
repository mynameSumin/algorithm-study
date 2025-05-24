function solution(edges) {
    //생성정점 찾기
    const startNode = {};
    const endNode = {};
    
    for(const edge of edges){
        const start = edge[0];
        const end = edge[1];
        if(!startNode[start]) startNode[start] = [];
        if(!endNode[end]) endNode[end] = [];
        startNode[start].push(end);
        endNode[end].push(start);
    }
    
    let makeNode = -1;
    let graphStartNode = [];
    for(const [key, node] of Object.entries(startNode)){
        if(node.length >= 2 && !endNode[key]){
            makeNode = key;
            graphStartNode = node;
            delete startNode[key];
        }
    }
    
    for(const node of graphStartNode){
        const index = endNode[node].indexOf(+makeNode);
        endNode[node].splice(index, 1);
    }
    
    //조건별 그래프 모양 구하기
    var answer = [+makeNode, 0, 0, 0];
    for(const start of graphStartNode){
        const visited = new Set();
        let curr = start;
        
        while(true){
            if(!startNode[curr]){ //막대
                answer[2] += 1;
                break;
            }
            
            if(startNode[curr].length > 1){ //8자
                answer[3] += 1;
                break;
            } 
            
            if(visited.has(curr)){
                answer[1] += 1;
                break;
            }
            
            visited.add(curr);
            curr = startNode[curr].pop();
        }
    }
    
    return answer;
}