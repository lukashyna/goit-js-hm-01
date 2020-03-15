import apiService from './services/apiService';
import articleListItemsTemplate from '../templates/article_list_item.hbs';

const refs = {
  searchForm: document.querySelector('#search-form'),
  articleList: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('button[data-action="load-more"]'),
  toTopBtn: document.querySelector('button[data-action="to-top"]'),
};
refs.searchForm.addEventListener('submit', searchFormSubmitHandler);
refs.loadMoreBtn.addEventListener('click', loadMoreBtnHandler);
refs.toTopBtn.addEventListener('click', toTopBtnHandler);
function searchFormSubmitHandler(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const input = form.elements.query;
  clearListItems();
  apiService.resetPage();
  apiService.searchQuery = input.value;
  fetchArticles();
  input.value = '';
  refs.loadMoreBtn.classList.remove('visually-hidden');
  refs.toTopBtn.classList.remove('visually-hidden');
}
function loadMoreBtnHandler() {
  fetchArticles();
}
function fetchArticles() {
  apiService
    .fetchArticles()
    .then(articles => {
      isertListItems(articles);
    })
    .catch(error => {
      console.log(error);
    });
}
function toTopBtnHandler(event) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  event.currentTarget.blur();
}

function isertListItems(items) {
  const markup = articleListItemsTemplate(items);
  refs.articleList.insertAdjacentHTML('beforeend', markup);
}
function clearListItems() {
  refs.articleList.innerHTML = '';
}
