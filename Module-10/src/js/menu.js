import menu from '../menu.json';
import menuItem from '../template/menu-item.hbs';
const refs = {
  menuItemlist: document.querySelector(`.js-menu`),
};

function buildMenu(dishes) {
  const markup = dishes.map(dish => menuItem(dish)).join(' ');
  refs.menuItemlist.insertAdjacentHTML('beforeend', markup);
}
buildMenu(menu);
