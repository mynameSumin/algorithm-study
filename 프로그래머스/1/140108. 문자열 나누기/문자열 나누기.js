function solution(s) {
    let first = "";
    let firstNum = 0;
    let secondNum = 0;
    let answer = 0;
    
    for(let i = 0; i < s.length; i++){
        const char = s[i];
        // 아무런 값이 없을 때
        if(first === "") {
            first = char;
            firstNum += 1;
        } else {
            // 첫번째 char이랑 같을 때
            if(char === first) firstNum += 1;
            else secondNum += 1;
        }
        
        if(secondNum === firstNum && i !== s.length - 1){
            answer += 1;
            first = "";
            firstNum = 0;
            secondNum = 0;
        }
    }
    
    return answer + 1;
}