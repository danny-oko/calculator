const input = document.getElementById("input");
const funcButtons = [...document.querySelectorAll(".btn-func")];
const opButtons = [...document.querySelectorAll(".btn-op")];
const numberButtons = [...document.querySelectorAll(".btn-num")];

let firstValue = null;
let operator = null;
let waitingSecond = false;

numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (waitingSecond) {
      input.value = value;
      waitingSecond = false;
      return;
    }
  });

  if (input.value === "0" || input.value === "Error") {
    input.value = value;
  } else {
    input.value += value;
  }
});

funcButtons.forEach((func) => {
  func.addEventListener("click", () => {
    
  });
});
