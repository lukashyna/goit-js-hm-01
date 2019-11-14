const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function(login) {
  let minSym = 4;
  let maxSym = 16;
  if (login.length >= minSym && login.length <= maxSym) {
    return true;
  }
  return false;
};

const isLoginUnique = function(allLogins, login) {
  for (const word of allLogins) {
    if (word === login) {
      return false;
    }
  }
  return true;
};

const addLogin = function(allLogins, login) {
  if (isLoginValid(login) === false) {
    console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  } else if (isLoginUnique(allLogins, login) === false) {
    console.log("Такой логин уже используется!");
  } else {
    console.log("Логин успешно добавлен!");
    allLogins.push(login);
  }
};
addLogin(logins, prompt("Введите логин:"));

console.log(logins);

// Вызовы функции для проверки
addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(logins, "robotGoogles"); // 'Такой логин уже используется!'
addLogin(logins, "Zod"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, "jqueryisextremelyfast"); // 'Ошибка! Логин должен быть от 4 до 16 символов'
