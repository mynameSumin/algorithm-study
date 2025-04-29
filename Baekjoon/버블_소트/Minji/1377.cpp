#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
	int n, max = 0;
	cin >> n;
	vector <pair<int, int>> a(n);

	for (int i = 0;i < n;i++) {
		cin >> a[i].first;
		a[i].second = i;
	}

	sort(a.begin(), a.end());

	for (int i = 0;i < n;i++) {
		if (max < a[i].second - i) {
			max = a[i].second - i;
		}
	}
	cout << max + 1;

	return 0;
}