#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
	// 입력이 많아서 c++에서는 cin, cout이 느림
	ios::sync_with_stdio(false);
	cin.tie(NULL), cout.tie(NULL);

	int n, k;
	cin >> n >> k;

	vector <int> a(n);
	for (int i = 0; i < n; i++) {
		cin >> a[i];
	} //O(n)
	sort(a.begin(), a.end()); //O(nlogn)

	cout << a[k - 1]; //O(1)

	return 0;
}