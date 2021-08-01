import { useEffect, useState } from "react";
import {
  useParams,
  Redirect,
  Switch,
  Route,
  NavLink,
  useRouteMatch,
} from "react-router-dom";
import { toast } from "react-toastify";
import { fetchMoviesId } from "../../Services/API";
import { Loader } from "react-loader-spinner";
import s from "./MovieDetailsPage.module.css";
import noimage from "../../images/noimage.jpg";
import Cast from "../../Components/Cast/Cast";
import Reviews from "../../Components/Review/Review";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    async function getMovie() {
      try {
        await fetchMoviesId(Number(movieId)).then(setMovie);
        setStatus("resolved");
      } catch (err) {
        setStatus("rejected");

        toast.dark("🦄page not found", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
    getMovie();
  }, [movieId]);

  const poster =
    movie && movie.poster_path
      ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
      : noimage;

  return (
    <>
      {status === "pending" && (
        <Loader type='Bars' color='#00BFFF' height={80} width={80} />
      )}
      {status === "resolved" && (
        <>
          <div className={s.containerMovie}>
            <img
              className={s.posterMovie}
              src={poster}
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

              <p>
                <h3 className={s.infoDetails}>Raring:</h3>
                <span>{movie.vote_average}</span>
              </p>

              <p>
                <h3 className={s.infoDetails}>Genres:</h3>
                <span>
                  {movie.genres.map((genre) => genre.name).join(", ")}
                </span>
              </p>
              <p>
                <h3 className={s.infoDetails}>About:</h3>
                <span>{movie.overview}</span>
              </p>
            </div>
          </div>
        </>
      )}
      {status === "rejected" && <Redirect to='/' />}
      <Switch>
        <Route path={`${path}:movieId/cast`}>
          <Cast movieId={movieId} />
        </Route>

        <Route path={`${path}:movieId/reviews`}>
          <Reviews movieId={movieId} />
        </Route>
      </Switch>
    </>
  );
}
