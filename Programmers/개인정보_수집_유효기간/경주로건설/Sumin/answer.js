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

    isEmpty() {
        return this.rear == this.front;
    }
}

function solution(board) {
    const n = board.length;
    const dy = [1, -1, 0, 0]; // 아래, 위
    const dx = [0, 0, 1, -1]; // 오른쪽, 왼쪽
    const dirState = ["D", "U", "R", "L"]; // 방향 이름

    // visited[y][x][방향] = 최소 비용
    const visited = Array.from({ length: n }, () =>
        Array.from({ length: n }, () => ({
            U: Infinity,
            D: Infinity,
            L: Infinity,
            R: Infinity
        }))
    );

    const q = new Queue();
    // 시작점에서 상하좌우 모두 시작 가능 (비용 0)
    for (let i = 0; i < 4; i++) {
        const ny = 0 + dy[i];
        const nx = 0 + dx[i];
        if (ny >= 0 && ny < n && nx >= 0 && nx < n && board[ny][nx] === 0) {
            visited[ny][nx][dirState[i]] = 100;
            q.push([ny, nx, dirState[i], 100]);
        }
    }

    let minPrice = Infinity;

    while (!q.isEmpty()) {
        const [y, x, dir, cost] = q.pop();

        // 도착점 도달
        if (y === n - 1 && x === n - 1) {
            minPrice = Math.min(minPrice, cost);
            continue;
        }

        for (let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];
            const nextDir = dirState[i];

            if (ny >= 0 && ny < n && nx >= 0 && nx < n && board[ny][nx] === 0) {
                let nextCost = cost + 100;
                if (dir !== nextDir) {
                    nextCost += 500; // 방향 전환 비용
                }

                // 더 적은 비용으로 갈 수 있을 때만 이동
                if (nextCost < visited[ny][nx][nextDir]) {
                    visited[ny][nx][nextDir] = nextCost;
                    q.push([ny, nx, nextDir, nextCost]);
                }
            }
        }
    }

    return minPrice;
}
