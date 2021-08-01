import axios from "axios";
const Base_Url = "https://api.themoviedb.org/3";
const Api_Key = "febbe388fd385fbc8b7d8be3042ab312";
export const POSTER_URL = "https://image.tmdb.org/t/p/w500";
const TREND_URL = `${Base_Url}/trending/movie/day?api_key=${Api_Key}`;

axios.defaults.baseURL = Base_Url;

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchMovieCast(id) {
  return fetchWithErrorHandling(
    `${Base_Url}/movie/${id}/credits?api_key=${Api_Key}&language=en-US`
  );
}
export function fetchTrendingMovies() {
  return fetchWithErrorHandling(TREND_URL);
}

export function fetchMoviesByName(name) {
  return fetchWithErrorHandling(
    `${Base_Url}/search/movie?api_key=${Api_Key}&query=${name}&language=en-US&page=1&include_adult=false`
  );
}

export function fetchMovieDetails(id) {
  return fetchWithErrorHandling(
    `${Base_Url}/movie/${id}?api_key=${Api_Key}&language=en-US`
  );
}

export function fetchMovieReviews(id) {
  return fetchWithErrorHandling(
    `${Base_Url}/movie/${id}/reviews?api_key=${Api_Key}&language=en-US`
  );
}
