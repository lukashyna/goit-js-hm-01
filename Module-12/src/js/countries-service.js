import allCountries from '../services/getAllCountries';
import countryFull from '../templates/country.hbs';
import listItemsTemplate from '../templates/list-items.hbs';
import PNotify from '../../node_modules/pnotify/dist/es/PNotify.js';

// // PNotify.alert('Notice me, senpai!');

const refs = {
  searchForm: document.querySelector('.search-form'),
  countryList: document.querySelector('.country-list'),
  debounce: require('lodash.debounce'),
};

refs.searchForm.addEventListener(`input`, refs.debounce(searchCountries, 500));
function searchCountries(event) {
  const searchVal = event.target.value;

  if (!searchVal) {
    clearListItems();
    return;
  }
  allCountries.fetchCountries(searchVal).then(data => {
    if (data.length > 10) {
      clearListItems();
      PNotify.error({
        text: 'Too many matches found.Please enter a more specific query!',
      });
    } else if (data.length < 10 && data.length > 1) {
      clearListItems();

      getTemplates(data, listItemsTemplate);
    } else {
      clearListItems();
      getTemplates(data[0], countryFull);
    }
  });
}

function getTemplates(obj, template) {
  const markup = template(obj);
  refs.countryList.insertAdjacentHTML('beforeend', markup);
}

function clearListItems() {
  refs.countryList.innerHTML = '';
}
