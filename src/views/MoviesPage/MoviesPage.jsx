import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import SearchForm from "../../Components/SearchForm/SearchForm";
import MovieSearch from "../../Components/MovieSearch/MovieSearch.jsx";

export default function MoviesPage() {
  const history = useHistory();
  const location = useLocation();
  const [movieName, setMovieName] = useState("");
  const [movies, setMovies] = useState([]);

  const queryURL = new URLSearchParams(location.search).get("query");

  const onQueryChange = (query) => {
    history.push({ ...location, search: `query=${query}` });
  };

  const onSubmit = (name) => {
    setMovieName(name);
    setMovies([]);
    onQueryChange(name);
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit}></SearchForm>
      <MovieSearch movieName={movieName} queryURL={queryURL} />
    </>
  );
}
