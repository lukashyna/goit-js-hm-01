const china = 'Китай';
const chile = 'Чили';
const australia = 'Австралия';
const india = 'Индия';
const jamaica = 'Ямайка';
const chinaPrice = 100;
const chilePrice = 250;
const australiaPrice = 170;
const indiaPrice = 80;
const jamaicaPrice = 120;
let message;
let userChoice = prompt(`Введите страну доставки: `);
if (userChoice === null) {
  message = `Отменено!`;
} else
  switch (userChoice.toLowerCase()) {
    case china.toLowerCase():
      message = `Доставка в ${china} будет стоить ${chinaPrice} кредитов.`;
      break;
    case chile.toLowerCase():
      message = `Доставка в ${chile} будет стоить ${chilePrice} кредитов.`;
      break;
    case australia.toLowerCase():
      message = `Доставка в ${australia} будет стоить ${australiaPrice} кредитов.`;
      break;
    case india.toLowerCase():
      message = `Доставка в ${india} будет стоить ${indiaPrice} кредитов.`;
      break;
    case jamaica.toLowerCase():
      message = `Доставка в ${jamaica} будет стоить ${jamaicaPrice} кредитов.`;
      break;
    default:
      message = `В вашей стране доставка не доступна.`;
  }
console.log(message);
