const scoreList = document.querySelector("#score-list");

function saveScore() {
  const [name, score] = localStorage.getItem("highscore").split(",");

  scores = Array.from(scoreList.children);

  if (scores.length === 0) {
    scoreList.appendChild(createElement(name, score));
  } else {
    scores.forEach((item) => {
      if (score > item.lastElementChild.innerText) {
        item.insertAdjacentElement("beforebegin", createElement(name, score));
      }
    });
  }

  if (scoreList.childElementCount > 5) {
    scoreList.removeChild(scoreList.lastElementChild);
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

saveScore();
