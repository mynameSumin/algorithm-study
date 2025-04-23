function solution(genres, plays) {
    var answer = [];
    const playNumOfGenres = {}; //형식 : {"classic": 150}
    const song = {};
    
    for(const [i, genre] of genres.entries()) {
        if(playNumOfGenres[genre]){
            playNumOfGenres[genre] += plays[i];
            song[genre].push([i, plays[i]]);
        } else {
            playNumOfGenres[genre] = plays[i];
            song[genre] = [[i, plays[i]]];
        }
    }
    
    const sorted = Object.entries(playNumOfGenres).sort((a,b) => b[1] - a[1]);
    
    for(let i = 0; i < sorted.length; i++){
        const genre = sorted[i][0];
        const songs = song[genre];
        songs.sort((a,b) => {
            if(b[1] !== a[1]){ 
                return b[1] - a[1];
            } else { //재생횟수가 같다면 고유번호 오름차순
                return a[0] - b[0];
            }
        });
        console.log(songs);
        if(songs[0]) answer.push(songs[0][0]);
        if(songs[1]) answer.push(songs[1][0]);
    }
    
    return answer;
}