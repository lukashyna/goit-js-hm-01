let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let message;
let invoice = prompt(`Количество выбранного товара для оформления заявки: `);
invoice = Number(invoice);
if (invoice > 0) {
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
