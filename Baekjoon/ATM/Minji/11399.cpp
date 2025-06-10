#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
	int n, sum = 0;
	cin >> n;

	vector<int> p(n);
	vector<int> s(n); // ДЉРћЧе

	for (int i = 0;i < n;i++) {
		cin >> p[i];
	}

	sort(p.begin(), p.end());
	s[0] = p[0];
	sum += s[0];

	for (int i = 1;i < n;i++) {
		s[i] = s[i - 1] + p[i];
		sum += s[i];
	}
	cout << sum;

	return 0;
}