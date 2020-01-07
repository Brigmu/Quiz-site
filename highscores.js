
if (highscores.length >= 1) {
    hs1El.textContent = (highscores[0].name + ': ' + highscores[0].score);
}
if (highscores.length >= 2) {
    hs2El.textContent = (highscores[1].name + ': ' + highscores[1].score);
}
if (highscores.length >= 3) {
    hs3El.textContent = (highscores[2].name + ': ' + highscores[2].score);
}
if (highscores.length >= 4) {
    hs4El.textContent = (highscores[3].name + ': ' + highscores[3].score);
}
if (highscores.length >= 5) {
    hs5El.textContent = (highscores[4].name + ': ' + highscores[4].score);
}
if (highscores.length >= 6) {
    hs6El.textContent = (highscores[5].name + ': ' + highscores[5].score);
}
if (highscores.length >= 7) {
    hs7El.textContent = (highscores[6].name + ': ' + highscores[6].score);
}
if (highscores.length >= 8) {
    hs8El.textContent = (highscores[7].name + ': ' + highscores[7].score);
}
if (highscore.length >= 9) {
    hs9El.textContent = (highscores[8].name + ': ' + highscores[8].score);
}
if (highscore.length >= 10) {
    hs10El.textContent = (highscores[9].name + ': ' + highscores[9].score);
}



// let hsobj2 = JSON.parse(window.localStorage.getItem("score2"));
// hs1El.textContent = (hsobj2.name + ': ' + hsobj2.score);

// let hsobj3 = JSON.parse(window.localStorage.getItem("score3"));
// hs1El.textContent = (hsobj3.name + ': ' + hsobj3.score);

// let hsobj4 = JSON.parse(window.localStorage.getItem("score4"));
// hs1El.textContent = (hsobj4.name + ': ' + hsobj4.score);

// let hsobj5 = JSON.parse(window.localStorage.getItem("score5"));
// hs1El.textContent = (hsobj5.name + ': ' + hsobj5.score);

// let hsobj6 = JSON.parse(window.localStorage.getItem("score6"));
// hs1El.textContent = (hsobj6.name + ': ' + hsobj6.score);

// let hsobj7 = JSON.parse(window.localStorage.getItem("score7"));
// hs1El.textContent = (hsobj7.name + ': ' + hsobj7.score);

// let hsobj8 = JSON.parse(window.localStorage.getItem("score8"));
// hs1El.textContent = (hsobj8.name + ': ' + hsobj8.score);

// let hsobj9 = JSON.parse(window.localStorage.getItem("score9"));
// hs1El.textContent = (hsobj9.name + ': ' + hsobj9.score);

// let hsobj10 = JSON.parse(window.localStorage.getItem("score10"));
// hs1El.textContent = (hsobj10.name + ': ' + hsobj10.score);

returnButtonEl.addEventListener('click', function(){
    window.location.href = 'index.html';
});