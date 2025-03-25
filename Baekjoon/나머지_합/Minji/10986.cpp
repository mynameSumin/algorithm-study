#include <iostream>
#include <vector>
using namespace std;

int main() {
	int n, m;
	long cnt = 0;
	cin >> n >> m;

	vector<long> s(n, 0);
	vector<long> c(m, 0);

	cin >> s[0];
	for (int i = 1;i < n;i++) {
		int a = 0;
		cin >> a;
		s[i] = s[i - 1] + a;
	}
	for (int i = 0;i < n;i++) {
		int check = s[i] % m;
		if (check == 0) cnt++;
		c[check]++;
	}

	for (int i = 0;i < m;i++) {
		if (c[i] > 1) {
			cnt += c[i] * (c[i] - 1) / 2;
		}
	}

	cout << cnt;

	return 0;
}