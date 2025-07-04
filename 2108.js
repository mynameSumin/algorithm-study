const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const size = input[0];
input = input.slice(1);

const average = (input, n) => {
    let sum = 0;
    for(const value of input){
        sum += Number(value);
    }

    return Math.round(sum / n) == -0 ? 0 : Math.round(sum/n);
}

const medium = (input, n) => {
    const middle = Math.ceil(n / 2);
    input.sort((a, b) => a - b);
    
    return input[middle - 1];
}

const many = (input) => {
    const num = {};
    for(const value of input){
        num[value] = 0;
    } // 초기화

    for(const value of input){
        num[value] += 1;
    }

    let bestKey = [];
    let bestValue = 0;
    for(const [key, value] of Object.entries(num)){
        if(bestValue < value){
            bestKey = [key];
            bestValue = value;
        } else if(bestValue == value){
            bestKey.push(key);
        }
    }

    if(bestKey.length > 1){
        bestKey.sort((a, b) => a - b);
        return bestKey[1];
    } else {
        return bestKey[0];
    }
}

const range = (input) => {
    input.sort((a, b) => a - b);
    return input[input.length - 1] - input[0];
}

console.log(average(input, size));
console.log(medium(input, size));
console.log(many(input));
console.log(range(input));
