import axios from "axios";
const Base_Url = "https://api.themoviedb.org/3";
const Api_Key = "febbe388fd385fbc8b7d8be3042ab312";

axios.defaults.baseURL = Base_Url;

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
