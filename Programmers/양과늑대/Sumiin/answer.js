//너비 우선 탐색
class Queue {
    items = [];
    front = 0;
    rear = 0;
    
    push(item) {
        this.items[this.rear++] = item;
    }
    
    pop(){
        return this.items[this.front++];
    }
    
    isEmpty(){
        return this.front === this.rear;
    }
}

function solution(info, edges) {
    const nodes = {};
    
    for(let i = 0; i < edges.length; i++){
        const parent = edges[i][0];
        const child = edges[i][1];
        if(!nodes[parent]) nodes[parent] = [];
        nodes[parent].push(child);
    }
    
    const q = new Queue();
    q.push([0, 1, 0, new Set()]); //현재 위치, 양 수, 늑대 수, 들른 곳
    
    let maxSheep = 0;
    while(!q.isEmpty()){
        const [curr, sheepCount, wolfCount, visited] = q.pop();
        maxSheep = Math.max(sheepCount, maxSheep);
        
        if (nodes[curr]) {
    for(const next of nodes[curr]){
        visited.add(next);
    }
}
        
        for(const next of visited){
            if(info[next]){ //늑대인 경우
                if(sheepCount !== wolfCount + 1){ //늑대를 더해도 괜찮은 경우
                    const newVisited = new Set(visited);
                    newVisited.delete(next);
                    q.push([next, sheepCount, wolfCount + 1, newVisited]);
                }
            } else {
                const newVisited = new Set(visited);
                newVisited.delete(next);
                q.push([next, sheepCount + 1, wolfCount, newVisited]);
            }
        }
    }

    return maxSheep;
}