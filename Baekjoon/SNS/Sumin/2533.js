const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const nodeNum = Number(input[0]);
const edges = input.slice(1).map(line => line.split(" ").map(Number));
const graph = Array.from({ length: nodeNum + 1 }, () => []);
for (const [u, v] of edges) {
    graph[u].push(v);
    graph[v].push(u);
}
const eaNum = Array.from({ length : nodeNum + 1 }, () => {
    return [0, 0];
}); //각 노드가 EA일 때, 아닐 때 최소 개수를 체크함
const visited = new Set();

function dfs(node) {
    visited.add(node);
    //마지막까지 돌았을 때
    eaNum[node][0] = 0;
    eaNum[node][1] = 1;
    for(const child of graph[node]){
        if(!visited.has(child)){ //방문하지 않은 노드일 때
            dfs(child); //끝까지 방문한다.
            //현재 노드가 EA가 아니면 자식은 무조건 EA여야한다.
            eaNum[node][0] += eaNum[child][1];
            //현재 노드가 EA라면 자식은 EA이거나 아닌 것 중 가장 작은 값을 고른다.
            eaNum[node][1] += Math.min(eaNum[child][0], eaNum[child][1]);
        }
    }
}

dfs(1); //루트부터 시작

console.log(Math.min(eaNum[1][0], eaNum[1][1]));


