`use strict`;

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

for (let ingredient of ingredients) {
  const ingredientListItem = document.createElement(`li`);
  let ingredientList = document.querySelector(`#ingredients`);

  ingredientListItem.textContent = ingredient;
  ingredientList.appendChild(ingredientListItem);
}
