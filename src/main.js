import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const form = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = input.value.trim();

  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Введіть текст для пошуку',
    });
    hideLoader();
    return;
  }
  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'Info',
          message: 'Зображення не знайдено',
        });
        hideLoader();

        return;
      }

      createGallery(data.hits);
      input.value = '';
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: 'Помилка під час запиту',
      });
      hideLoader();
    });
});
