# 풀이 과정
### 1. 문제 정리
- 방문해야할 노드들이 정해져 있을 때, 전위순회, 후위순회를 할 때 방문 순서를 return해라.

### 2. 풀이 과정
- Node class를 만든다.
- 이진 탐색 트리 class를 만든다.
- 주어진 nodeinfo를 y축에 따라 정렬한 변수 하나를 만든다. (y값이 클수록 트리에서의 level이 높다.)
- 정렬된 배열을 따라 돌며 원본 nodeinfo에서 index를 찾는다.
- root는 항상 가장 y값이 큰 수이며, 다음은 x값을 비교해가며 트리를 구축한다. 이때 index + 1도 저장해준다.
- 트리를 완성하면 preorder, postorder를 도는 함수를 만들어 실행시켜준다.

- 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42892?language=javascript