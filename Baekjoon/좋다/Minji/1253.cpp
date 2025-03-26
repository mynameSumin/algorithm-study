#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL), cout.tie(NULL);

	int n, count = 0;
	cin >> n;
	vector<int> v(n, 0);

	for (int i = 0;i < n;i++) {
		cin >> v[i];
	}
	sort(v.begin(), v.end());

	for (int k = 0;k < n;k++) {
		int i = 0, j = n - 1;
		while (i < j) {
			if (v[i] + v[j] == v[k]) {
				if (i != k && j != k) { //본인은 포함되면 안됨
					count++;
					break;
				}
				else if (i == k) i++;
				else if (j == k) j--;
			}
			else if (v[i] + v[j] < v[k]) i++;
			else j--;
		}
	}

	cout << count;

	return 0;
}