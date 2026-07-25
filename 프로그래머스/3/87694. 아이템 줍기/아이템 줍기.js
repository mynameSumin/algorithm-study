class Queue {
    item = [];
    front = 0;
    rear = 0;
    
    push(i){
        this.item.push(i);
        this.rear++;
    }
    
    pop(){
        return this.item[this.front++];
    }
    
    empty(){
        return this.front === this.rear;
    }
}

function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 최단거리 = BFS = queue
    // 가장 바깥쪽으로만 이동, 내부는 true로 표시한다.
    characterX *= 2; characterY *= 2;
    itemX *= 2; itemY *= 2;

    const map = Array.from({ length: 103 }, () => new Array(103).fill(0));

    // 1) 모든 사각형을 통째로 채움 (테두리 + 내부 다 1)
    for (const [x1, y1, x2, y2] of rectangle) {
        const X1 = x1 * 2, Y1 = y1 * 2, X2 = x2 * 2, Y2 = y2 * 2;
        for (let x = X1; x <= X2; x++) {
            for (let y = Y1; y <= Y2; y++) {
                map[x][y] = 1;
            }
        }
    }

    // 2) 각 사각형의 "순수 내부"(테두리 제외한 안쪽)만 다시 0으로 비움
    for (const [x1, y1, x2, y2] of rectangle) {
        const X1 = x1 * 2, Y1 = y1 * 2, X2 = x2 * 2, Y2 = y2 * 2;
        for (let x = X1 + 1; x <= X2 - 1; x++) {
            for (let y = Y1 + 1; y <= Y2 - 1; y++) {
                map[x][y] = 0;
            }
        }
    }
    
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const visited = new Set([`${characterX}, ${characterY}`]);
    const queue = new Queue();
    queue.push([characterX, characterY, 0]);
    
    while(!queue.empty()){
        const [currX, currY, length] = queue.pop();
        
        if(currX === itemX && currY === itemY){
            return length / 2;
        }
        
        for (const [dr, dc] of dir) {
            const nX = currX + dr;
            const nY = currY + dc;
            
            if(nX < 0 || nY < 0 || nY > 103 || nX > 103) continue;
            if(map[nX][nY] !== 1) continue; // 가는 곳이 테두리가 아니라면
            if(visited.has(`${nX}, ${nY}`)) continue;
            
            visited.add(`${nX}, ${nY}`);
            queue.push([nX, nY, length + 1]);
        }
    }
}