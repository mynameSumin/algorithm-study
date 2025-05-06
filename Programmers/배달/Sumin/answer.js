class MinHeap {
    constructor() {
        this.items = [];
    }

    size() {
        return this.items.length;   
    }

    push(item) {
        this.items.push(item);
        this.bubbleUp();
    }

    pop(){
        if(this.size() === 0) return null;
        const item = this.items.shift();
        this.bubbleDown();
        return item;
    }

    swap(a, b){
        [this.items[a], this.items[b]] = [this.items[b], this.items[a]];
    }

    bubbleUp() {
        let index = this.size() - 1;
        while(index > 0){
            let parentIndex = Math.floor((index - 1)/2);
            if(this.items[parentIndex] <= this.items[index]) break; 
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    bubbleDown() {
        let index = 0;
        while(index * 2 + 1 < this.size()){
            let leftChild = index * 2 + 1;
            let rightChild = index * 2 + 2;
            const smallerChild = 
                  rightChild < this.size() && rightChild < leftChild ?
                  rightChild : leftChild;
            
            if(this.items[index] <= this.items[smallerChild]) break;
            this.swap(index, smallerChild);
            index = smallerChild;
        }
    }
}

function solution(N, road, K) {
    const distance = Array(N + 1).fill(Infinity);
    distance[1] = 0;
    
    const graph = Array.from({length : N + 1}, () => []);
    for(const [start, to, value] of road){
        graph[start].push([to, value]);
        graph[to].push([start, value]);
    }
    
    const queue = new MinHeap();
    queue.push([0, 1]);
    while(queue.size() > 0){
        const [dist, node] = queue.pop();
        
        for(const [nextNode, nextDist] of graph[node]){
            const cost = dist + nextDist;
            if(cost < distance[nextNode]){
                distance[nextNode] = cost;
                queue.push([cost, nextNode]);
            }
        }
    }
    
    return distance.filter((dist) => dist <= K).length;
}