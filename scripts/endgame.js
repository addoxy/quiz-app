const input = document.querySelector("#nameInput");
const saveBtn = document.querySelector("#saveBtn");

if (input.value === "") {
  console.log("Empty");
} else if (input.value !== "") {
  console.log("Something in it");
}
