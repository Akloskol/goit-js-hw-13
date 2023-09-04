import { fetchImage } from "./pixabay-api";

export function createMarkup(webformatURL, largeImageURL, tags, likes, views, comments, downloads) {
  elements.loader.classList.replace('is-hidden', 'loader');

    return `<div class="photo-card">
  <a class="gallery_link" href="${largeImageURL}">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item"><b>Likes</b>${likes}</p>
    <p class="info-item"><b>Views</b>${views}</p>
    <p class="info-item"><b>Comments</b>${comments}</p>
    <p class="info-item"><b>Downloads</b>${downloads}</p>
  </div>
  </a>
</div>`;
      }
