import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { fetchPopularMoviesDay } from "../../Services/API";

export default function MovieView() {
  const [movie, setMovie] = useState([]);
  const [pages, setPages] = useState(null);
  const [error, setError] = useState("");

  const location = useLocation();
  const history = useHistory();

  let page = Number(new URLSearchParams(location.search).get("page") ?? 1);

  useEffect(() => {
    async function getMovies() {
      try {
        const { newMovies, pages } = await fetchPopularMoviesDay(page);
        setMovie(newMovies);
        setPages(pages);
      } catch (err) {
        setError(err.message);
      }
    }
    getMovies();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);
}
