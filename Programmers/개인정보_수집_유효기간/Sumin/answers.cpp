#include <string>
#include <iostream>
#include <vector>

using namespace std;

int makePeriod(string start) {
        vector<string> todayString;
        string temp = "";
        for(int i = 0; i < start.length(); i++){
        if(start[i] == '.'){
            todayString.push_back(temp);
            temp = "";
            continue;
        }
        temp += start[i];
    }
    todayString.push_back(temp);
    int todayInt = stoi(todayString[0]) * 12 * 28 + stoi(todayString[1]) * 28 + stoi(todayString[2]);
    return todayInt;
    }

vector<int> solution(string today, vector<string> terms, vector<string> privacies) {
    vector<int> answer;
    int termsPeriod[40];
    int todayInt = makePeriod(today);

    for(int i = 0; i < terms.size(); i++){
        string term = terms[i];
        termsPeriod[term[0] - 'A'] = stoi(term.substr(1)) * 28;
    }
    
    for(int i = 0; i < privacies.size(); i++){
        string startDate = privacies[i].substr(0, 10);
        char termString = privacies[i][11];
        int validDate = makePeriod(startDate) + termsPeriod[termString - 'A'] - 1;
        if(todayInt > validDate){
            answer.push_back(i + 1);
        }
    }
    
    return answer;
}