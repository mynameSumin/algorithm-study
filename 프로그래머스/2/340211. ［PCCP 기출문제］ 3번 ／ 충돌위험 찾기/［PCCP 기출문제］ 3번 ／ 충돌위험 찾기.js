function solution(points, routes) {
    // points = 방문해야하는 위치
    // routes = 로봇들이 몇번포인트에서 몇번으로 가야하는지 나타난 것
    // 총 몇 번 부딪히는가?
    const location = Array.from({length: 100000}, () => []);
    const time = Array.from({length: routes.length}, () => 0);
    
    for(const [index, arr] of routes.entries()){
        for(let i = 0; i < arr.length - 1; i++){
            // 시작점, 도착점
            const start = arr[i];
            const end = arr[i + 1];
            
            const [sX, sY] = points[start - 1];
            const [eX, eY] = points[end - 1];

            const moveX = eX - sX;
            const moveY = eY - sY;
            
            // 0초일때만 따로 계산해줌
            if(i == 0){
                location[0].push(`${sX}, ${sY}`);
            }

            // R부터 움직임
            if(moveX >= 0){
                for(let i = 1; i <= moveX; i++){
                    location[time[index] + i].push(`${sX + i}, ${sY}`);
                }
            } else {
                for(let i = -1; i >= moveX; i--){
                    location[time[index] + Math.abs(i)].push(`${sX + i}, ${sY}`);
                }
            }
            time[index] += Math.abs(moveX);

            // C 움직임
            if(moveY >= 0){
                for(let i = 1; i <= moveY; i++){
                    location[time[index] + i].push(`${sX + moveX}, ${sY + i}`);
                }
            } else {
                for(let i = -1; i >= moveY; i--){
                    location[time[index] + Math.abs(i)].push(`${sX + moveX}, ${sY + i}`);
                }
            }
            
            time[index] += Math.abs(moveY);
        }
    }
    
    let answer = 0;
    for(let i = 0; i < location.length; i++){
        const temp = new Set(location[i]);
        
        // 만약 크기가 다르다면
        if(location[i].length !== temp.size){
            const test = new Set();
            const visit = new Set();
            for(let j = 0; j < location[i].length; j++){
                const before = test.size;
                test.add(location[i][j]);
            
                if(before == test.size && !visit.has(location[i][j])) {
                    answer += 1;
                    visit.add(location[i][j])
                };
            }
        }
    }
    
    return answer;
}