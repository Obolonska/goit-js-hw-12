import axios from 'axios';
const API_KEY = '50264582-5072b5ac7075dcbe954d58fd2';

export function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
      },
    })
    .then(res => res.data);
}
