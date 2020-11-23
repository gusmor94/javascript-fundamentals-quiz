var startBtn = document.querySelector(".start-btn");
var controlsEl = document.querySelector(".controls")
var timerEl = document.querySelector("#timer")
var questionContainerEl = document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var answerButtonsEl = document.querySelectorAll(".answer-btn");
var quizOverEl = document.querySelector("#quiz-over")
var finalScore = document.querySelector("#final-score")
var initialsInput = document.querySelector("#initials")
var submitButton = document.querySelector("#submit-btn")


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
var score = 0
var timer = 60

// start quiz
var startQuiz = function() {
    controlsEl.classList.add("hidden");
    questionContainerEl.classList.remove("hidden");
    var timerInterval = setInterval(function() {
        timerEl.textContent = "Time: " + timer
        timer--
        if (timer < 0 || timer === 0) {
            clearInterval(timerInterval)
            endQuiz()
        }
    }, 1000)
    generateQuestion();
}

// display quiz questions
var generateQuestion = function() {
    if (currentQuestion < questions.length) {
        var newQuestion = questions[currentQuestion]
        questionEl.textContent = newQuestion.question;
        // loop through answer buttons and dynamically add choices from questions array
        for (var i = 0; i < answerButtonsEl.length; i++) {
            answerButtonsEl[i].textContent = newQuestion.choices[i]
            answerButtonsEl[i].addEventListener("click", checkAnswer)
        }
    } else {
        // if currentQuestion is greater than questions array, end quiz
        endQuiz()
    }
}

// check if chosen answer is the correct answer 
var checkAnswer = function(event) {
    if (event.target.textContent === questions[currentQuestion].answer) {
        score++ 
        currentQuestion++
        generateQuestion(currentQuestion)
    } else {
        currentQuestion++
        timer = timer - 10
        generateQuestion(currentQuestion)
    }
}


// end quiz
var endQuiz = function() {
    // add hidden class to question container and display the quiz-over div
    questionContainerEl.classList.add("hidden")
    quizOverEl.classList.remove("hidden")
    finalScore.textContent = "Your final score is " + score 
    submitButton.addEventListener("click", highScores)
}

// show highscores
var highScores = function() {
    // make sure user doesn't type too many letters
    if (initialsInput.value.length > 2) {
        alert("Please only type two initials.")
    }
    // check to see if localStorage is empty
    var previousScores = localStorage.getItem("High Scores")
    if (previousScores) {
        previousScores = JSON.parse(previousScores)
    } else {
        previousScores = []
    }
    // save score to local storage
    previousScores.push({Initials: initialsInput.value, Score: score})
    localStorage.setItem("High Scores", JSON.stringify(previousScores))
    alert("Your score was saved!")
    initialsInput.value = ""
}


startBtn.addEventListener("click", startQuiz);