var startBtn = document.querySelector(".start-btn");
var controlsEl = document.querySelector(".controls")
var questionContainerEl = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answerButtonsEl = document.querySelectorAll(".answer-btn");


var questions = [
    {   question: "Commonly used data types do NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },
    {   question: "The condition in an if/else statement is encosed with ____.",
        choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
        answer: "parenthesis",
    },
    {   question: "Arrays in JavaScript can be used to store _____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above",
    },
    {   question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes",
    },
    {   question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
        answer: "console log",
    },
]
var currentQuestion = 0

// start quiz
var startQuiz = function() {
    controlsEl.classList.add("hidden");
    questionContainerEl.classList.remove("hidden");
    generateQuestion();
}

// generate question
var generateQuestion = function() {
    console.log("question working")
    var newQuestion = questions[currentQuestion]
    questionEl.textContent = newQuestion.question;
    for (var i = 0; i < answerButtonsEl.length; i++) {
        console.log("answers")
        answerButtonsEl[i].textContent = newQuestion.choices[i]
        answerButtonsEl[i].addEventListener("click", checkAnswer)
    }
}

// check if chosen answer is the correct answer 
var checkAnswer = function(event) {
    var selectedAnswer = event.target.textContent
    if (event.target.textContent === questions[currentQuestion].answer) {
        console.log("correct!")
    }
}


// end quiz
var endQuiz = function() {}

// show highscores
var highScores = function() {}

// event listeners
startBtn.addEventListener("click", startQuiz);