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
    localStorage.setItem(
      "highscore",
      `${nameInput.value},${finalScore.innerText}`
    );
    window.location.assign("index.html");
  }
});

closeModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.close();
});
