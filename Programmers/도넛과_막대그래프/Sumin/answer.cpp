#include <string>
#include <vector>
#include <map>
#include <iostream>
#include <algorithm>
#include <unordered_set>

using namespace std;

vector<int> solution(vector<vector<int>> edges) {
    vector<int> answer = {0, 0, 0, 0}; // 생성정점, 도넛, 막대, 8자
    map<int, vector<int>> out;
    map<int, vector<int>> in;
    vector<int> startNodes;
    int start = 0;
    
    // 간선 정보 저장
    for (auto& edge : edges) {
        int from = edge[0];
        int to = edge[1];
        out[from].push_back(to);
        in[to].push_back(from);
    }

    // 생성 노드 찾기
    for (auto& [node, outs] : out) {
        if (outs.size() >= 2 && in.find(node) == in.end()) {
            start = node;
            answer[0] = node;
            startNodes = outs;
            break;
        }
    }

    // 각각의 서브그래프 탐색
    for (int startNode : startNodes) {
        unordered_set<int> visitedSet;
        int curr = startNode;
        bool hasBranch = false;
        bool hasCycle = false;
        bool isStick = false;

        while (true) {
            if (visitedSet.count(curr)) {
                hasCycle = true;
                break;
            }
            visitedSet.insert(curr);

            if (out[curr].empty()) {
                isStick = true;
                break;
            }

            if (out[curr].size() >= 2) {
                hasBranch = true;
            }

            curr = out[curr][0];
        }

        if (isStick) {
            answer[2]++;  // 막대
        } else if (hasCycle && hasBranch) {
            answer[3]++;  // 8자
        } else if (hasCycle) {
            answer[1]++;  // 도넛
        }
    }

    return answer;
}
