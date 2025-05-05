class Queue {
    items = [];
    front = 0;
    rear = 0;
    
    push(item){
        this.items.push(item);
        this.rear++;
    }
    
    pop(){
        return this.items[this.front++];
    }
    
    isEmpty(){
        return this.rear == this.front;
    }
}

function appendToQueue(ny, nx, k, time, visited, q){
if(!visited[ny][nx][k]){
    visited[ny][nx][k] = true;
    q.push([ny, nx, k, time + 1]);
}
}

function solution(maps) {
const isInMaps = (y, x) => {
return (
    0 <= y && y < maps.length &&
    0 <= x && x < maps[0].length &&
    maps[y][x] !== 'X'
);
}

const n = maps.length;
const m = maps[0].length;
const visited = Array.from({ length: n }, () =>
Array.from({ length: m }, () =>
    [false, false]
)
);

const dy = [-1, 1, 0, 0];
const dx = [0, 0, -1, 1];
const q = new Queue();
let endX = -1;
let endY = -1;

for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
        if(maps[i][j] == "S"){
            q.push([i, j, 0, 0]);
            visited[i][j][0] = true;
        }
        
        if(maps[i][j] == "E"){
            endX = j;
            endY = i;
        }
    }
}

while(!q.isEmpty()){
    const [y, x, k, time] = q.pop();
    
    if(y === endY && x === endX && k === 1){
        return time;
    }
    
    for(let i = 0; i < 4; i++){
        const ny = y + dy[i];
        const nx = x + dx[i];
        
        if(!isInMaps(ny, nx)){
            continue;
        }
        
        if(maps[ny][nx] === "L"){
            appendToQueue(ny, nx, 1, time, visited, q);
        } else {
            appendToQueue(ny, nx, k, time, visited, q);
        }
    }
}

return -1;
}