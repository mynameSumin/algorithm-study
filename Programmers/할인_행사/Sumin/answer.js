function solution(want, number, discount) {
    const wantObj = {};
    let answer = 0;
    
    for(const [i, name] of want.entries()) {
        wantObj[name] = number[i];
    }
    
    for(let i = 0; i < discount.length - 9; i++) {
        const temp = {...wantObj};
        for(let j = i; j < i + 10; j++){
            if(temp[discount[j]]){
                temp[discount[j]] -= 1;
            }
        }
        
        let buyAll = true;
        for(const name in wantObj){
            if(temp[name] > 0){
                buyAll = false;
                break;
            }
        }
        
        if(buyAll) answer += 1;
    }
    
    return answer;
}