function solution(board, moves) {
    var answer = 0;
    var basket = [];
    var visited = new Array(board[0].length).fill(0);
    for(let i = 0; i < moves.length; i++){
        const line = moves[i] - 1; //집게가 있는 라인
        let doll = 0;
        
        while(doll == 0){
            let floor = visited[line];
            if(floor >= board.length){
                break;
            }
            doll = board[floor][line];
            visited[line] += 1;
        }
        
        if(doll == 0){ //인형이 바닥까지 없는 경우
            continue;
        }
        
        if(basket.length == 0){ //바구니가 비었을 때
            basket.push(doll);
        } else {
            if(basket[basket.length - 1] == doll){ //마지막 인형과 같은 인형일 때
                basket.pop();
                answer += 2;
            } else {
                basket.push(doll);
            }
        }
    }
    
    return answer;
}