`use strict`;

let counterValue = 0;
const btnIncrement = document.querySelector(`button[data-action="increment"]`);
const btnDecrement = document.querySelector(`button[data-action="decrement"]`);

function increment() {
  counterValue += 1;

  document.getElementById('value').textContent = counterValue;
}

function decrement() {
  counterValue -= 1;

  document.getElementById('value').textContent = counterValue;
}

btnIncrement.addEventListener(`click`, increment);
btnDecrement.addEventListener(`click`, decrement);
