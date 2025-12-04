const input = document.getElementById("input");
const numberButtons = [...document.querySelectorAll(".btn-num")];
const funcButtons = [...document.querySelectorAll("btn-func")];
const opButtons = [...document.querySelectorAll("btn-op")];

let firstValue = null;
let waitingSecondValue = false;
let operator = null;

numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (input.value === "0") {
      input.value = value;
    } else {
      input.value += value;
    }
  });
});


