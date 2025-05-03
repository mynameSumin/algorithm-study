function solution(orders, course) {
    const combinations = (arr, n) => {
        if(n === 1) return arr.map((v) => [v]);
        const result = [];
        
        arr.forEach((el, index, arr) => {
            const rest = arr.slice(index + 1);
            const combis = combinations(rest, n - 1);
            const combine = combis.map((v) => [el, ...v]);
            result.push(...combine);
        });
        
        return result;
    }
    
    const menus = {};
    const answer = [];
    for(const [index, order] of orders.entries()){
        const arr = [];
        for(let i = 0; i < order.length; i++){
            arr.push(order[i]);
        } //주문 메뉴로 arr 생성
        arr.sort();
        for(const num of course){
            if(!menus[num]) menus[num] = {};
            const combination = combinations(arr, num);
            
            combination.forEach((arr) => {
                const menuCombo = arr.join("");
                if(!menus[num][menuCombo]) menus[num][menuCombo] = 0;
                menus[num][menuCombo] += 1;
            });
        }
    }
    
    for(const num of course){
        const list = menus[num];
        const max = Math.max(...Object.values(list));
        
        if(max < 2) continue;
        for(const [key, value] of Object.entries(list)){
            if(value === max){
                answer.push(key);
            }
        }
    }
    
    answer.sort();
    return answer;
}