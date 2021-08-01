import { useState, useEffect } from "react";

import { toast } from "react-toastify";
import Loader from "react-loader-spinner";
import { fetchTrendingMovies } from "../../Services/API";
import MovieList from "../../Components/MovieList/MovieList";

const Status = {
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function MovieView() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [status, setStatus] = useState(Status.PENDING);

  useEffect(() => {
    setStatus(Status.PENDING);
    fetchTrendingMovies()
      .then((request) => setMovies(request.results))
      .then(setStatus(Status.RESOLVED))
      .catch((err) => {
        console.log(error);
        setError(Status.REJECTED);
      });
  }, [error]);

  if (status === Status.PENDING) {
    return <Loader />;
  }

  if (status === Status.REJECTED) {
    return toast.dark("🦄Page not found", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <MovieList movies={movies}></MovieList>
      </>
    );
  }
}
