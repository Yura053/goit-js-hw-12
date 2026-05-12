import axios from 'axios';

const API_KEY = '55836567-c9271527a299f964d26049cdd';

export const searchImage = async (query, page, per_page) => {
  const safePerPage = Math.max(per_page, 15);

  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: API_KEY,
      q: query,
      page,
      per_page: safePerPage,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
};
