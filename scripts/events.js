import data from "./data.js";

const quizContainer = document.querySelector("#quiz-container");
const endContainer = document.querySelector("#end-container");
const question = document.querySelector("#question");
const options = document.querySelectorAll(".option");
const userScore = document.querySelector("#score");
const userFinalScore = document.querySelector("#finalScore");

let questionIndex = 0;
let score = 0;
let finalScore = 0;
let numberOfQuestions = data.length;

function start() {
  userScore.innerText = score;
  nextQuestion();
}

function nextQuestion() {
  userScore.innerText = score;
  enableOptions();
  const currentQuestion = data[questionIndex].question;
  const currentOptions = data[questionIndex].options;

  let optionIndex = 0;

  question.innerText = currentQuestion;
  options.forEach((option) => {
    option.innerText = currentOptions[optionIndex];
    optionIndex++;
  });
}

function checkAnswer(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer) {
    score = score + 100;
    return true;
  }
  return false;
}

function disableOptions() {
  options.forEach((option) => {
    option.disabled = true;
  });
}

function enableOptions() {
  options.forEach((option) => {
    option.disabled = false;
  });
}

function getCorrectAnswerElement(correctAnswer) {
  for (let i = 0; i < options.length; i++) {
    if (options[i].innerText === correctAnswer) {
      return options[i];
    }
  }
}

// function saveScore(name, score) {
//   if (scoreList.childElementCount === 0) {
//     const li = document.createElement("li");
//     li.classList.add("mb-16");
//     li.innerText = `${name}: `;

//     const span = document.createElement("span");
//     span.classList.add("text-tertiary");
//     li.appendChild(span);
//     span.innerText = score;

//     scoreList.appendChild(li);
//   }
//   if (scoreList.childElementCount > 5) {
//     scoreList.removeChild(scoreList.lastElementChild);
//   }
// }

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    disableOptions();

    const correctAnswer = data[questionIndex].answer;
    const correctAnswerElement = getCorrectAnswerElement(correctAnswer);

    if (checkAnswer(e.target.innerText, correctAnswer)) {
      e.target.classList.add("bg-green");
      setTimeout(() => e.target.classList.remove("bg-green"), 1000);
    } else {
      e.target.classList.add("bg-red");
      setTimeout(() => correctAnswerElement.classList.add("bg-green"), 500);
      setTimeout(() => {
        e.target.classList.remove("bg-red");
        correctAnswerElement.classList.remove("bg-green");
      }, 1000);
    }

    questionIndex++;
    numberOfQuestions--;

    if (numberOfQuestions === 0) {
      finalScore = score;
      setTimeout(() => {
        userFinalScore.innerText = finalScore;
        quizContainer.classList.add("hide");
        endContainer.classList.remove("hide");
      }, 1000);
    } else {
      setTimeout(() => nextQuestion(), 1000);
    }
  });
});

start();
