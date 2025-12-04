const input = document.getElementById("input");
const funcButtons = [...document.querySelectorAll(".btn-func")];
const opButtons = [...document.querySelectorAll(".btn-op")];
const numberButtons = [...document.querySelectorAll(".btn-num")];

let firstValue = null;
let waitingSecondValue = false;
let operator = null;

numberButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = btn.textContent;
    if (input.value === "0") {
      firstValue = input.value = value;
    } else {
      firstValue = input.value += value;
    }
    console.log("first value:", Number(firstValue));
  });
});

funcButtons.forEach((func) => {
  func.addEventListener("click", () => {
    const funcValue = func.textContent;

    if (input.value !== "" && funcValue === "AC") {
      input.value = "0";
    }
    // get last index and remove it from the number
    if (funcValue === "C") {
      const modifiedNum = Math.floor(input.value / 10);
      console.log(modifiedNum);
      let updateValue = (input.value = modifiedNum);
      input.textContent = updateValue;
    }
    // find remainder
  });
});

opButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
     
  });
});
