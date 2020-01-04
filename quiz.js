
let timer = 5;
let gameTimer = 60;

const timerEl = document.createElement('div');

window.onload = function() {
    let countdown = window.setInterval(function() {

        timerEl.textContent = timer;
        timerEl.style.textAlign = 'center'
        timerEl.style.fontSize = '18px';
        timerEl.style.fontWeight = 'bold'
        questionDivEl.appendChild(timerEl);
        timer --;
        if (timer === -1) {
            clearInterval(countdown);
            questionDivEl.removeChild(timerEl);
            startGame();
        }
    }, 1000);
 };


 function startGame() {
    let gameTime = window.setInterval(function() {
        gameTimerEl.textContent = gameTimer;
        gameTimer --;
    }, 1000)
 }
