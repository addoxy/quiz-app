const finalScore = document.querySelector("#final-score");
const nameInput = document.querySelector("#name-input");
const saveBtn = document.querySelector("#save-btn");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#close-modal");

finalScore.innerText = localStorage.getItem("latest-score");

const highScores = localStorage.getItem("highScores")
  ? JSON.parse(localStorage.getItem("highScores"))
  : [];
console.log(highScores);

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (nameInput.value === "") {
    modal.showModal();
  } else {
    highScores.push({
      name: nameInput.value,
      score: finalScore.innerText,
    });
    localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("index.html");
  }
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.close();
});
