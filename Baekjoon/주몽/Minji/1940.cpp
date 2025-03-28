#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL), cout.tie(NULL);

	int n, m, cnt = 0;
	cin >> n >> m;
	vector<int> v(n, 0);
	for (int i = 0;i < n;i++) {
		cin >> v[i];
	}
	sort(v.begin(), v.end());

	int i = 0, j = n - 1;
	while (i < j) {
		if (v[i] + v[j] < m) i++;
		else if (v[i] + v[j] > m) j--;
		else {
			cnt++;
			i++;
			j--;
		}
	}
	cout << cnt;
	return 0;
}