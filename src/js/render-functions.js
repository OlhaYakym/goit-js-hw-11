// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
// import { loader } from '../main';
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
export function createGallery(images) {
  //   console.log('createGallery', images);
  
  const markup = images
    .map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
      return `<li class="gallery-item"><a href="${largeImageURL}">
            <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
            <div class='item-footer'>
            <p><b>likes</b> ${likes}</p>
            <p><b>views</b> ${views}</p>
            <p><b>comments</b> ${comments}</p>
            <p><b>downloads</b> ${downloads}</p>
            </div>
        </a>
       
        </li>`;
    })
    .join('');
  gallery.innerHTML = markup;
  lightbox.refresh();
}
export function clearGallery() {
  gallery.innerHTML = '';
  
}


export function showLoader() {
  loader.classList.remove('hidden-loader');
  
}

export function hideLoader() {
  loader.classList.add('hidden-loader');
}

const lightbox = new SimpleLightbox('.gallery a', {});
