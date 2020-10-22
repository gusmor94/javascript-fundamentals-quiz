var startBtn = document.querySelector(".start-btn");
var questionContainerEl = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answerButtonsEl = document.querySelector("#answers");
var answerA = document.querySelector("#a");
var answerB = document.querySelector("#b");
var answerC = document.querySelector("#c");
var answerD = document.querySelector("#d");

var questions = [
    {   question: "Commonly used data types do NOT include:",
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers",
        answer: 3,
    },
    {   question: "The condition in an if/else statement is encosed with ____.",
        a: "quotes",
        b: "curly brackets",
        c: "parenthesis",
        d: "square brackets",
        answer: 3,
    },
    {   question: "Arrays in JavaScript can be used to store _____.",
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above",
        answer: 4,
    },
    {   question: "String values must be enclosed within _____ when being assigned to variables.",
        a: "commas",
        b: "curly brackets",
        c: "quotes",
        d: "parenthesis",
        answer: 3,
    },
    {   question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "JavaScript",
        b: "terminal/bash",
        c: "for loops",
        d: "console log",
        answer: 4,
    },
]

// start quiz
var startQuiz = function() {
    startBtn.classList.add("hidden");
    questionContainerEl.classList.remove("hidden");
    generateQuestion();
}

// generate question
var generateQuestion = function() {
    for (var i = 0; i < questions.length; i++) {
        questionEl.textContent = questions[i].question;
        answerA.textContent = questions[i].a;
        answerB.textContent = questions[i].b;
        answerC.textContent = questions[i].c;
        answerD.textContent = questions[i].d;
    }
}

// check if correct answer 
var selectedAnswer = function(event) {}


// end quiz
var endQuiz = function() {}

// show highscores
var highScores = function() {}

// event listeners
startBtn.addEventListener("click", startQuiz);