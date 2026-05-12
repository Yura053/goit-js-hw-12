import axios from 'axios';

export const searchImage = async (query, page, per_page) => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: 'YOUR_API_KEY',
      q: query,
      page,
      per_page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
};
