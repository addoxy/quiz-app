import data from "./data.js";

const question = document.querySelector("#question");
const options = document.querySelectorAll(".option");

let questionIndex = 0;
let score = 0;
let numberOfQuestions = data.length;

function start() {
  nextQuestion();
}

function nextQuestion() {
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
    score++;
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

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    disableOptions();

    const correctAnswer = data[questionIndex].answer;
    const correctAnswerElement = getCorrectAnswerElement(correctAnswer);

    if (checkAnswer(e.target.innerText, correctAnswer)) {
      e.target.classList.add("green");
      setTimeout(() => e.target.classList.remove("green"), 1000);
    } else {
      e.target.classList.add("red");
      setTimeout(() => correctAnswerElement.classList.add("green"), 500);
      setTimeout(() => {
        e.target.classList.remove("red");
        correctAnswerElement.classList.remove("green");
      }, 1000);
    }

    questionIndex++;
    numberOfQuestions--;

    if (numberOfQuestions === 0) {
      setTimeout(() => window.location.assign("highscores.html"), 1000);
    } else {
      setTimeout(() => nextQuestion(), 1000);
    }
  });
});

start();
