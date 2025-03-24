#include <iostream>
using namespace std;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL), cout.tie(NULL);

	int n, m, idxi, idxj, s[100001] = {};

	cin >> n >> m;
	for (int i = 1;i <= n;i++) {
		int num;
		cin >> num;
		s[i] = s[i - 1] + num;
	}


	for (int i = 0;i < m;i++) {
		cin >> idxi >> idxj;
		cout << s[idxj] - s[idxi - 1] << '\n';
	}

	return 0;
}