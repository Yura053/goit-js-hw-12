import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import octagonIcon from '../img/bi_x-octagon.svg';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const ulElem = document.querySelector('ul.gallery');
let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export const showError = text => {
  iziToast.show({
    message: text,
    position: 'center',
    iconUrl: octagonIcon,
    iconColor: '#FFFFFF',
    backgroundColor: '#EF4040',
    messageColor: '#FFFFFF',
    progressBarColor: '#B51B1B',
  });
};

export const showMessage = text => {
  iziToast.show({
    message: text,
    position: 'bottomCenter',
    iconUrl: octagonIcon,
    iconColor: '#FFFFFF',
    backgroundColor: '#4e75ff',
    messageColor: '#FFFFFF',
    progressBarColor: '#4e75ff',
  });
};

export const showGallery = images => {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
<li class="gallery-item">
  <a class="gallery-link" href="${largeImageURL}">
    <img
      class="gallery-image"
      src="${webformatURL}"
      alt="${tags}"
    />
  </a>
  <div class = "image-info-block">
    <div class = "image-info-block-part">
      <p class="bold">Likes</p>
      <p>${likes}</p>
  </div>
    <div class = "image-info-block-part">
    <p class="bold">Views</p>
    <p>${views}</p>
  </div>
  <div class = "image-info-block-part">
    <p class="bold">Comments</p>
    <p>${comments}</p>
  </div>
  <div class = "image-info-block-part">
    <p class="bold">Downloads</p>
    <p>${downloads}</p>
  </div>
</div>
</li>
`
    )
    .join('');

  ulElem.insertAdjacentHTML('beforeend', markup);
  gallery.refresh();
};

export const clearGallery = () => {
  ulElem.innerHTML = '';
};

const loader = document.querySelector('.loader-placeholder');
const loadMoreBtn = document.querySelector('.load-more');

export const showLoader = () => {
  loader.classList.add('loader');
};

export const hideLoader = () => {
  loader.classList.remove('loader');
};

export const showLoadMoreButton = () => {
  loadMoreBtn.classList.remove('is-hidden');
};

export const hideLoadMoreButton = () => {
  loadMoreBtn.classList.add('is-hidden');
};
