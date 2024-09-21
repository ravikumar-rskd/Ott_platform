import axios from 'axios';

   const API_KEY = {APIKEY};
   const BASE_URL = 'https://api.themoviedb.org/3';

   export const fetchMovies = async () => {
     const response = await axios.get(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
     return response.data.results;
   };

   export const fetchMovieDetails = async (id) => {
     const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
     return response.data;
   };
