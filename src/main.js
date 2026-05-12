import * as api from './js/pixabay-api';
import * as render from './js/render-functions';

const searchForm = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more');

let searchInputValue = '';
const per_page = 15;
let page = 1;

const loadPictures = async () => {
  try {
    render.showLoader();
    render.hideLoadMoreButton();

    const data = await api.searchImage(searchInputValue, page, per_page);

    if (!data.hits.length) {
      render.showError(
        'Sorry, there are no images matching your search query. Please, try again!'
      );
      return;
    }

    render.showGallery(data.hits);

    const totalPages = Math.ceil(data.totalHits / per_page);

    if (page < totalPages) {
      render.showLoadMoreButton();
    } else {
      render.showMessage(
        "We're sorry, but you've reached the end of search results."
      );
    }
  } catch (error) {
    render.showError('Something went wrong. Please try again later.');
  } finally {
    render.hideLoader();
  }
};

//  SUBMIT (правильний порядок)
searchForm.addEventListener('submit', async event => {
  event.preventDefault();

  searchInputValue = event.target.elements.input.value.trim();

  if (!searchInputValue) {
    return render.showError('Please fill out this field');
  }

  render.clearGallery();

  page = 1;

  await loadPictures();
});

//  LOAD MORE
loadMoreBtn.addEventListener('click', async () => {
  page++;

  await loadPictures();

  const item = document.querySelector('.gallery-item');

  if (!item) return;

  const height = item.getBoundingClientRect().height;

  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
});
