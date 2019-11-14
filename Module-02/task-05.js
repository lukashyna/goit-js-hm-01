// Подскажите, пожалуйста, что не правильно в первом варианте решения.

// const checkForSpam = function(str) {
//   const spam = "spam";
//   const sale = "sale";
//   const string = str.toLowerCase();
//   for (const word of string) {
//     if (word === spam || word === sale) {
//       return true;
//     }
//   }
//   return false;
// };
// console.log(checkForSpam("Latest technology news")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
const checkForSpam = function(str) {
  const string = str.toLowerCase();
  if (string.includes("spam")) {
    return true;
  } else if (string.includes("sale")) {
    return true;
  } else {
    return false;
  }
};
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
