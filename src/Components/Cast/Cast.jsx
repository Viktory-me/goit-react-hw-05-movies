import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchMovieCast, POSTER_URL } from "../../Services/API";
import s from "./Cast.module.css";

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCast(movieId).then((request) => setCast(request.cast));
  }, [movieId]);

  return (
    <>
      {cast && (
        <>
          <ul className={s.list}>
            {cast.map((item, id) => (
              <>
                {item.profile_path && (
                  <li key={id} className={s.item}>
                    <img
                      className={s.image}
                      src={POSTER_URL + item.profile_path}
                      alt={item.name}
                      width='190'
                    />
                    <div className={s.wrapper}>
                      <h3> {item.name}</h3>
                      <h4>{item.character}</h4>
                    </div>
                  </li>
                )}
              </>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};
