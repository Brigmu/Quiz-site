
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
            clearInterval(gameTimer);
        }
    }, 1000)
    correctAnswer = getNextQuestion(questions);

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
     let questionObj = arrObj[currentQuestion];
     let question = questionObj['question'];
     let choices = questionObj['choices'];
     let correctAnswer = questionObj['answer'];
     questionObj['used'] = true;
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

     return correctAnswer;
 };

 function checkIfCorrect(answer, clicked) {
    console.log(correctAnswer);
     if (answer === clicked) {
        score += 10;
        if (currentQuestion === questions.length) {
            window.location.href = 'endscreen.html';
            // finalscore = score;
            // console.log(finalScore);
            finalScore = parseInt(score);
            savedFinalScore = window.localStorage.setItem("finalscore", JSON.stringify(finalScore));            
         }
        correctAnswer = getNextQuestion(questions);
        // listeners();
     }
     if (answer !== clicked) {
         gameTimer -= 10;
         if (currentQuestion === questions.length) {
            window.location.href = 'index.html';
            finalscore = parseInt(score);
         }
         correctAnswer = getNextQuestion(questions);
        //  listeners(correctAnswer);
     }
 };

//  function listeners(correctAnswer) {
//     answer1El.addEventListener('click', function (correctAnswer){
//         let userAnswer = answer1El.textContent;
//         checkIfCorrect(correctAnswer, userAnswer);
//     });
//     answer2El.addEventListener('click', function (correctAnswer){
//         let userAnswer = answer2El.textContent;
//         checkIfCorrect(correctAnswer, userAnswer);
//     });
//     answer3El.addEventListener('click', function (correctAnswer){
//         let userAnswer = answer3El.textContent;
//         checkIfCorrect(correctAnswer, userAnswer);
//     });
//     answer4El.addEventListener('click', function (correctAnswer){
//         let userAnswer = answer4El.textContent;
//         checkIfCorrect(correctAnswer, userAnswer);
//     });
//  }