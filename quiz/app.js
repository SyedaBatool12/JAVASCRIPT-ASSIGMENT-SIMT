// Questions array
const questions = [
    { question: "What does HTML stand for?", answers: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "High Text Markup Language"], correct: 0 },
    { question: "What does CSS stand for?", answers: ["Cascading Style Sheets", "Cascading Simple Sheets", "Cascading Script Sheets"], correct: 0 },
    { question: "What is the correct HTML element for inserting a line break?", answers: ["break", "br", "lb"], correct: 1 },
    { question: "Which HTML attribute is used to define inline styles?", answers: ["style", "font", "class"], correct: 0 },
    { question: "Which tag is used to create a hyperlink?", answers: ["link", "a", "href"], correct: 1 },
    { question: "Which of these elements are all <table> elements?", answers: ["tabletrtd", "tableheadbody", "tabletrfooter"], correct: 0 },
    { question: "What does JavaScript do?", answers: ["Style web pages", "Structure web pages", "Make web pages interactive"], correct: 2 },
    { question: "Which of the following is a JavaScript data type?", answers: ["Number", "String", "Both"], correct: 2 },
    { question: "How do you create a function in JavaScript?", answers: ["function myFunction()", "function:myFunction()", "myFunction()"], correct: 0 },
    { question: "What is the correct syntax for referring to an external script called 'script.js'?", answers: ["script src=script.js", "script href=script.js", "script name=script.js"], correct: 0 },
    { question: "How do you add a comment in JavaScript?", answers: ["// This is a comment", "!-- This is a comment --!", "/* This is a comment */"], correct: 0 },
    { question: "Which of these is a JavaScript framework?", answers: ["React", "Vue", "All of the above"], correct: 2 },
    { question: "Which symbol is used for comments in JavaScript?", answers: ["//", "/*", "#"], correct: 0 },
    { question: "What is the output of 2 + '2' in JavaScript?", answers: ["22", "4", "undefined"], correct: 0 },
    { question: "What is the purpose of the 'this' keyword in JavaScript?", answers: ["Refers to the current object", "Refers to the global object", "Both"], correct: 0 },
    { question: "Which method is used to convert a JSON string into a JavaScript object?", answers: ["JSON.parse()", "JSON.stringify()", "JSON.convert()"], correct: 0 },
];

// Variables
let currentQuestionIndex = 0;
let score = 0;
let timer;
const totalQuestions = questions.length;

// Start Quiz
document.getElementById('startQuiz').addEventListener('click', startQuiz);

function startQuiz() {
    document.getElementById('welcome').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    displayQuestion();
    startTimer();
}

// Timer
function startTimer() {
    let timeLeft = 30;
    document.getElementById('time').innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showResult();
        }
    }, 1000);
}

// Display Question
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `<h2>${question.question}</h2>`;

    question.answers.forEach((answer, index) => {
        questionContainer.innerHTML += `
            <input type="radio" name="answer" id="answer${index}" value="${index}">
            <label for="answer${index}">${answer}</label><br>
        `;
    });

    document.getElementById('prev').style.display = currentQuestionIndex === 0 ? 'none' : 'inline';
    document.getElementById('next').innerText = currentQuestionIndex === totalQuestions - 1 ? 'Finish' : 'Next';
}

// Next Question
function nextQuestion() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer) {
        if (parseInt(selectedAnswer.value) === questions[currentQuestionIndex].correct) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < totalQuestions) {
            displayQuestion();
        } else {
            clearInterval(timer);
            showResult();
        }
    } else {
        alert("Please select an answer before proceeding.");
    }
}

// Previous Question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Show Result
function showResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').innerText = `You scored ${score} out of ${totalQuestions}.`;
}

// Restart Quiz
function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById('result').style.display = 'none';
    document.getElementById('welcome').style.display = 'block';
    clearInterval(timer);
}
