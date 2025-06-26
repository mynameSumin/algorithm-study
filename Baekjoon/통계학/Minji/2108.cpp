#include <iostream>
#include <algorithm>
#include <vector>
#include <cmath>
#include <unordered_map> //정렬안되는데 이게 더 빨라서
using namespace std;

double avg(vector<int> v) { //벡터 값 변동 없으므로 굳이 참조안함
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

// 여러 개 있을 때는 두번째로 작은 값 출력
int mode(vector<int> v) {
	unordered_map<int, int> count;
	// 1 1 2 2 3 4
	for (int i = 0;i < v.size();i++) {
		int num = v[i];
		count[num]++; // 1:2, 2:2, 3:1, 4:1 이런식으로 저장됨
	}

	vector<pair<int, int>> cnt(count.begin(), count.end()); //해시맵은 정렬안되므로 벡터에 옮기기
	//내림차순 정렬. pair<int, int> 쓰기 귀찮아서 auto 사용
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