// В качестве бэкенда используй публичный API сервиса Pixabay

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '39216416-ade7d4bf60cd1f5e815f694cd';

const params = new URLSearchParams({
  key: API_KEY,
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
  page: 1,
});

export async function fetchImage() {
  const response = await fetch(`${BASE_URL}?${params}`);
  if (!response.ok) {
    throw new Error(response.status);
  }
  return await response.json();
}

