import axios from 'axios';

const API_KEY = '4f58cb7827938d0b9a7356e8f717f1d8';
const API_BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMoviesByCategory = async (category) => {
  const response = await axios.get(`${API_BASE_URL}/movie/${category}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export const fetchMovieById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};
