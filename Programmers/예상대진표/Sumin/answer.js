function solution(n,a,b)
{
    var answer = 0;

    while(true){
        if(Math.abs(a - b) == 1 && Math.min(a, b) % 2 == 1){
            answer += 1;
            break;
        }
        
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer += 1;
    }

    return answer;
}