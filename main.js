const answer1El = document.querySelector('#answer1');
const answer2El = document.querySelector('#answer2');
const answer3El = document.querySelector('#answer3');
const answer4El = document.querySelector('#answer4');
const questionDivEl = document.querySelector('.question');
const gameTimerEl = document.querySelector('#timer');
const questionEl = document.querySelector('#question');
const scoreEl = document.querySelector('#score');



let questions = [
    {
        question: 'What must you have at the end of lines in js?',
        choices: ['Colon  : ' , 'Exclamation Point  ! ', 'Semi-colon  ;  ', 'Period  .  '],
        answer: 'Semi-colon  ;  ',
        used: false
    }
    ,
    {
        question: 'Which of the following is NOT a valid variable?',
        choices: ['  let  ', '  const  ', '  name  ', '  var  '],
        answer: '  name  ',
        used: false
    }
    ,
    {
        question: 'Which data type is used if something is true or false?',
        choices: ['  string  ', '  boolean  ', '  function  ', '  number  '],
        answer: '  boolean  ',
        used: false
    }
    ,
    {
        question: 'Which of the following is a conditional?',
        choices: ['  function  ', '  variable  ', '  for  ',  '  if  '],
        answer: '  if  ',
        used: false
    }
    ,
    {
        question: 'How do you add an element to your page with javascript?',
        choices: ['  append()  ',  '  addelement()  ', '  create()  ',  '  depend()  '],
        answer: '  append()  ',
        used: false
    }
    ,
    {
        question: 'What a function does is enclosed in: ',
        choices: ['Parenthesis  ()  ', 'Curly braces  {}  ',  'Square brackets  []  ', 'Backslashes  //  '],
        answer: 'Curly braces  {}  ',
        used: false
    }
    ,
    {
        question: 'To use a function youve created you must: ',
        choices: ['  Copy it  ',  '  Hope and pray  ',  '  Add it  ',  '  Call it  '],
        answer: '  Call it  ',
        used: false
    }
]