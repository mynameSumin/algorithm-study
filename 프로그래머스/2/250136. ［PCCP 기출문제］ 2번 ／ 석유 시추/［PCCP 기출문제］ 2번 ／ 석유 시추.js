function solution(land) {
    const n = land.length;
    const m = land[0].length;

    const visited = Array.from({length: n}, () => new Array(m).fill(false));
    const colOil = new Array(m).fill(0);   // 각 열을 시추했을 때 얻는 석유량
    const dir = [[-1,0],[1,0],[0,-1],[0,1]];

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(land[i][j] === 0 || visited[i][j]) continue;

            // 덩어리 하나 탐색
            let size = 0;
            const cols = new Set();
            const stack = [[i, j]];
            visited[i][j] = true;

            while(stack.length){
                const [x, y] = stack.pop();
                size++;
                cols.add(y);

                for(const [dx, dy] of dir){
                    const nx = x + dx, ny = y + dy;
                    if(nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
                    if(land[nx][ny] === 0 || visited[nx][ny]) continue;
                    visited[nx][ny] = true;   // push할 때 미리 체크 → 중복 방지
                    stack.push([nx, ny]);
                }
            }

            // 이 덩어리가 걸친 모든 열에 size만큼 가산
            for(const c of cols) colOil[c] += size;
        }
    }

    return Math.max(...colOil);
}