import axios from 'axios';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import { hideLoader } from './render-functions';

const PIXABAY_API_KEY = '49764635-55321af1e157f58385cb56e9b';
const PIXABAY_API_URL = 'https://pixabay.com/api/';
const PIXABAY_PARAMS = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

export function getImagesByQuery(query) {
  return axios
    .get(
      `${PIXABAY_API_URL}?key=${PIXABAY_API_KEY}&q=${query}&image_type=${PIXABAY_PARAMS.image_type}&orientation=${PIXABAY_PARAMS.orientation}&safesearch=${PIXABAY_PARAMS.safesearch}`
    )
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error('Error fetching data from Pixabay:', error);
    });
}
