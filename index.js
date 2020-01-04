const startButtonEl = document.querySelector('#start');
let timer = 5;

startButtonEl.addEventListener('click', () => {
    window.location.href = 'quiz.html';
    window.onload = function() {
       window.setInterval(countdown(),1000);
    }
});

function countdown () {
    answer1El.textContent = timer;
    timer --;    
}