//High scores are displayed on if the highscores array is at least as big as that score.


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
if (highscores.length >= 9) {
    hs9El.textContent = (highscores[8].name + ': ' + highscores[8].score);
}
if (highscores.length >= 10) {
    hs10El.textContent = (highscores[9].name + ': ' + highscores[9].score);
}


returnButtonEl.addEventListener('click', function(){
    window.location.href = 'index.html';
});