const baseUrl =
  'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
export default {
  page: 1,
  query: '',
  fetchArticles() {
    const requestParams = `&q=${this.query}&page=${this.page}&per_page=12&key=15536216-e4eb8c62c44d17c1d18b1e8f9`;
    return fetch(baseUrl + requestParams)
      .then(response => response.json())
      .then(parsedResponse => {
        this.incrementPage();
        return parsedResponse.hits;
      });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
