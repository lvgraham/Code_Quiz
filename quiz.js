// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


// questions for quiz
const quizQuestions = [
    {
        question: 'Which is NOT a JavaScript data type?',
        answers: [
            {text: 'article', correct: true},
            {text: 'string', correct: false},
            {text: 'object', correct: false},
            {text: 'boolean', correct: false},
        ]
    },
    {
        question: 'What types of pop-up boxes are available in JavaScript?',
        answers: [
            {text: 'alert, confirm, and prompt', correct: true},
            {text: 'banner, confirm, and prompt', correct: false},
            {text: 'alert, notificaton, and prompt', correct: false},
            {text: 'alert, confirm, and variable', correct: false},
        ]
    },
    {
        question: 'How can you move an element in lowercase to uppercase from an array?',
        answers: [
            {text: 'toCapital', correct: false},
            {text: 'toBigLetters', correct: false},
            {text: 'toUpperCase', correct: true},
            {text: 'upperCase', correct: false},
        ]
    },
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        answers: [
            {text: '<javascript>', correct: false},
            {text: '<js>', correct: false},
            {text: '<src>', correct: false},
            {text: '<script>', correct: true},
        ]
    },
    {
        question: 'How would you create an alert that says "Hello World!"?',
        answers: [
            {text: 'msg("hello world!")', correct: false},
            {text: 'alert("hello world!")', correct: true},
            {text: 'prompt("hello world!")', correct: false},
            {text: 'alertText("hello world!")', correct: false},
        ]
    },
    {
        question: 'How do you call a function?',
        answers: [
            {text: 'use: functionName()', correct: false},
            {text: 'functionName()', correct: true},
            {text: 'function functionName()', correct: false},
            {text: 'call functionName()', correct: false},
        ]
    },
    {
        question: 'How does a for loop start?',
        answers: [
            {text: 'for(i=0; i < 10; i++)', correct: true},
            {text: 'for(x=0; x==1; x++)', correct: false},
            {text: 'for i=0, i++', correct: false},
            {text: 'for(i=0, i<=5)', correct: false},
        ]
    },
    {
        question: 'How do you create an array?',
        answers: [
            {text: 'var arr = ["1", "2", "3"]', correct: true},
            {text: 'var arr = [1, 2, 3]', correct: false},
            {text: 'var arr[1; 2; 3]', correct: false},
            {text: 'var arr = ("1", "2", "3")', correct: false},
        ]
    },
    {
        question: 'What method would you use to find a random number between 0 and 1?',
        answers: [
            {text: 'randomNumber()', correct: false},
            {text: 'math.Rand()', correct: false},
            {text: 'Math.random()', correct: true},
            {text: 'Math.floor()', correct: false},
        ]
    },
    {
        question: 'Where can you place the JavaScript in the HTML file?',
        answers: [
            {text: 'the <head> section', correct: false},
            {text: 'either the <head> and the <body> section', correct: true},
            {text: 'the <body> section', correct: false},
            {text: 'the <footer> section', correct: false},
        ]
    }
]

//start button
var startBtn = document.getElementById('start-btn');
//next button
var nextBtn = document.getElementById('next-btn');
//question container
var questionContainer = document.getElementById('question-container');
//questions element
var questionEl = document.getElementById('question');
//answer buttons
var answerBtnEl = document.getElementById('answer-buttons');



//timer functions
document.getElementById('timer').innerHTML =
  005 + ":" + 00;

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}


//start the quiz
function startQuiz() {
    startTimer();
    startBtn.classList.add('hide');
    questionContainer.classList.remove('hide');
    nextQuestion();
} 

//go to next question
function nextQuestion(){
    
}

//show question
function showQuestion(quizQuestions){
    questionEl.innerText = quizQuestions.question;
}



//onclick events
startBtn.addEventListener("click", function(){
    startQuiz();
});

nextBtn.addEventListener("click", function(){
    nextQuestion();
});