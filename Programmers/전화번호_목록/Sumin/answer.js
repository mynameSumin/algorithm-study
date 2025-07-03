function solution(phone_book) {
    //한 번호가 다른 번호의 접두어인 경우가 있는가
    //적어도 nlogn이어야됨
    phone_book.sort();
    console.log(phone_book);
    
    var answer = true;
    for(let i = 0; i< phone_book.length - 1; i++){
        if(phone_book[i + 1].startsWith(phone_book[i])){
            return false;
        }
    }
    return answer;
}