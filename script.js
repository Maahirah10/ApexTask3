const quizData = [
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Syntax"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which language is used for web apps?",
        options: ["Python", "Java", "JavaScript"],
        answer: "JavaScript"
    }
];

function submitQuiz() {
    let score = 0;
    const answers = document.querySelectorAll('input[type="radio"]:checked');
    answers.forEach((radio, index) => {
        if (radio.value === quizData[index].answer) score++;
    });
    document.getElementById("quiz-result").innerText = `Your Score: ${score}/${quizData.length}`;
}

function loadQuiz() {
    const container = document.getElementById("quiz-container");
    quizData.forEach((q, i) => {
        const qDiv = document.createElement("div");
        qDiv.innerHTML = `<p>${q.question}</p>`;
        q.options.forEach(opt => {
            qDiv.innerHTML += `<label><input type="radio" name="q${i}" value="${opt}">${opt}</label><br>`;
        });
        container.appendChild(qDiv);
    });
}

loadQuiz();


function fetchJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(res => res.json())
        .then(data => {
            document.getElementById("joke").innerText = `${data.setup} - ${data.punchline}`;
        });
}
