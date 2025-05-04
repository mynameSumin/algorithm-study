function solution(enroll, referral, seller, amount) {
    class Sell {
        constructor(){
            this.money = 0;
            this.top = "";
        }
    }
    
    const info = {};
    for(const [index, name] of enroll.entries()){
        info[name] = new Sell();
        info[name].top = referral[index];
    }
    
    for(const [index, name] of seller.entries()){
        let curr = info[name];
        let currMoney = amount[index] * 100;
        
        while(true){
            const give = Math.floor(currMoney / 10);
            curr.money = curr.money + currMoney - give;
            
            if(curr.top == "-" || give == 0){
                break;
            }
            curr = info[curr.top];
            currMoney = give;
        }
    }
    
    var answer = [];
    for(const name of Object.keys(info)){
        answer.push(info[name].money);
    }
    
    return answer;
}