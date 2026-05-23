function solution(survey, choices) {
    // 1,2,3 = 비동의
    // 5,6,7 = 동의
    // /4를 했을 때 몫이 있다 = 비동의 , 없다 = 동의
    const category = {};
    category["R"] = 0;
    category["T"] = 0;
    category["C"] = 0;
    category["F"] = 0;
    category["J"] = 0;
    category["M"] = 0;
    category["A"] = 0;
    category["N"] = 0;
    
    for(let i = 0; i < survey.length; i++){
        const first = survey[i][0];
        const second = survey[i][1];
        
        if(choices[i]/4 < 1){
            category[first] += 4 - choices[i] % 4;
        } else {
            category[second] += choices[i] % 4;
        }
    }
    
    var answer = '';
    if(category["R"] >= category["T"]) answer += "R";
    else answer += "T";
    
    if(category["C"] >= category["F"]) answer += "C";
    else answer += "F";
    
    if(category["J"] >= category["M"]) answer += "J";
    else answer += "M";
    
    if(category["A"] >= category["N"]) answer += "A";
    else answer += "N";
    
    return answer;
}