백준 18111 - 마인크래프트

1. 문제 설명
- 집을 짓기 위해 땅 고르기 작업을 해야함
- 땅 고르기 작업이란 땅을 평평하게 만드는 것!
- 땅을 부수거나 쌓을 수 있는데 부술 땐 2초, 쌓을 땐 1초 소요됨
- 인벤토리에 가지고 있는 것보다 많이 쌓을 수는 없음 (블록 제거 시 인벤토리에 블록 추가됨)
- 가장 짧은 작업시간의 시간과 높이 출력하기 (같은 시간일 때는 가장 높은 높이 출력)

2. 문제 풀이
- 브루트포스로 모든 경우의 수 다 돌림 (높이 256뿐이라서)
- 쌓아야하는 개수와 부서져야하는 개수를 모두 구한 후, 부서져야하는 개수*2+쌓아야하는 개수로 시간을 구함


문제 링크 : https://www.acmicpc.net/problem/18111