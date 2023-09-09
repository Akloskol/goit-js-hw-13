import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39216416-ade7d4bf60cd1f5e815f694cd';

export async function fetchGallery(name, totalNumberOfPges, currentPage = 1) {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: name,
      per_page: totalNumberOfPges,
      page: currentPage,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return response;
};