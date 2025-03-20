function solution(n, k, cmd) {
    const deleted = [];
    const answer = new Array(n).fill(0).map(() => "O");
    const prev = new Array(n).fill(0).map((_, i) => i - 1);
    const next = new Array(n).fill(0).map((_, i) => i + 1);
    next[n - 1] = null; //마지막 행의 next는 null
    
    for(const c of cmd){
        const command = c[0]; //명령어
        
        if(command == "C"){ //삭제
            const nextItem = next[k];
            const prevItem = prev[k];
            if(nextItem !== null) prev[nextItem] = prevItem; //마지막 행이 아닐 경우
            if(prevItem !== -1) next[prevItem] = nextItem;
            deleted.push(k);
            answer[k] = "X";
            k = nextItem == null ? prevItem : nextItem;
        }
        
        if(command == "Z"){ //복구
            const last = deleted.pop();
            answer[last] = "O";
            const prevOfLast = prev[last];
            const nextOfLast = next[last];
            if(prevOfLast !== -1) next[prevOfLast] = last;
            if(nextOfLast !== null) prev[nextOfLast] = last;
        }
        
        else{
            const num = c.split(" ")[1];
            if(command == "U"){
               for(let i = 0; i < num; i++){
                   k = prev[k];
               }
            }
            
            if(command == "D"){
                for(let i = 0; i < num; i++){
                    k = next[k];
                }
            }
        }
        // console.log(k, answer);
    }
    
    return answer.join("");
}
