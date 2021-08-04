import { lazy, Suspense } from "react";
import { useEffect, useState } from "react";
import {
  useParams,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import { toast } from "react-toastify";
import { fetchMovieDetails, POSTER_URL } from "../../Services/API";
import s from "./MovieDetailsPage.module.css";
import Spinner from "../../Components/Loader/Loader";
import { GoBackBtn } from "../../Components/GoBackBtn/GoBackBtn";

const Cast = lazy(() => import("../Cast/Cast" /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import("../Review/Review" /* webpackChunkName: "Review" */)
);
const Status = {
  PENDING: "pending",
  RESOLVED: "resolved",
  REJECTED: "rejected",
};

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState(Status.PENDING);
  const [error, setError] = useState("");

  useEffect(() => {
    setStatus(Status.PENDING);
    fetchMovieDetails(movieId)
      .then(setMovie)
      .then(setStatus(Status.RESOLVED))
      .catch((err) => {
        console.log(error);
        setError(Status.REJECTED);
      });
  }, [movieId, error]);

  if (status === Status.PENDING) {
    return <Spinner></Spinner>;
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
        <GoBackBtn></GoBackBtn>
        <div className={s.containerMovie}>
          <img
            className={s.posterMovie}
            src={POSTER_URL + movie.poster_path}
            alt={movie.original_title}
          />
          <div className={s.aboutInfo}>
            <nav className={s.nav}>
              <NavLink
                to={`${url}/cast`}
                className={s.link}
                activeClassName={s.activeLink}
              >
                Cast
              </NavLink>
              <NavLink
                to={`${url}/reviews`}
                className={s.link}
                activeClassName={s.activeLink}
              >
                Reviews
              </NavLink>
            </nav>
            <h2 className={s.titleMovie}>{movie.original_title}</h2>

            <div>
              <h3 className={s.infoDetails}>Raring:</h3>
              <span>{movie.vote_average}</span>
            </div>
            {movie.genres && (
              <>
                <p className={s.infoDetails}>Genres:</p>
                <ul className={s.list}>
                  {movie.genres.map((item, index) => (
                    <li key={index} className={s.item}>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </>
            )}

            <div>
              <h3 className={s.infoDetails}>About:</h3>
              <span>{movie.overview}</span>
            </div>
          </div>
        </div>
        <Suspense fallback={<Spinner></Spinner>}>
          <Switch>
            <Route path={`${path}:movieId/cast`}>
              <Cast movieId={movieId} />
            </Route>

            <Route path={`${path}:movieId/reviews`}>
              <Reviews movieId={movieId} />
            </Route>
          </Switch>
        </Suspense>
      </>
    );
  }
}
