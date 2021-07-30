import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import SearchForm from "../../Components/SearchForm/SearchForm";
import { fetchMoviesByName } from "../../Services/API";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(0);
  const [error, setError] = useState("");

  const history = useHistory();
  const location = useLocation();

  //   useEffect(() => {
  //     fetchMoviesByName;
  //   });
  return (
    <>
      <SearchForm></SearchForm>
    </>
  );
}
