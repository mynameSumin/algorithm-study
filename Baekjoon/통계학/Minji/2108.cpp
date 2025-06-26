#include <iostream>
#include <algorithm>
#include <vector>
#include <cmath>
#include <unordered_map> //���ľȵǴµ� �̰� �� ����
using namespace std;

double avg(vector<int> v) { //���� �� ���� �����Ƿ� ���� ��������
	double sum = 0;
	for (int i = 0;i < v.size();i++) {
		sum += v[i];
	}
	if (sum > 0) return round(sum / v.size());
	else {
		double result = round(abs(sum) / v.size());
		if (result == 0) return 0;
		else return result * (-1);
	}

}

int mid(vector<int> v) {
	int m = v.size() / 2;
	return v[m];
}

// ���� �� ���� ���� �ι�°�� ���� �� ���
int mode(vector<int> v) {
	unordered_map<int, int> count;
	// 1 1 2 2 3 4
	for (int i = 0;i < v.size();i++) {
		int num = v[i];
		count[num]++; // 1:2, 2:2, 3:1, 4:1 �̷������� �����
	}

	vector<pair<int, int>> cnt(count.begin(), count.end()); //�ؽø��� ���ľȵǹǷ� ���Ϳ� �ű��
	//�������� ����. pair<int, int> ���� �����Ƽ� auto ���
	sort(cnt.begin(), cnt.end(), [](auto& a, auto& b) {
		return a.second > b.second;
		});

	vector<int> modes;
	int max = cnt[0].second;

	for (int i = 0;i < cnt.size();i++) {
		if (cnt[i].second == max) {
			modes.push_back(cnt[i].first);
		}
		else break;
	}

	sort(modes.begin(), modes.end());
	if (modes.size() == 1) return modes[0];
	else return modes[1];
}

int range(vector<int> v) {
	int max = v[v.size() - 1];
	int min = v[0];
	return abs(max - min);
}

int main() {
	ios::sync_with_stdio(false);
	cin.tie(NULL), cout.tie(NULL);

	int n;
	cin >> n;

	vector<int> arr(n);

	for (int i = 0;i < n;i++) {
		cin >> arr[i];
	}
	sort(arr.begin(), arr.end());
	cout << avg(arr) << '\n' << mid(arr) << '\n' << mode(arr) << '\n' << range(arr);

	return 0;
}