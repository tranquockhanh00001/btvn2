'use strict';

let periodFocus = 30;
updatePeriodFocus(periodFocus);
const minusTimeBtn = document.querySelector('.period-change .minus');
const plusTimeBtn = document.querySelector('.period-change .plus');

minusTimeBtn.addEventListener('click', () => {
    if (periodFocus === 5) return;
    periodFocus -= 5;
    console.log(periodFocus);
    updatePeriodFocus(periodFocus);
});

plusTimeBtn.addEventListener('click', () => {
    periodFocus += 5;
    updatePeriodFocus(periodFocus);
});

function updatePeriodFocus() {
    document.querySelector('.period').textContent = periodFocus;
}

let interval;
function startFocus(duration) {
    let minutes = duration;
    let second = 0;

    let interval = setInterval(() => {
        if (second === 0) {
            if (minutes === 0) {
                clearInterval(interval);
                return;
            }
            minutes--;
            second = 60;
        }
        second--;
        document.querySelector('.counter').textContent = `${minutes}:${second < 10 ? '0' + second : second}`;
    }, 1000);
    if(minutes == 0 && second == 0){
        alert('time-out');
    }
}

document.querySelector('.btn--focus-trigger').addEventListener('click', () => {
    startFocus(periodFocus);
});