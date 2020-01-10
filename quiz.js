
let timer = 5;
let gameTimer = 60;
let currentQuestion = 0;
let correctAnswer;
score = 0;



const timerEl = document.createElement('div');


//waits for page to loads then starts a 5 second timer.  Once the timer is over it starts the game.
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



 //starts a 60 second game timer, adds score to page, and if timer is done, calculates final score, saves to local storage, and swaps page to the endscreen.
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

    //filters the questions array to drop any used questions (at this point will be none, but will allow functions to always use filteredQuestions), then gets the next question to start the game.  Also sets the time the question was started to the current gametime
    filteredQuestions = questions.filter(item => Object.values(item)[3]);
    // console.log(filteredQuestions);
    correctAnswer = getNextQuestion(filteredQuestions);
    startOfQuestionTimer = gameTimer;

    
    //buttons are made visible and event listeners are added to each one.  when clicked the will run the function to see if they are the correct answer
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


 //run when a button is click or game starts to generate next question.  questions a pulled randomly from the filtered array, then info pulled from the obj passed in and assigned to the buttons.  array then filtered, and it returns whatever answer is correct
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
    // console.log(filteredQuestions);

     return correctAnswer;
 };

 //function is passed the correct answer and the answer of the button that is clicked.  calculates the time the user took to answer (with a cathch if it is 0 then make it 1 so it wont divide by 0 later).  if the passed answer is the same as the one they clicked, it will give them a score, display correct on the screen, then get the next question and save when (based on gametimer) the question was started.  If there are no more questions, it will instead calculate final score, store that, and direct to endscreen.  Same happens for if they get it wrong, only no score is added and time is subtracted.
 function checkIfCorrect(answer, clicked) {
    // console.log(correctAnswer);
    answeredTimer = gameTimer;
    // console.log(answeredTimer);
    let timeToAnswer = startOfQuestionTimer - answeredTimer;
    // console.log(timeToAnswer);
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
         startOfQuestionTimer = gameTimer;
        //  listeners(correctAnswer);
     }
 };