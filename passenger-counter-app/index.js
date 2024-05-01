let incrementButton = document.querySelector(".increment");
let countEl = document.querySelector("#count-el");
let saveEl = document.querySelector("#save-el");
let count = 0;

// incrementButton.addEventListener("click", () => {
//   count += 1;
//   countEl.innerText = count;
// });

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  count = 0;
  countEl.innerText = count;
}
