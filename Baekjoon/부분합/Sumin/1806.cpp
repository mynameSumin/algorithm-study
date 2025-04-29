#include <iostream>
using namespace std;

int main() {
    int N, S;
    cin >> N >> S;

    int arr[100000];
    for (int i = 0; i < N; ++i) cin >> arr[i];

    int minLen = N + 1, sum = 0;
    int left = 0;
    for (int right = 0; right < N; right++) {
        sum += arr[right];
        while (sum >= S) {
            minLen = min(minLen, right - left + 1);
            sum -= arr[left++];
        }
    }

    cout << (minLen == N + 1 ? 0 : minLen);
}
