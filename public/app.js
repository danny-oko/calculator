const input = document.getElementById("input");
const funcButtons = [...document.querySelectorAll(".btn-func")];
const opButtons = [...document.querySelectorAll(".btn-op")];
const numberButtons = [...document.querySelectorAll(".btn-num")];
const equalBtn = document.querySelector(".btn-eq");

let firstValue = null;
let waitingSecondValue = false;
let operator = null;

// number buttons
numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    // new number after operator
    if (waitingSecondValue) {
      input.value = value;
      waitingSecondValue = false;
      return;
    }

    // handle "0" and "Error"
    if (input.value === "0" || input.value === "Error") {
      input.value = value;
    } else {
      input.value += value;
    }
  });
});

// function buttons (AC, C, +/−, %)
funcButtons.forEach((func) => {
  func.addEventListener("click", () => {
    const funcValue = func.textContent;

    // all clear
    if (funcValue === "AC") {
      input.value = "0";
      firstValue = null;
      operator = null;
      waitingSecondValue = false;
      return;
    }

    // clear last digit
    if (funcValue === "C") {
      if (input.value.length === 1) {
        input.value = "0";
      } else {
        input.value = input.value.slice(0, -1);
      }
      return;
    }

    // +/- toggle
    if (funcValue === "+/−") {
      if (input.value !== "0") {
        input.value = String(Number(input.value) * -1);
      }
      return;
    }

    // percent
    if (funcValue === "%") {
      input.value = String(Number(input.value) / 100);
      return;
    }
  });
});

// operator buttons (+, −, ×, ÷)
opButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const op = btn.textContent;
    const current = Number(input.value);

    if (firstValue === null) {
      firstValue = current;
    } else if (!waitingSecondValue && operator) {
      firstValue = compute(firstValue, current, operator);
      input.value = firstValue;
    }

    operator = op;
    waitingSecondValue = true;
  });
});

// equals button
equalBtn.addEventListener("click", () => {
  if (operator === null || firstValue === null) return;

  const secondValue = Number(input.value);
  const result = compute(firstValue, secondValue, operator);

  input.value = result;
  firstValue = typeof result === "number" ? result : null;
  operator = null;
  waitingSecondValue = true;
});

// math logic
function compute(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "−":
      return a - b;
    case "×":
      return a * b;
    case "÷":
      return b === 0 ? "Error" : a / b;
    default:
      return b;
  }
}
