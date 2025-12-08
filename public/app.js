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
      console.log("helo");
    }
  });
});

// // function operation(a, b, op) {

// // }

// const ans = [];
// var convertTemperature = function (celsius) {
//   ans.push((kelvin = celsius + 273.15));
//   ans.push((faranheit = celsius * 1.8 + 32.0));

//   return ans;
// };

// console.log(convertTemperature(36.5));

// let commonFactors = function (a, b) {
//   let arr = [];
//   for (let i = 1; i < a && i < b; i++) {
//     if (a % 2 === 0 && b % 2 === 0) {
//       console.log(i);
//     }
//   }
// };
// console.log(commonFactors(12, 8));
