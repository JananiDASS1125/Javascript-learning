// QUESTIONS
let questions = [
  {
    question: "What is 2 + 2?",
    answers: ["2", "3", "4", "5"],
    correct: "4"
  },
  {
    question: "Capital of India?",
    answers: ["Chennai", "Delhi", "Mumbai", "Kolkata"],
    correct: "Delhi"
  },
  {
    question: "JS stands for?",
    answers: ["Java", "JavaScript", "Python", "C++"],
    correct: "JavaScript"
  }
];

let currentIndex = 0;
let score = 0;

let questionEl = document.getElementById("question");
let answersEl = document.getElementById("answers");
let nextBtn = document.getElementById("nextBtn");
let scoreEl = document.getElementById("score");

// Load question
function loadQuestion() {
  let currentQ = questions[currentIndex];

  questionEl.innerText = currentQ.question;
  answersEl.innerHTML = "";

  currentQ.answers.forEach((ans) => {
    let btn = document.createElement("button");
    btn.innerText = ans;

    btn.addEventListener("click", function () {
      if (ans === currentQ.correct) {
        score++;
      }
      nextQuestion();
    });

    answersEl.appendChild(btn);
  });
}

// Next question
function nextQuestion() {
  currentIndex++;

  if (currentIndex < questions.length) {
    loadQuestion();
  } else {
    showScore();
  }
}

// Show score
function showScore() {
  document.getElementById("quiz-container").innerHTML = "";
  scoreEl.innerText = "Your Score: " + score;
}

// Start
loadQuestion();
