const finalScore = document.querySelector("#final-score");
const nameInput = document.querySelector("#name-input");
const saveBtn = document.querySelector("#save-btn");
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#close-modal");

finalScore.innerText = localStorage.getItem("latest-score");

saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (nameInput.value === "") {
    modal.showModal();
  } else {
    // append the score to the highscores list
  }
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.close();
});
