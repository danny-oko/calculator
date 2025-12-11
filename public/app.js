const input = document.getElementById("input");
const funcButtons = [...document.querySelectorAll(".btn-func")];
const opButtons = [...document.querySelectorAll(".btn-op")];
const numberButtons = [...document.querySelectorAll(".btn-num")];

let waitingForSecondValue = false;
let operator = null;
let firstValue = null;
let secondValue = null;

function resetAll() {
  input.value = "0";
  firstValue = null;
  secondValue = null;
  operator = null;
  waitingForSecondValue = false;
}

resetAll();

numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (waitingForSecondValue) {
      input.value = value;
      waitingForSecondValue = false;
    } else if (input.value === "0" || input.value === "Error") {
      input.value = value;
    } else {
      input.value += value;
    }

    if (operator === null) {
      firstValue = Number(input.value);
    } else {
      secondValue = Number(input.value);
    }

    console.log("first:", firstValue, "second:", secondValue, "op:", operator);
  });
});

opButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    operator = btn.textContent;
    firstValue = Number(input.value);
    waitingForSecondValue = true;
    console.log("operator:", operator, "firstValue:", firstValue);
  });
});

funcButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (value === "AC") {
      resetAll();
      return;
    }

    if (value === "C") {
      const num = Number(input.value);
      const truncated = Math.trunc(num / 10);
      input.value = String(truncated);

      if (operator === null) {
        firstValue = Number(input.value);
      } else {
        secondValue = Number(input.value);
      }
      return;
    }

    if (value === "+/−") {
      input.value = String(Number(input.value) * -1);

      if (operator === null) {
        firstValue = Number(input.value);
      } else {
        secondValue = Number(input.value);
      }
      return;
    }

    if (value === "=") {
      if (!operator) return;

      if (secondValue === null) {
        secondValue = Number(input.value);
      }

      const result = calculate(firstValue, secondValue, operator);
      input.value = result;

      firstValue = typeof result === "number" ? result : null;
      secondValue = null;
      operator = null;
      waitingForSecondValue = false;

      console.log("=", { firstValue, secondValue, operator, result });
    }
  });
});

function calculate(firstValue, secondValue, operator) {
  let result;

  switch (operator) {
    case "+":
      result = firstValue + secondValue;
      break;
    case "-":
      result = firstValue - secondValue;
      break;
    case "×":
      result = firstValue * secondValue;
      break;
    case "÷":
      result = firstValue / secondValue;
      break;
    case "%":
      result = firstValue / secondValue;
      break;
    default:
      return "Error";
  }

  return result;
}
