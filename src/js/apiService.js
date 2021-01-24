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
    return fetch(url)
      .then(a => a.json())
      .then(b => {
        return b.hits;
      });
  },
};
