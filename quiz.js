
let timer = 5;
let gameTimer = 60;
let currentQuestion = 0;
let correctAnswer;
score = 0;



const timerEl = document.createElement('div');

window.onload = function() {
    let countdown = window.setInterval(function() {

        timerEl.textContent = timer;
        timerEl.style.textAlign = 'center'
        timerEl.style.fontSize = '18px';
        timerEl.style.fontWeight = 'bold'
        questionDivEl.appendChild(timerEl);
        timer --;
        // if (timer === 0) {
        //     startGame();
        // }
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
        scoreEl.textContent = score;
        if (gameTimer <= -1) {
            clearInterval(gameTime);
            finalScore = parseInt(score);
            savedFinalScore = window.localStorage.setItem("finalscore", JSON.stringify(finalScore)); 
            window.location.href = 'endscreen.html';
        }
    }, 1000)
    filteredQuestions = questions.filter(item => Object.values(item)[3]);
    console.log(filteredQuestions);
    correctAnswer = getNextQuestion(filteredQuestions);

    btnsEl.style.visibility = 'visible';

    answer1El.addEventListener('click', function (){
        let userAnswer = answer1El.textContent;
        checkIfCorrect(correctAnswer, userAnswer);
    });
    answer2El.addEventListener('click', function (){
        let userAnswer = answer2El.textContent;
        checkIfCorrect(correctAnswer, userAnswer);
    });
    answer3El.addEventListener('click', function (){
        let userAnswer = answer3El.textContent;
        checkIfCorrect(correctAnswer, userAnswer);
    });
    answer4El.addEventListener('click', function (){
        let userAnswer = answer4El.textContent;
        checkIfCorrect(correctAnswer, userAnswer);
    });
 };

 function getNextQuestion(arrObj) {
     let randomQuestion = Math.floor((Math.random() * filteredQuestions.length));
     let questionObj = arrObj[randomQuestion];
     let question = questionObj['question'];
     let choices = questionObj['choices'];
     let correctAnswer = questionObj['answer'];
     questionObj['unused'] = false;
     let answer1 = choices[0];
     let answer2 = choices[1];
     let answer3 = choices[2];
     let answer4 = choices[3];
     questionEl.textContent = question;
     answer1El.textContent = answer1;
     answer2El.textContent = answer2;
     answer3El.textContent = answer3;
     answer4El.textContent = answer4;
     currentQuestion ++;    
     filteredQuestions = questions.filter(item => Object.values(item)[3]);
    console.log(filteredQuestions);

     return correctAnswer;
 };

 function checkIfCorrect(answer, clicked) {
    console.log(correctAnswer);
    answeredTimer = gameTimer;
    console.log(answeredTimer);
    let timeToAnswer = startOfQuestionTimer - answeredTimer;
    console.log(timeToAnswer);
    if (timeToAnswer === 0) {
        timeToAnswer = 1;
    };
     if (answer === clicked) {
        score += (5 + Math.ceil((30/timeToAnswer)));
        feedbackEl.textContent = 'Correct!';
        if (currentQuestion === questions.length) {
            window.location.href = 'endscreen.html';
            // finalscore = score;
            // console.log(finalScore);
            finalScore = parseInt(score);
            savedFinalScore = window.localStorage.setItem("finalscore", JSON.stringify(finalScore));            
         }
        correctAnswer = getNextQuestion(filteredQuestions);
        startOfQuestionTimer = gameTimer;
        // listeners();
     }
     if (answer !== clicked) {
         gameTimer -= 10;
         feedbackEl.textContent = 'Incorrect!';
         if (currentQuestion === questions.length) {
            window.location.href = 'index.html';
            finalscore = parseInt(score);
            savedFinalScore = window.localStorage.setItem("finalscore", JSON.stringify(finalScore));  
         }
         correctAnswer = getNextQuestion(filteredQuestions);
        //  listeners(correctAnswer);
     }
 };

function filterArray(arr) {
    arr.unused
}