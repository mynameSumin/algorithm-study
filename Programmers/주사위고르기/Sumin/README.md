# 풀이 과정
### 1. 문제 정리
- 정육면체 주사위가 여러 개 있다. 각 면에 적힌 값은 주사위마다 다르다.
- A, B가 총 N개 중 N/2개씩 주사위를 가져가서 굴릴 때, A가 이길 확률이 가장 큰 조합의 주사위를 구해라.

### 2. 풀이과정
- N개 중에서 N/2개를 고르는 것은 조합으로 구현할 수 있다.
- N/2개를 굴렸을 때 나올 수 있는 모든 합의 경우의 수를 구한다.
- A의 경우의 수와 B의 경우의 수를 비교해서 A가 이기는 횟수를 구한다.

### 3. 중요 포인트
- 카카오는 조합을 이용하는 문제가 많이 나오는 것 같다.
- 조합을 구현하는 로직은 외워두는 것이 좋다.
- 조합 로직은 다음과 같다.
```
// arr = 뽑을 수 있는 모든 경우의 수가 들어있는 배열, 예를 들어 주사위라면 [1,2,3,4,5,6]이다.
// n = 뽑을 개수
const combinations = (arr, n) => {
    const result = []; //조합을 넣을 배열
    const recur = (curr, rest) => {
        if(curr.length == n){ //지금 구한 조합이 내가 원하는 개수만큼 뽑은 것일 때
            result.push(curr);
            return;
        }

        for(let i = 0; i < rest.length; i++){
            recur([...curr, rest[i]], rest.slice(i + 1));
        }
    };

    recur([], arr);
    return result;
}
````

- 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/258709