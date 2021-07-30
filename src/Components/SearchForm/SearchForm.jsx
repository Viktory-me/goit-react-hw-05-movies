import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import s from "./SearchForm.module.css";

function SearchForm({ onSubmit }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const moviesName = e.target.elements.movie.value;
    if (moviesName.trim() === "") {
      toast.dark("🦄Please enter search query", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      //   alert("Please enter search query");
      return;
    }

    onSubmit(moviesName);
  };

  return (
    <form className={s.SearchForm} onSubmit={handleSubmit}>
      <input
        className={s.SearchFormInput}
        type='text'
        autoComplete='off'
        autoFocus
        placeholder='what are you looking for'
        name='movie'
      />
      <button type='submit' className={s.SearchFormButton}></button>
    </form>
  );
}
export default SearchForm;
