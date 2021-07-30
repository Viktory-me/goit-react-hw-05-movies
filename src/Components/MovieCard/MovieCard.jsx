import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import noimage from "../../images/noimage.jpg";
import s from "./MovieCard.module.css";

function MovieCard({
  id,
  title,
  original_name,
  poster_path,
  release_date,
  vote_average,
}) {
  const location = useLocation();
  return (
    <li className={s.movieCard}>
      <Link
        className={s.linkMovie}
        to={{
          pathname: `/movies/${id}`,
          state: { from: location },
        }}
      >
        <img
          className={s.image}
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : noimage
          }
          alt={"about movie"}
        />
        <div className={s.fullInfo}>
          <span className={s.infoMovie}>
            {title ? title : original_name} |{" "}
            {release_date ? parseInt(release_date) : ""}
          </span>

          <span className={s.infoMovie}>{vote_average}</span>
        </div>
      </Link>
    </li>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  original_name: PropTypes.string,
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
};

export default MovieCard;
