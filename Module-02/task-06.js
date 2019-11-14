let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("Введите число : ");
  if (input === null) {
    break;
  }
  input = Number(input);
  numbers.push(Number(input));
}
for (const number of numbers) {
  total += number;
}
console.log(`Общая сумма чисел равна ${total}`);
