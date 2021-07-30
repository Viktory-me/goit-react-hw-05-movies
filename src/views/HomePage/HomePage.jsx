import { useState, useEffect } from "react";
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";
import { toast } from "react-toastify";
import { fetchPopularMoviesDay } from "../../Services/API";
import MovieList from "../../Components/MovieList/MovieList";

export default function MovieView() {
  const [movies, setMovies] = useState([]);
  const [pages, setPages] = useState(null);
  const [error, setError] = useState("");

  const location = useLocation();
  const history = useHistory();
  const { isExact } = useRouteMatch();

  let currentPage = Number(
    new URLSearchParams(location.search).get("page") || 1
  );

  useEffect(() => {
    if (!isExact) {
      history.push("/");
      toast.dark("🦄Page not found", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    async function getMovies() {
      try {
        const { results, total_pages } = await fetchPopularMoviesDay(
          currentPage
        );
        setMovies(results);
        setPages(total_pages);
      } catch (err) {
        setError(err.message);
      }
    }
    getMovies();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage, history, isExact]);

  return <MovieList movies={movies}></MovieList>;
}
