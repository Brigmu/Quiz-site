const answer1El = document.querySelector('#answer1');
const answer2El = document.querySelector('#answer2');
const answer3El = document.querySelector('#answer3');
const answer4El = document.querySelector('#answer4');
const questionDivEl = document.querySelector('.question');
const gameTimerEl = document.querySelector('#timer');
const questionEl = document.querySelector('#question');
const scoreEl = document.querySelector('#score');
const btnsEl = document.querySelector('.btns');
const highScoreIndexEl = document.querySelector('#high-score-index');
const highScoreEndscreenEl = document.querySelector('#high-score-endscreen');
const saveNameEl = document.querySelector('#save-name');
const submitBtnEl = document.querySelector('#submit-btn');
const hs1El = document.querySelector('#hs1');
const hs2El = document.querySelector('#hs2');
const hs3El = document.querySelector('#hs3');
const hs4El = document.querySelector('#hs4');
const hs5El = document.querySelector('#hs5');
const hs6El = document.querySelector('#hs6');
const hs7El = document.querySelector('#hs7');
const hs8El = document.querySelector('#hs8');
const hs9El = document.querySelector('#hs9');
const hs10El = document.querySelector('#hs10');
const returnButtonEl = document.querySelector('#return-btn');
const finalScoreEl = document.querySelector('#final-score');
const highScoresEl = document.querySelector('#high-scores');
const feedbackEl = document.querySelector('#click-feedback');

let finalscore;
let score = 0;
let highscore = {};
let highscores = JSON.parse(window.localStorage.getItem('highscores'));
if (highscores == null) {
    highscores = [];
}
let highestScore = 0;
if (highscores.length >= 1) {
    highestScore = highscores[0].score;
}
let storedHighScores;
let answeredTimer = 60;
let startOfQuestionTimer = 60;
let filteredQuestions = [];


// window.localStorage.setItem('score1', JSON.stringify(store1));

// stored1 = window.localStorage.getItem(JSON.parse(store1));


let questions = [
    {
        question: 'What must you have at the end of lines in js?',
        choices: ['Colon  : ' , 'Exclamation Point  ! ', 'Semi-colon  ;  ', 'Period  .  '],
        answer: 'Semi-colon  ;  ',
        unused: true
    }
    ,
    {
        question: 'Which of the following is NOT a valid variable?',
        choices: ['  let  ', '  const  ', '  name  ', '  var  '],
        answer: '  name  ',
        unused: true
    }
    ,
    {
        question: 'Which data type is used if something is true or false?',
        choices: ['  string  ', '  boolean  ', '  function  ', '  number  '],
        answer: '  boolean  ',
        unused: true
    }
    ,
    {
        question: 'Which of the following is a conditional?',
        choices: ['  function  ', '  variable  ', '  for  ',  '  if  '],
        answer: '  if  ',
        unused: true
    }
    ,
    {
        question: 'How do you add an element to your page with javascript?',
        choices: ['  append()  ',  '  addelement()  ', '  create()  ',  '  depend()  '],
        answer: '  append()  ',
        unused: true
    }
    ,
    {
        question: 'What a function does is enclosed in: ',
        choices: ['Parenthesis  ()  ', 'Curly braces  {}  ',  'Square brackets  []  ', 'Backslashes  //  '],
        answer: 'Curly braces  {}  ',
        unused: true
    }
    ,
    {
        question: 'To use a function youve created you must: ',
        choices: ['  Copy it  ',  '  Hope and pray  ',  '  Add it  ',  '  Call it  '],
        answer: '  Call it  ',
        unused: true
    }
]