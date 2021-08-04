import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { fetchMoviesByName } from "../../Services/API";
import { GoBackBtn } from "../GoBackBtn/GoBackBtn";
import Spinner from "../Loader/Loader";
import MovieList from "../MovieList/MovieList";

const Status = {
  IDLE: "idle",
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function FilmsStatus({ movieName, queryURL }) {
  const [error] = useState({});
  const [status, setStatus] = useState(Status.IDLE);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = (name) => {
      fetchMoviesByName(name)
        .then((newMovie) => {
          if (newMovie.total_results === 0) {
            toast.dark("🦄Incorrect!", {
              position: "top-center",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          }
          if (newMovie.total_results > 0) {
            setMovies(newMovie.results);
            setStatus(Status.RESOLVED);
          }
        })
        .catch((err) => {
          console.log(error);
        });
    };

    if (movieName === "" && queryURL !== null) {
      fetchMovies(queryURL);
      return;
    }
    if (movieName) {
      fetchMovies(movieName);
    }
  }, [movieName, error, queryURL]);

  if (status === Status.IDLE) {
    return " ";
  }

  if (status === Status.PENDING) {
    return <Spinner></Spinner>;
  }

  if (status === Status.REJECTED) {
    return toast.dark("🦄Page not found", {
      position: "top-center",
      autoClose: 3200,
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
        <GoBackBtn></GoBackBtn>
        <MovieList movies={movies} />
      </>
    );
  }
}
