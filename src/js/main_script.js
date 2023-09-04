import { elements } from './elements';
import { fetchImage } from './pixabay-api';
import { createMarkup } from './markup';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import axios from 'axios';
import Notiflix from 'notiflix';
axios.defaults.headers.common['x-api-key'] =
  '39216416-ade7d4bf60cd1f5e815f694cd';


elements.searchForm.addEventListener('submit', getCollection)

function getCollection(evt) {
  evt.preventDefault();
  const { searchImg } = evt.currentTarget.elements;

  fetchImage(searchImg.value).then(resp => {
    if (resp.data.hits.length === 0) {
      Notiflix.Notify.failure(
        'Sorry! There are no images matching your search query. Please try again.'
      );
      return;
    } Notiflix.Notify.success(`Hooray! We found ${resp.data.totalHits} images.`)
  }
  )
  const collection = resp.data.hits.map(({
          webformatURL,
          largeImageURL,
          tags,
          likes,
          views,
          comments,
          downloads,
        }) =>
          createMarkup(
            webformatURL,
            largeImageURL,
            tags,
            likes,
            views,
            comments,
            downloads
          )
      )
      .join('');
    elements.gallery.innerHTML = collection;

  const instance = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
  });

}












