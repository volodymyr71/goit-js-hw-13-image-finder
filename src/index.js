import css from './css/styles.css';
import refs from '../src/refs/refs.js';
import templateItems from '../src/templates/items.hbs';
import apiService from '../src/js/apiService.js';

let queryValue;

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  refs.list.innerHTML = '';
  apiService.page = 1;
  // console.log(e.target.elements.query.value);
  queryValue = e.target.elements.query.value;
  renderFetch(apiService.getFetch(queryValue));
});

refs.moreBtn.addEventListener('click', () => {
  apiService.page += 1;
  // console.log(apiService.page);
  renderFetch(apiService.getFetch(queryValue));

  // if (apiService.page > 1) {
  //   setTimeout(function () {
  //     window.scrollBy(0, window.innerHeight);
  //   }, 200);
  // }
});

function renderFetch(prom) {
  prom.then(array => {
    let item = templateItems(array);
    refs.list.insertAdjacentHTML('beforeend', item);
    if (refs.list.children) {
      window.scrollTo({
        top: document.body.scrollHeight,
        left: 0,
        behavior: 'smooth',
      });
      refs.moreBtn.classList.remove('isHiden');
    }
    if (array.length < 12) {
      refs.moreBtn.classList.add('isHiden');
    }
  });
}
