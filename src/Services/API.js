import axios from "axios";
const Base_Url = "https://api.themoviedb.org/3";
const Api_Key = "febbe388fd385fbc8b7d8be3042ab312";
export const POSTER_URL = "https://image.tmdb.org/t/p/w500";

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

export async function fetchPopularMoviesDay(page) {
  const { data } = await axios.get(
    `/trending/movie/day?api_key=${Api_Key}&page=${page}`
  );
  return data;
}

export async function fetchMoviesId(movieId) {
  const { data } = await axios.get(
    `/movie/${movieId}?api_key=${Api_Key}&language=en-US&append_to_response=reviews,credits`
  );
  return data;
}

export async function fetchMoviesByName(name, page) {
  const { data } = await axios.get(
    `/search/movie?api_key=${Api_Key}&language=en-US&page=1&include_adult=false&query=${name}&page=${page}`
  );
  return data;
}
