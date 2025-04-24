function solution(record) {
    var answer = [];
    const user = {};
    const command = (line) => {
        const commandValue = line.split(" ");
        const commandName = commandValue[0];
        const id = commandValue[1];
        switch(commandName){
            case "Enter":
                answer.push(`${user[id]}님이 들어왔습니다.`);
                break;
            case "Leave":
                answer.push(`${user[id]}님이 나갔습니다.`);
        }
    }
    
    for(const string of record){ //사용자 이름 저장
        const commandValue = string.split(" ");
        if(commandValue[0] == "Enter" || commandValue[0] == "Change"){ 
            user[commandValue[1]] = commandValue[2]; 
        }
    }
    
    for(const string of record){ //결과 저장
        command(string);
    }
    
    return answer;
}