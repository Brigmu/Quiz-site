const startButtonEl = document.querySelector('#start');
// let timer = 5;

highScoreIndexEl.textContent = highestScore;

startButtonEl.addEventListener('click', () => {
    window.location.href = 'quiz.html';
});

highScoresEl.addEventListener('click', function() {
    window.location.href = 'highscores.html';
});