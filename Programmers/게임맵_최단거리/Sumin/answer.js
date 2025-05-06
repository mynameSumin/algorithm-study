class Queue {
    items = [];
    front = 0;
    rear = 0;
    
    push(item) {
        this.items.push(item);
        this.rear++;
    }
    
    pop() {
        return this.items[this.front++];
    }
    
    isEmpty(){
        return this.front == this.rear;
    }
}

function solution(maps) {
    const visited = Array.from(Array(maps.length), () => {
        return Array(maps[0].length).fill(false);
    });
    const isInMap = (dy, dx) => {
        return dy >= 0 && dy < maps.length && dx >= 0 && dx < maps[0].length;
    }
    const dy = [-1, 1, 0, 0];
    const dx = [0, 0, -1, 1];
    
    const q = new Queue();
    q.push([0, 0, 0]);
    visited[0][0] = true;
    
    let answer = -1;
    while(!q.isEmpty()){
        const [cy, cx, length] = q.pop();
        
        if(cy === maps.length - 1 && cx === maps[0].length - 1){ //진영 도착
            answer = length + 1;
            break;
        }
        for(let i = 0; i < 4; i++){
            const ny = cy + dy[i];
            const nx = cx + dx[i];
            
            //가본 적 없음 + 맵 안의 좌표 + 벽이 아님
            if(isInMap(ny, nx) && maps[ny][nx] && !visited[ny][nx]){
                visited[ny][nx] = true;
                q.push([ny, nx, length + 1]);
            }
        }
    }
    
    return answer;
}