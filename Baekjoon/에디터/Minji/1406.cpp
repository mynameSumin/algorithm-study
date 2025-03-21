#include <iostream>
#include <stack>
using namespace std;

stack<char> editor;
stack<char> edit; //잠시 놔둘 스택
string alpha;
int num;

void command(char type, char ch = '\0') {
	if (type == 'L') {
		if (!editor.empty()) {
			edit.push(editor.top());
			editor.pop();
		}
	}
	else if (type == 'D') {
		if (!edit.empty()) {
			editor.push(edit.top());
			edit.pop();
		}
	}
	else if (type == 'B') {
		if (!editor.empty()) {
			editor.pop();
		}
	}
	else if (type == 'P') {
		editor.push(ch);
	}
}

int main() {
	cin >> alpha;
	for (int i = 0;i < alpha.length();i++) {
		editor.push(alpha[i]);
	}
	cin >> num;
	for (int i = 0;i < num;i++) {
		char type, ch = '\0';
		cin >> type;
		if (type == 'P') cin >> ch;
		command(type, ch);
	}
	while (!editor.empty()) {
		edit.push(editor.top());
		editor.pop();
	}
	while (!edit.empty()) {
		cout << edit.top();
		edit.pop();
	}

	return 0;
}