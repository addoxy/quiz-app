const scoreList = document.querySelector("#score-list");

function displayHighscores() {
  try {
    const highScores = JSON.parse(localStorage.getItem("highScores"));
    highScores.sort((score1, score2) => score2.score - score1.score);

    highScores.forEach((object) => {
      const name = object.name;
      const score = object.score;

      scoreList.appendChild(createElement(name, score));
    });

    while (scoreList.childElementCount > 5) {
      scoreList.removeChild(scoreList.lastElementChild);
      highScores.pop();
    }

    localStorage.setItem("highScores", JSON.stringify(highScores));
  } catch (error) {
    // do nothing;
  }
}

function createElement(name, score) {
  const li = document.createElement("li");
  li.classList.add("mb-16");
  li.innerText = `${name}: `;

  const span = document.createElement("span");
  span.classList.add("text-tertiary");

  span.innerText = score;

  li.appendChild(span);

  return li;
}

displayHighscores();
