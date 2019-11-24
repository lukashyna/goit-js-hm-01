`use strict`;
let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let message;
let invoice = prompt(`Количество выбранного товара для оформления заявки: `);

totalPrice = invoice * pricePerDroid;
if (invoice === null) {
  message = `Отменено пользователем!`;
} else if (totalPrice > credits) {
  message = `Недостаточно средств на счету!`;
} else {
  message = `Вы купили ${invoice} дроидов, на счету осталось ${credits -
    totalPrice} кредитов.`;
}
console.log(message);
