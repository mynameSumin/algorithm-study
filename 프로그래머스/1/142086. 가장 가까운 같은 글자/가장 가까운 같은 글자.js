function solution(s) {
    var answer = [];
    const num = {};
    
    for(const [index, alpha] of [...s].entries()){
        if(!num[alpha]){
            num[alpha] = index + 1;
            answer.push(-1);
        } else {
            answer.push(index + 1 - num[alpha]);
            num[alpha] = index + 1;
        }
    }
    
    return answer;
}