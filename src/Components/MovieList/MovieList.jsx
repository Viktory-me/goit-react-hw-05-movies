import PropTypes from "prop-types";

import MovieCard from "../MovieCard/MovieCard";
import s from "./MovieList.module.css";

function MovieList({ movies }) {
  return (
    <ul className={s.list}>
      {movies.map(
        ({
          id,
          title,
          original_name,
          poster_path,
          release_date,
          vote_average,
        }) => {
          return (
            <MovieCard
              key={id}
              id={id}
              title={title}
              original_name={original_name}
              poster_path={poster_path}
              release_date={release_date}
              vote_average={vote_average}
            />
          );
        }
      )}
    </ul>
  );
}

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
