#include <iostream>

using namespace std;

int main(){
    int M, N, B;
    int arr[500][500];
    int block = 0;
    int min_height = 257;
    int min_time = 99999999;
    int max_floor = 0;
    
    cin >> N >> M >> B;
    for(int i = 1; i <= N; i++){
        for(int j = 1; j <= M; j++){
            cin >> arr[i][j];
            block += arr[i][j];
            if(min_height > arr[i][j]){
                min_height = arr[i][j];
            }
        }
    }
    
    int max_height = (block + B) / (N * M);
    for(int i = min_height; i <= max_height; i++){
        int time = 0;
        int floor = 0;
        for(int j = 1; j <= N; j++){
            for(int k = 1; k <= M; k++){
                floor = arr[j][k];
                if(floor > i){ //기준 층수보다 높다면
                    time += 2 * (floor - i);
                } else {
                    time += i - floor;
                }
            }
        }

        if(min_time > time){
            min_time = time;
            max_floor = i;
        } else if(min_time == time && max_floor < i){
            max_floor = i;
        }
    }

    cout << min_time << " " << max_floor;
}