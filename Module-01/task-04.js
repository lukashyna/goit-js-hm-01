const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let message;
let invoice = prompt(`Количество выбранного товара для оформления заявки: `);
if (invoice > 0) {
  invoice = Number(invoice);
  totalPrice = invoice * pricePerDroid;
}
if (totalPrice > credits) {
  message = `Недостаточно средств на счету!`;
} else if (totalPrice <= credits) {
  message = `Вы купили ${invoice} дроидов, на счету осталось ${credits -
    totalPrice} кредитов.`;
} else {
  message = `Отменено пользователем!`;
}
console.log(message);
