import templateItems from '../templates/items.hbs';
import refs from '../refs/refs.js';
import apiService from '../js/apiService.js';

console.log(apiService.getFetch);

// const apiUrl = `https://pixabay.com/api/`;
// let apiKey = `19988178-c6225cb482599f6c35806385a`;
// let page = 1;
// let perPage = 3;
// let orientationImg = `horizontal`;
// let imgType = `photo`;
let queryValue;
// let request = `monstre`;

// let params = `?key=${apiKey}&image_type=${imgType}&orientation=${orientationImg}&q=${queryValue}&page=1&per_page=${perPage}`;

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  refs.list.innerHTML = '';
  console.log(e.target.elements.query.value);
  queryValue = e.target.elements.query.value;
  apiService.getFetch(queryValue);
});

refs.moreBtn.addEventListener('click', () => {
  page += 1;
  console.log(page);
  getFetch(queryValue);
});

function getFetch(q) {
  let params = `?key=${apiKey}&image_type=${imgType}&orientation=${orientationImg}&q=${q}&page=${page}&per_page=${perPage}`;
  let url = apiUrl + params;
  fetch(url)
    .then(a => a.json())
    .then(b => {
      return b.hits;
    })
    .then(array => {
      let item = templateItems(array);
      refs.list.insertAdjacentHTML('beforeend', item);
      if (refs.list.children) {
        refs.moreBtn.classList.remove('isHiden');
      } else {
        refs.moreBtn.classList.add('isHiden');
      }
    });
}
