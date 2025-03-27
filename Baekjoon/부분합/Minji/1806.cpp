#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL), cout.tie(NULL);

	int n, s;
	cin >> n >> s;
	vector<int> a(n + 1, 0);
	vector<int> d(n + 1, 0);

	for (int i = 1;i <= n;i++) {
		cin >> a[i];
		d[i] = d[i - 1] + a[i];
	}

	int i = 0, j = 0;
	int find = n + 1;
	while (j <= n) {
		if (d[j] - d[i] >= s) {
			find = min(find, j - i);
			i++;
		}
		else j++;
	}

	if (find == n + 1) cout << 0;
	else cout << find;

	return 0;
}