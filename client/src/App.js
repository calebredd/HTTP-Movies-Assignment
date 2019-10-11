import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import MovieEdit from "./Movies/MovieEdit";
import MovieAdd from "./Movies/MovieAdd";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div className="App">
      <SavedList list={savedList} />
      {/* <Link to="/movies/add" className="addLink">
        <button className="addMovie">Add Movie</button>
      </Link> */}
      <Route exact path="/" component={MovieList} />
      <Route
        exact
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route
        path="/movies/:id/edit"
        render={props => {
          return <MovieEdit {...props} />;
        }}
      />
      <Route
        path="/movies/add"
        render={props => {
          return <MovieAdd {...props} />;
        }}
      />
    </div>
  );
};

export default App;
