function solution(ingredient) {
    // 빵-야채-고기-빵(1,2,3,1) 순서
    var answer = 0;
    const stack = [];
    for(let i = 0; i < ingredient.length; i++){
        stack.push(ingredient[i]);
        
        if(stack.length >= 4){
            const four = stack[stack.length - 1];
            const three = stack[stack.length - 2];
            const two = stack[stack.length - 3];
            const one = stack[stack.length - 4];
            
            if(four === 1 && three === 3 && two === 2 && one === 1){
                answer += 1;
                for(let i = 0; i < 4; i++){
                    stack.pop()    
                }
            }
        }
    }
    
    return answer;
}