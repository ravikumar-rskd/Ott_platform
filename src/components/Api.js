import axios from 'axios';

const API_KEY = '44254341e325061e0a755186a7c61b71';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (genreId = null) => {
  const genreQuery = genreId ? `&with_genres=${genreId}` : '';
  console.log(`Fetching movies with genre: ${genreId}`); // Debugging message
  const response = await axios.get(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}${genreQuery}`
  );
  console.log("API Response:", response.data.results); // Debugging message
  return response.data.results;
};
  
export const fetchMovieDetails = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
  );
  return response.data;
};