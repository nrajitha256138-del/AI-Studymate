let quizData = [];
let currentQuestion = 0;
let score = 0;

function generateStudyPack() {

    const topic = document.getElementById("topic").value.trim();

    if (topic === "") {
        alert("Please enter a topic first!");
        return;
    }

    // Explanation
    document.getElementById("explanation").innerHTML =
        "<b>" + topic + "</b> is an important topic for students. " +
        "Learn its basic concepts, key points, applications and examples " +
        "to understand the topic clearly.";

    // Important Questions
    const questions = [
        "What is " + topic + "?",
        "Explain the basic concepts of " + topic + ".",
        "What are the important features of " + topic + "?",
        "What are the applications of " + topic + "?",
        "Give an example of " + topic + "."
    ];

    const questionList = document.getElementById("questions");

    questionList.innerHTML = "";

    questions.forEach(function(question) {
        const li = document.createElement("li");
        li.textContent = question;
        questionList.appendChild(li);
    });

    // Quiz data
    quizData = [
        {
            question: "What is the first step to learn " + topic + "?",
            options: [
                "Understand the basic concepts",
                "Skip the topic",
                "Memorize without understanding",
                "Avoid examples"
            ],
            answer: 0
        },

        {
            question: "Which approach is useful for understanding " + topic + "?",
            options: [
                "Practice and examples",
                "Ignoring the basics",
                "Never revising",
                "Skipping questions"
            ],
            answer: 0
        },

        {
            question: "Why should students learn " + topic + "?",
            options: [
                "To understand its concepts and applications",
                "To avoid studying",
                "Only for entertainment",
                "There is no reason"
            ],
            answer: 0
        }
    ];

    currentQuestion = 0;
    score = 0;

    showQuestion();
}


// Show quiz question
function showQuestion() {

    if (currentQuestion >= quizData.length) {

        document.getElementById("quiz-question").textContent =
            "🎉 Quiz Completed!";

        document.getElementById("options").innerHTML = "";

        document.getElementById("nextBtn").style.display = "none";

        document.getElementById("score").textContent =
            "Your Score: " + score + " / " + quizData.length;

        return;
    }

    const question = quizData[currentQuestion];

    document.getElementById("quiz-question").textContent =
        (currentQuestion + 1) + ". " + question.question;

    const optionsDiv = document.getElementById("options");

    optionsDiv.innerHTML = "";

    question.options.forEach(function(option, index) {

        const button = document.createElement("div");

        button.className = "option";

        button.textContent = option;

        button.onclick = function() {
            checkAnswer(index);
        };

        optionsDiv.appendChild(button);
    });

    document.getElementById("nextBtn").style.display = "none";
}


// Check answer
function checkAnswer(selectedAnswer) {

    const correctAnswer = quizData[currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {
        score++;
        alert("✅ Correct Answer!");
    } else {
        alert("❌ Wrong Answer!");
    }

    document.getElementById("nextBtn").style.display = "block";
}


// Next question
function nextQuestion() {

    currentQuestion++;

    showQuestion();
}
