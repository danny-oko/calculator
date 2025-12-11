const input = document.getElementById("input");
const funcButtons = [...document.querySelectorAll(".btn-func")];
const opButtons = [...document.querySelectorAll(".btn-op")];
const numberButtons = [...document.querySelectorAll(".btn-num")];

let firstValue = null;
let operator = null;
let waitingSecond = false;

// console.log(funcButtons);

numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (waitingSecond) {
      input.value = value;
      waitingSecond = false;
      return;
    }

    if (input.value === "0" || input.value === "Error") {
      input.value = value;
    } else {
      input.value += value;
    }
  });
});

funcButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;
    if (value === "AC") {
      input.value = 0;
    }
    if (value === "C") {
      let number = input.value;
      const newNumber = Math.floor(number / 10);
      input.value = newNumber;
    }
    if (value === "+/−") {
      let number = input.value;
      const newNum = number * -1;
      input.value = newNum;
    }
  });
});

opButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;
    if (value === "%") {
      input.value += "%";
    }
    if (value === "×") {
      input.value += "×";
    }
    if (value === "−") {
      input.value += "−";
    }
    if (value === "+") {
      input.value += "+";
    }
    if (value === "=") {
      input.value = "=";
    }
  });
  return btn.value;
});
