import templateItems from '../templates/items.hbs';
import refs from '../refs/refs.js';

export default {
  apiUrl: `https://pixabay.com/api/`,
  apiKey: `19988178-c6225cb482599f6c35806385a`,
  page: 1,
  perPage: 12,
  orientationImg: `horizontal`,
  imgType: `photo`,

  getFetch(q) {
    let params = `?key=${this.apiKey}&image_type=${this.imgType}&orientation=${this.orientationImg}&q=${q}&page=${this.page}&per_page=${this.perPage}`;
    let url = this.apiUrl + params;
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
  },
};
