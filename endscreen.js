// highScoreEndscreenEl.textContent = highscore;
let newHSName;

// console.log(score);
// console.log(finalscore);

//gets the final score from the quiz page
finalscore = JSON.parse(window.localStorage.getItem("finalscore"));


//submit button that takes user input (initials).  adds those initals and the final score to a new object. pushes that object onto the highscores array and saves it to local storage. sorts the array of objects so they are in order of score. redirects to high scores page.
submitBtnEl.addEventListener('click', function(){
    newHSName = saveNameEl.value;
    if (newHSName === '') {
        // alert('enter a valid name( 1-3 characters');
    }
    else {
        event.preventDefault();
        newHSName = saveNameEl.value;
        highscore['name'] = newHSName;
        highscore['score'] = finalscore;
        highscores.push(highscore);
        highscores.sort(compareScore);
        // console.log(highscores);
        //makes sure only keeps top 10 scores.
        if (highscores.length > 10) {
            highscores.splice(10, (highscores.length - 9));
        }
        // store1 = highscore;
        // store1 = storeScore(highscore);
        // console.log(stored1);
        storedHighScores = window.localStorage.setItem('highscores', JSON.stringify(highscores))
        // store1 = window.localStorage.setItem("score1", JSON.stringify(highscore));
        window.location.href = 'highscores.html';
    }
});

highScoreEndscreenEl.textContent = highestScore

finalScoreEl.textContent = finalscore;

window.localStorage.removeItem('finalscore');

//sort function for sorting scores of the objects in the highscores array.
function compareScore(a, b) {
    const scoreA = a.score;
    const scoreB = b.score;
    // console.log('scoreA = ' + scoreA);
    // console.log('scoreb = ' + scoreB);

    // console.log('I got here');
    let comparison = 0;
    if (scoreA > scoreB){
        comparison = -1;
    }
    else if (scoreA < scoreB) {
        comparison = 1;
    }
    else {
        comparison = 0;
    }
    return comparison;
};