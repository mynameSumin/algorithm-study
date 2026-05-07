function solution(tickets) {
    const map = {};
    for (const [start, end] of tickets) {
        if (!map[start]) map[start] = [];
        map[start].push(end);
    }
    // 알파벳 역순 정렬 (DFS에서 pop()으로 앞선 것부터 꺼내기 위해)
    for (const key in map) {
        map[key].sort((a, b) => b.localeCompare(a));
    }

    const answer = [];

    function dfs(current) {
        while (map[current] && map[current].length > 0) {
            const next = map[current].pop(); // 알파벳 앞선 것부터
            dfs(next);
        }
        answer.unshift(current); // 돌아올 때 앞에 삽입
    }

    dfs("ICN");
    return answer;
}