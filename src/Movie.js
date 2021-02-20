import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { getRoles } from "@testing-library/react";
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <div className="movie_poster">
        <img src={poster} alt={title} title={title}></img>
      </div>
      <div className="movie_data">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres">
          {genres.map((genres, index) => (
            <li key={index}>{genres}</li>
          ))}
        </ul>
        <p className="movie_summary">{summary.slice(0, 140)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Movie;
