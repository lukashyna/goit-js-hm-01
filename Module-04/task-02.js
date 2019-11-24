`use strict`;

// Исправь ошибки которые будут в консоли, чтобы скрипт заработал.

const inventory = {
  items: ['Монорельса', 'Фильтр'],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    inventory.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    inventory.items = inventory.items.filter(item => item !== itemName);
  },
};

const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action(itemName);
};

invokeInventoryAction('Аптечка', inventory.add);
// Invoking action on Аптечка
// Adding Аптечка to inventory

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryAction('Фильтр', inventory.remove);
// Invoking action on Фильтр
// Removing Фильтр from inventory

console.log(inventory.items); // ['Монорельса', 'Аптечка']

// const inventory = {
//   items: ['Монорельса', 'Фильтр'],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     inventory.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     inventory.items = inventory.items.filter(item => item !== itemName);
//   },
// };

// const invokeInventoryAction = function(itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName);
// };

// invokeInventoryAction('Аптечка', inventory.add.bind(inventory));
// // Invoking action on Аптечка
// // Adding Аптечка to inventory

// console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

// invokeInventoryAction('Фильтр', inventory.remove.bind(inventory));
// // Invoking action on Фильтр
// // Removing Фильтр from inventory

// console.log(inventory.items); // ['Монорельса', 'Аптечка']
