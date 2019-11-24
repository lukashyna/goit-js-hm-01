let credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let message;
let invoice = prompt(`Количество выбранного товара для оформления заявки: `);
invoice = Number(invoice);
totalPrice = invoice * pricePerDroid;
if (invoice < 0) {
  console.log(`Ошибка`);
} else {
  if (totalPrice > credits) {
    message = `Недостаточно средств на счету!`;
  } else if (totalPrice <= credits) {
    message = `Вы купили ${invoice} дроидов, на счету осталось ${credits -
      totalPrice} кредитов.`;
  } else {
    message = `Отменено пользователем!`;
  }
  console.log(message);
}
