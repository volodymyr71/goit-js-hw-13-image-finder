import css from './css/styles.css';
import refs from '../src/refs/refs.js';
// import templateItems from '../src/templates/items.hbs';
import apiService from '../src/js/apiService.js';

let queryValue;

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  refs.list.innerHTML = '';
  console.log(e.target.elements.query.value);
  queryValue = e.target.elements.query.value;
  apiService.getFetch(queryValue);
});

refs.moreBtn.addEventListener('click', () => {
  apiService.page += 1;
  console.log(apiService.page);
  apiService.getFetch(queryValue);
});
