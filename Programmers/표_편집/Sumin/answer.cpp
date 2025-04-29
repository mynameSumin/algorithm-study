#include <string>
#include <vector>
#include <stack>
#include <iostream>

using namespace std;

int actionCommand(int before[], int after[], int curr, string& answerString, stack<int>& stack, string commandLine){
    char command = commandLine[0];
    switch(command){
        case 'C':
            {stack.push(curr);
             answerString[curr] = 'X';
            int currBefore = before[curr];
            int currAfter = after[curr];
            if(currAfter == -1){
                after[currBefore] = -1;
                return currBefore;
            } else {
                if(currBefore == -1){
                    before[currAfter] = -1;
                } else {
                    before[currAfter] = currBefore;
                    after[currBefore] = currAfter;
                }
                return currAfter;
            }
            break;}
        case 'Z':
            {int last = stack.top();
             answerString[last] = 'O';
            stack.pop();
            int lastBefore = before[last];
            int lastAfter = after[last];
            if(lastBefore == -1){
                before[lastAfter] = last;
            } else if(lastAfter == -1){
                after[lastBefore] = last;
            } else {
                after[lastBefore] = last;
                before[lastAfter] = last;
            }
            return curr;
            break;}
        case 'D':
            {for(int i = 0; i < stoi(commandLine.substr(2)); i++){
                int afterInt = after[curr];
                curr = afterInt;
            }
            return curr;
            break;}
        case 'U':
            {for(int i = 0; i < stoi(commandLine.substr(2)); i++){
                int beforeInt = before[curr];
                curr = beforeInt;
            }
            return curr;
            break;}
    }
}

string solution(int n, int k, vector<string> cmd) {
    string answer(n, 'O');
    stack<int> stack;
    int before[n];
    int after[n];
    
    for(int i = 0; i < n; i++){
        if(i == 0){
            before[i] = -1;
            after[i] = 1;
        } else if(i == n - 1){
            before[i] = i - 1;
            after[i] = -1;
        } else {
            before[i] = i - 1;
            after[i] = i + 1;
        }
    }
    
    for(int i = 0; i < cmd.size(); i++){
        k = actionCommand(before, after, k, answer, stack, cmd[i]);
    }

    return answer;
}