import css from './css/styles.css';
import refs from '../src/refs/refs.js';
// import templateItems from '../src/templates/items.hbs';
import apiService from '../src/js/apiService.js';

let queryValue;

// const smoothScroll = h => {
//   let i = h || 0;
//   if (i < 3000) {
//     setTimeout(() => {
//       window.scrollTo(0, i);
//       smoothScroll(i + 10);
//     }, 10);
//   }
// };

// var btn = document.querySelector('.more');

refs.form.addEventListener('submit', e => {
  e.preventDefault();
  refs.list.innerHTML = '';
  apiService.page = 1;
  console.log(e.target.elements.query.value);
  queryValue = e.target.elements.query.value;
  apiService.getFetch(queryValue);
});

refs.moreBtn.addEventListener('click', () => {
  apiService.page += 1;
  console.log(apiService.page);
  apiService.getFetch(queryValue);
  //   smoothScroll();
  //   btn.scrollIntoViewIfNeeded();
  if (apiService.page > 1) {
    // console.log('scroll !!!');
    // window.scrollBy({
    //   top: window.innerHeight - 40,
    //   behavior: 'smooth',
    // });
    setTimeout(function () {
      window.scrollBy(0, window.innerHeight);
    }, 200);
    // window.scrollBy(0, window.innerHeight);
  }
});
