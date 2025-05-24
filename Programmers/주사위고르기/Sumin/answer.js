function solution(dice) {
    //n개 중에 n/2개 뽑기 (조합)
    const combinations = (arr, n) => {
        const result = [];
        const recur = (curr, rest) => {
            if(curr.length == n){
                result.push(curr);
                return;
            }

            for(let i = 0; i < rest.length; i++){
                recur([...curr, rest[i]], rest.slice(i + 1));
            }
        }

        recur([], arr);
        return result;
    }

    //배열에서 나올 수 있는 합의 모든 조합 구하기
    const allSum = (diceSet) => {
        let sums = [0];

        for(const dice of diceSet){
            const newSums = [];
            for(const num of dice){
                for(const sum of sums){
                    newSums.push(sum + num);
                }
            }
            sums = newSums;
        }
        return sums;
    }

    //n/2개 뽑기
    const N = dice.length;
    const diceNum = Array.from({length: N}, (_,i) => i);
    const combos = combinations(diceNum, N/2); //모든 경우의 수
    
//     //각 경우의 수마다 이기는 횟수를 구해야함
    let maxWins = 0;
    let bestCombo = [];
    for(const combo of combos){
        const B = diceNum.filter((i) => !combo.includes(i));
        const setA = combo.map((i) => dice[i]);
        const setB = B.map((i) => dice[i]);

        //모든 합의 경우
        const sumA = allSum(setA);
        const sumB = allSum(setB);

        //이기는 횟수 비교
        sumA.sort((a, b) => a - b);
        sumB.sort((a, b) => a - b);

        //이진탐색으로 비교
        let wins = 0;
        for(const a of sumA){
            let left = 0, right = sumA.length;
            while(left < right){
                let mid = Math.floor((left + right) / 2);
                if(sumB[mid] < a){ //지금 a의 값이 B의 mid값보다 크다면
                    left = mid + 1;
                } else {
                    right = mid;
                }
            }

            wins += left;
        }

        if(wins > maxWins){
            maxWins = wins;
            bestCombo = combo;
        }
    }

    return bestCombo.map((i) => i + 1);
}