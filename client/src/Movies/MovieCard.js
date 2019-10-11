import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const MovieCard = props => {
  const { title, director, metascore, stars, id } = props.movie;
  const remove = () => {
    axios
      .delete(`http://localhost:5000/api/movies/${id}`)
      .then(res => {
        // console.log(res.data);
        window.location.reload();
      })
      .catch(err => {
        console.error(err);
      });
  };
  return (
    <div className="movie-card">
      <Link to={`/movies/${id}`}>
        <div className="movieInfo">
          {" "}
          <div className="movie-director">
            <h2>{title}</h2>
            <p>
              {" "}
              Director: <em>{director}</em>
            </p>
          </div>
          <div className="actors">
            <h3>Actors</h3>
            <div className="actorsList">
              {stars
                ? stars.map(star => (
                    <div key={star} className="movie-star">
                      {star}
                    </div>
                  ))
                : "Starring No One"}
            </div>
          </div>
          <div className="movie-metascore">
            Metascore: <strong>{metascore}</strong>
          </div>
        </div>
      </Link>
      <div className="buttons">
        <Link to={`/movies/${id}/edit`}>
          <button className="edit">Edit</button>
        </Link>
        <button className="delete" onClick={() => remove()}>
          X
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
