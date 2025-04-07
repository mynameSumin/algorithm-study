#include <iostream>
using namespace std;

int pw = 0; //조건 만족 시 카운트 증가
int checkarr[4]; //만족해야하는 조건
int arr[4]; //현재 종류 개수

void Add(char c) {
	if (c == 'A') {
		arr[0]++;
		if (checkarr[0] == arr[0]) pw++; // 최소한의 조건 -> 모든 종류별로 만족해야함, 처음 만족했을 때만 ++ (<= 사용 X)
	}
	else if (c == 'C') {
		arr[1]++;
		if (checkarr[1] == arr[1]) pw++;
	}
	else if (c == 'G') {
		arr[2]++;
		if (checkarr[2] == arr[2]) pw++;
	}
	else if (c == 'T') {
		arr[3]++;
		if (checkarr[3] == arr[3]) pw++;
	}
}

void Remove(char c) {
	if (c == 'A') {
		if (checkarr[0] == arr[0]) pw--;
		arr[0]--;
	}
	else if (c == 'C') {
		if (checkarr[1] == arr[1]) pw--;
		arr[1]--;
	}
	else if (c == 'G') {
		if (checkarr[2] == arr[2]) pw--;
		arr[2]--;
	}
	else if (c == 'T') {
		if (checkarr[3] == arr[3]) pw--;
		arr[3]--;
	}
}

int main() {
	int s, p, result = 0;
	string dna;

	cin >> s >> p >> dna;
	for (int i = 0;i < 4;i++) {
		cin >> checkarr[i];
		if (checkarr[i] == 0) pw++;
	}

	for (int i = 0;i < p;i++) {
		Add(dna[i]);
	}
	if (pw == 4) result++;

	for (int i = p;i < s;i++) {
		int j = i - p;
		Add(dna[i]); //한칸 이동하므로 다음 문자 개수 추가
		Remove(dna[j]); //한칸 이동하므로 제일 앞에 문자 개수 제거
		if (pw == 4) result++;
	}
	cout << result;

	return 0;
}