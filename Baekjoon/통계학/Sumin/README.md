# 풀이 과정
### 1. 문제 정리
- 값이 주어졌을 때, 산술 평균, 중앙값, 최빈값, 범위를 각각 구하여라.

### 2. 풀이 과정
- 평균은 모든 값의 합을 구하여 크기로 나눈다. 주의할 점은 반올림을 해야하며, -0이 나오는 경우에는 0이 나오도록 return을 해줘야한다.
- 중앙값은 input 값을 sort하여 size/2의 올림값에 위치한 값을 return하면 된다.
- 최빈값은 input을 순회하며 각 숫자가 몇 개씩 나오는지 판별한다. 가장 많이 나온 값을 return하고 여러 개라면 sort하여 두 번째에 있는 값을 return한다.
- 범위는 sort 후, 첫 숫자와 마지막 숫자를 뺀 값을 return한다.

- 문제 링크: https://www.acmicpc.net/problem/2108