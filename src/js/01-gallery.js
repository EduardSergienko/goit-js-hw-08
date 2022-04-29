// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

function createGaleryItems() {
  return galleryItems
    .map(
      item => `<a class="gallery__item" href="${item.original}">
	<img style="display: block;" class="gallery__image" src="${item.preview}" alt="${item.description}" />
</a>`,
    )
    .join('');
}
galleryContainer.innerHTML = createGaleryItems(galleryItems);

new SimpleLightbox('.gallery a', {
  captionDelay: '250ms',
  captionsData: 'alt',
});
