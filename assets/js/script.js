var quizContentEl = document.querySelector("#quiz-content");
var quizQuestionsEl = document.querySelector(".quiz-question");
var answerTextEl = Array.from(document.querySelector(".answer-text"));

var score = 0; 
var maxScore = 5;
var currentQuestion = {}
var correctAnswers = true;
var availableQuestions = [];


var questions = [
    {   question: "Commonly used data types do NOT include:",
        a1: "strings",
        a2: "booleans",
        a3: "alerts",
        a4: "numbers",
        answer: 3,
    },
    {   question: "The condition in an if/else statement is encosed with ____.",
        a1: "quotes",
        a2: "curly brackets",
        a3: "parenthesis",
        a4: "square brackets",
        answer: 3,
    },
    {   question: "Arrays in JavaScript can be used to store _____.",
        a1: "numbers and strings",
        a2: "other arrays",
        a3: "booleans",
        a4: "all of the above",
        answer: 4,
    },
    {   question: "String values must be enclosed within _____ when being assigned to variables.",
        a1: "commas",
        a2: "curly brackets",
        a3: "quotes",
        a4: "parenthesis",
        answer: 3,
    },
    {   question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a1: "JavaScript",
        a2: "terminal/bash",
        a3: "for loops",
        a4: "console log",
        answer: 4,
    },
]

var startQuiz = function() {
    availableQuestions = [...questions];
    getNewQuestion();
}

var getNewQuestion = function() {
    if (availableQuestions.length ===0) {
        localStorage.setItem("Score", score);
        location.assign("./score.html");
    }
    var questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
}
