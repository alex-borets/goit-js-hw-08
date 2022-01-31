import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const cardsMarkup = createGalleryCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryCardsMarkup(galleryItems) {
  return galleryItems
    .map(({ original, preview, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__item" href="${original}">
    <img
    class="gallery__image"
    src="${preview}" 
    alt="${description}" 
    />
    </a>
    </div>`;
    })
    .join('');
}

new SimpleLightbox(`.gallery a`, {
  captionsData: 'alt',
  captionDelay: 250,
});
