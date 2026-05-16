function solution(X, Y) {
    const Yarr = {};
    
    for(let i = 0; i < Y.length; i++){
        if(!Yarr[Y[i]]) Yarr[Y[i]] = 1;
        else Yarr[Y[i]] += 1;
    }
    
    const same = [];
    for(let i = 0; i < X.length; i++){
        if(Yarr[X[i]] && Yarr[X[i]] !== 0){
            same.push(X[i]);
            Yarr[X[i]] -= 1;
        }
    }
    
    if(same.length === 0) return "-1";
    same.sort((a, b) => b - a);
    
    var answer = same.join("");
    if(answer / 1 === 0) return "0";
    return answer;
}