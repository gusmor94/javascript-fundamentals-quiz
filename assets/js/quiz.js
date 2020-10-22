var quizQuestionEl = document.querySelector(".quiz-question");
var option1El = document.querySelector("#option1");
var option2El = document.querySelector("#option2");
var option3El = document.querySelector("#option3");
var option4El = document.querySelector("#option4");
var quizContainerEl = document.querySelector("#quiz-container");
var score = 0;

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
var startQuiz = function() {}

// generate question
var generateQuestion = function() {}

// check if correct answer 
var selectedAnswer = function() {}

// end quiz
var endQuiz = function() {}

// show highscores
var highScores = function() {}