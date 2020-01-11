`use strict`;

const allCategories = document.getElementsByClassName(`item`).length;

console.log(`В списке ${allCategories} категории.`);

let categoriesName = document.querySelectorAll('li.item > h2');

for (let categoryName of categoriesName) {
  console.log(
    `Категория: ${categoryName.textContent}; Количество элементов: ${categoryName.nextElementSibling.children.length}`,
  );
}
