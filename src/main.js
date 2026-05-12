import * as api from './js/pixabay-api';
import * as render from './js/render-functions';

const searchForm = document.querySelector('.search-form');
// const loader = document.querySelector('.loader-placeholder');
const loadMore = document.querySelector('.load-more');
let searchInputValue;
const per_page = 15;
let page = 1;

const loadPictures = async () => {
  try {
    render.showLoader();
    render.hideLoadMoreButton();
    const response = await api.searchImage(searchInputValue, page, per_page);
    // console.log(response);

    if (!response.data.hits.length) {
      render.showError(
        'Sorry, there are no images matching your search query. Please, try again!'
      );
      return;
    }
    render.showGallery(response.data.hits);
    if (response.data.totalHits > page * per_page) {
      render.showLoadMoreButton();
    } else {
      render.showMessage(
        "We're sorry, but you've reached the end of search results."
      );
    }
  } catch (error) {
    console.error('Error fetching images:', error);

    render.showError('Something went wrong. Please try again later.');
  } finally {
    render.hideLoader();
  }
};

searchForm.addEventListener('submit', async event => {
  await loadPictures();
  event.preventDefault();
  searchInputValue = event.target.elements.input.value.trim();

  if (!searchInputValue) {
    return render.showError('Please fill out this field');
  }
  render.clearGallery();
  page = 1;
  loadPictures();
});

loadMore.addEventListener('click', async () => {
  page++;
  await loadPictures();
  const galleryItemHeight = document
    .querySelector('.gallery-item')
    .getBoundingClientRect().height;
  window.scrollBy({
    top: galleryItemHeight * 2,
    behavior: 'smooth',
  });
});
