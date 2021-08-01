import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { fetchMovieReviews } from "../../Services/API";
import s from "./Review.module.css";

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchMovieReviews(movieId).then((request) => setReviews(request.results));
  }, [movieId]);

  return (
    <div className={s.wrapper}>
      {reviews.length > 0 ? (
        <>
          <ul className={s.list}>
            <h3 className={s.titleName}>Reviews</h3>
            {reviews.map((item, index) => (
              <li key={index} className={s.item}>
                <p className={s.title}> {item.author}:</p>
                <p className={s.text}>" {item.content}"</p>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <p className={s.text}>No reviews to show</p>
      )}
    </div>
  );
}

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};
