const startButton = document.getElementById('start-btn');
const restartButton = document.getElementById('restart-btn')
const nextButton = document.getElementById('next-btn');
const resultsButton = document.getElementById('results-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

// results div
const playerResults = document.getElementById('results');
const playerScore = document.getElementById('numOfCorrect');
const numOfQuestions = document.getElementById('numOfQuestions');

let shuffledQuestions, currentQuestionIndex;
let score = 0;

//starts the game 
startButton.addEventListener('click', startGame);

//moves to next question
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion();
});

//shows you your results
resultsButton.addEventListener('click', function showResults(){
    numOfQuestions.innerHTML = questions.length;
    playerScore.innerHTML = score;
    playerResults.classList.remove('hide');
    resultsButton.classList.add('hide');
    restartButton.classList.remove('hide')
    questionContainerElement.classList.add('hide');
});

//restart game
restartButton.addEventListener('click', function restartGame() {
    restartButton.classList.add('hide');
    playerResults.classList.add('hide');
    clearInterval(time = 300);
    score = 0;
    startGame();
});

//timer functions

setInterval(startTimer, 1000)
const startingMinutes = 5;
let time = startingMinutes * 60

function startTimer() {
    let minutes = Math.floor(time/60);
    let seconds = time % 60;
    
    seconds = seconds < 10 ? '0' + seconds : seconds;
    timer.innerHTML =  `${minutes}:${seconds}`;
    
    time--;

    if(time <= 0) {
        clearInterval(time = 0)
        numOfQuestions.innerHTML = questions.length;
        playerScore.innerHTML = score;
        playerResults.classList.remove('hide');
        restartButton.classList.remove('hide');
        questionContainerElement.classList.add('hide');
    }
}

//start quiz function
function startGame(){
    console.log('started');
    startTimer();
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

//moving to next question
function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetState(){
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

//choosing answer functions
function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score ++
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
    } else {
        resultsButton.classList.remove('hide');
    }
}

//list of questions
const questions = [
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