import images from './gallery-items.js';
// добавление элементов в галлерею
const galleryList = document.querySelector(`.js-gallery`);
for (let image of images) {
  galleryList.insertAdjacentHTML(
    'afterbegin',
    `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${image.original}"
    >
      <img
        class="gallery__image"
        src="${image.preview}"
        data-source="${image.original}"
        alt="${image.description}"
      />
    </a>
  </li>`,
  );
}
// модальное окно
const closeGalleryModal = document.querySelector('.lightbox__button');

const modalGal = document.querySelector('.lightbox');
const modalGalImg = document.querySelector('.lightbox__image');

function setData() {
  modalGal.classList.add(`is-open`);
  modalGalImg.setAttribute(`alt`, `${event.target.alt}`);
  modalGalImg.setAttribute(`src`, `${event.target.dataset.source}`);
}
function removeData() {
  modalGal.classList.remove(`is-open`);
  modalGalImg.removeAttribute(`alt`);
  modalGalImg.removeAttribute(`src`);
}
galleryList.addEventListener(`click`, openGalleryImage);
function openGalleryImage(event) {
  event.preventDefault();
  setData();
}

closeGalleryModal.addEventListener(`click`, closeGalleryImage);
function closeGalleryImage(event) {
  event.preventDefault();
  removeData();
}
