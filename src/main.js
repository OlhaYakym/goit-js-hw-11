import iziToast from 'izitoast';
import { getImagesByQuery } from './js/pixabay-api';
import { clearGallery, createGallery, hideLoader, showLoader } from './js/render-functions';
const form = document.querySelector('.form');


form.addEventListener('submit', event => {
  event.preventDefault();
  const query = form.elements['search-text'].value;
  clearGallery();
  if (query === '') { 
    iziToast.error({
      message: 'Please enter a search query!',
      position: 'topCenter',
      timeout: 3000
    });
    return;
  }
  // console.log('submit', event.target.elements['search-text'].value);
  showLoader();
  const data = getImagesByQuery(query);
  data.then(response => {
    if (response.hits.length === 0) {
      iziToast.error({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topCenter',
        timeout: 3000
      });
      return;
    }
    createGallery(response.hits);
  }).catch(() => {
    iziToast.error({ message: "Error fetching data from Pixabay", position: 'topCenter', timeout: 3000 });
  })
    .finally(() => {
      hideLoader();
    });
  form.reset();
});