function solution(park, routes) { 
    const xLength = park.length;
    const yLength = park[0].length;
    const canMove = (dir, distance, curr) => {
        const [x, y] = curr;
        switch(dir){
            case "E": // 오른쪽으로 이동
                if(y + distance < yLength){
                    for(let i = 1; i <= distance; i++){
                        if(park[x][y + i] === "X") return false;
                    }
                    
                    return true;
                } else { 
                    return false;
                }
                break;
            case "W":
                // 왼쪽으로 이동
                if(y - distance >= 0){
                    for(let i = 1; i <= distance; i++){
                        if(park[x][y - i] === "X") return false;
                    }
                    
                    return true;
                } else { 
                    return false;
                }
                
                break;
            case "N":
                if(x - distance >= 0){
                    for(let i = 1; i <= distance; i++){
                        if(park[x - i][y] === "X") return false;
                    }
                    
                    return true;
                } else { 
                    return false;
                }
                break;
            case "S":   
                if(x + distance < xLength){
                    for(let i = 1; i <= distance; i++){
                        if(park[x + i][y] === "X") return false;
                    }
                    
                    return true;
                } else { 
                    return false;
                }
                break;
        }
    }
    
    let curr = [0, 0]; // x, y
    for(let i = 0; i < xLength; i++){
        for(let j = 0; j < yLength; j++){
            if(park[i][j] === "S") curr = [i, j];
        }
    }
    
    for(const route of routes){
        let [command, distance] = route.split(" ");
        distance = distance/1;
        if(!canMove(command, distance, curr)) continue;
        switch(command){
            case "E": // 오른쪽으로 이동     
                curr = [curr[0], curr[1] + distance];
                break;
            case "W":
                // 왼쪽으로 이동
                curr = [curr[0], curr[1] - distance];
                break;
            case "N":
                // 위쪽으로 이동
                curr = [curr[0] - distance, curr[1]];
                break;
            case "S":
                // 아래쪽으로 이동
                curr = [curr[0] + distance, curr[1]];
                break;
        }
        
        console.log(curr)
    }
    
    return curr;
}