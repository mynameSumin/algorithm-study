function solution(id_list, report, k) {
    var answer = [];
    const user = {};
    const numOfReport = {};
    for(const name of id_list){
        user[name] = 0;
        numOfReport[name] = [];
    }
    
    for(const list of report){
        const nameList = list.split(" ");
        numOfReport[nameList[1]].push(nameList[0]);
    }
    
    for(const name in numOfReport){
        const temp = numOfReport[name];
        numOfReport[name] = [...new Set(temp)];
        if(numOfReport[name].length >= k){
            for(const userName of numOfReport[name]){
                user[userName] += 1;
            }
        }
    }
    
    for(const name in user){
        answer.push(user[name]);
    }
    
    return answer;
}