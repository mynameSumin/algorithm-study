function solution(h1, m1, s1, h2, m2, s2) {
    const startTime = timeToSec(h1, m1, s1);
    const endTime = timeToSec(h2, m2, s2);

    return countAlarms(endTime) - countAlarms(startTime) + (hasAlarm(startTime) ? 1 : 0);
}

// 0초부터 특정 초(t)까지 울린 총 알람 횟수 계산
function countAlarms(t) {
    if (t < 0) return 0;
    
    // 0초에 울리는 알람 (0시 0분 0초에는 시, 분, 초가 모두 겹치므로 1번 울림)
    if (t === 0) return 1;

    let count = 1; // 0초 알람 포함

    // 1초부터 t초까지 순회하며 초침이 시침/분침과 겹치는 횟수 누적
    for (let sec = 1; sec <= t; sec++) {
        const prevS = 6 * (sec - 1);
        const prevM = 0.1 * (sec - 1);
        const prevH = (1 / 120) * (sec - 1);

        const currS = 6 * sec;
        const currM = 0.1 * sec;
        const currH = (1 / 120) * sec;

        // 초침이 시침을 추월하는지 확인 (360도 회전 고려)
        // 이전 차이와 현재 차이를 360으로 나눈 몫(바퀴 수)이 달라졌거나, 딱 맞아떨어질 때
        const hOverlap = checkMeet(prevS, prevH, currS, currH);
        const mOverlap = checkMeet(prevS, prevM, currS, currM);

        if (hOverlap) count++;
        if (mOverlap) count++;

        // 12시 0분 0초 (43200초) 또는 0시 0분 0초 (0초) 등에서
        // 시침과 분침이 동시에 초침과 겹치는 경우, 알람은 1번만 울려야 하므로 중복 카운트(-1) 처리
        if (sec === 12 * 3600 || sec === 24 * 3600) {
            // 정확히 세 바늘이 다 겹치는 순간 정각 처리
            // 위 조건에서 hOverlap과 mOverlap이 둘 다 true이므로 2개가 더해졌음 -> 1개 감소 필요
            // 단, 0초는 이미 초기값에 포함되었으므로 12시 정각(43200초)만 중복 제거
            if (sec === 12 * 3600) {
                count--;
            }
        }
    }

    return count;
}

// 특정 초에 시침이나 분침과 초침이 겹쳐서 알람이 울리는지 확인
function hasAlarm(sec) {
    if (sec === 0) return true; // 0초는 무조건 울림
    const s = 6 * sec;
    const m = 0.1 * sec;
    const h = (1 / 120) * sec;

    // 초침과 분침이 겹치거나, 초침과 시침이 겹치는 경우
    // 소수점 오차 방지를 위해 미세한 값 차이 허용 또는 정확한 각도 일치 확인
    return s % 360 === m % 360 || s % 360 === h % 360;
}

function checkMeet(prevS, prevTarget, currS, currTarget) {
    const diffPrev = prevS - prevTarget;
    const diffCurr = currS - currTarget;

    const kPrev = Math.floor(diffPrev / 360);
    const kCurr = Math.floor(diffCurr / 360);

    // 구간 내에서 역전이 일어났거나 현재 시점에 정확히 일치하는 경우
    if (kCurr > kPrev || (currS % 360) === (currTarget % 360)) {
        return true;
    }
    return false;
}

function timeToSec(h, m, s) {
    return h * 3600 + m * 60 + s;
}