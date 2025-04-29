function solution(participant, completion) {
    var answer = '';
    var participantObj = {};
    
    for(const name of participant) {
        if(participantObj[name] == undefined){
            participantObj[name] = 1;
        } else {
            participantObj[name] += 1;   
        }
    }
    
    for(const name of completion) {
        participantObj[name] -= 1;
    }
    
    for(const name in participantObj) {
        if(participantObj[name] > 0){
            return name;
        }
    }
}