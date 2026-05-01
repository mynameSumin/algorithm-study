function solution(nums) {
    // n개 중 3개를 뽑기 (조합)
    const temp = [];
    
    const combination = (arr, n, curr) => {    
        if(curr.length === n){
            temp.push([...curr])
            return;
        }
        
        for(let i = 0; i < arr.length; i++){
            curr.push(arr[i]);
            combination(arr.slice(i + 1), n, curr);
            curr.pop();
        }
    }
    
    combination(nums, 3, []);
    
    let answer = 0;
    for(let i = 0; i < temp.length; i++){
        const sum = temp[i].reduce((a, b) => a + b, 0);
        let split = false;
        for(let i = 2; i < sum; i++){
            if(sum % i === 0) split = true;
        }
        
        if(!split) answer += 1;
    }
    
    return answer;
}