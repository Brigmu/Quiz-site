const answer1El = document.querySelector('#answer1');
const answer2El = document.querySelector('#answer2');
const answer3El = document.querySelector('#answer3');
const answer4El = document.querySelector('#answer4');
const questionDivEl = document.querySelector('.question');
const gameTimerEl = document.querySelector('#timer');

let questions = [
    {
        question: 'What must you have at the end of lines in js?',
        choices: ['Colon  : ' , 'Exclamation Point  ! ', 'Semi-colon  ;  ', 'Period  .  '],
        answer: 'Semi-colon  ;  '
    }
    ,
    {
        question: 'Which of the following is NOT a valid variable?',
        choices: ['  let  ', '  const  ', '  name  ', '  var  '],
        answer: '  var  '
    }
]