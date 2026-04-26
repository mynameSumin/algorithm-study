function solution(t, p) {
    const arr = [];
    for(let i = 0; i < t.length - p.length + 1; i++){
        arr.push(t.slice(i, i + p.length));
    }
    
    var answer = 0;
    for(let i = 0; i < arr.length; i++){
        if(Number(arr[i]) <= Number(p)) answer++;
    }
    
    return answer;
}