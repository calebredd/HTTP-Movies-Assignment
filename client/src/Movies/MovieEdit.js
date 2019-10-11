import React from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
export default class MovieEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null
    };
  }
  componentDidMount() {
    this.fetchMovie(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchMovie(newProps.match.params.id);
    }
  }
  updateMovie = e => {
    e.preventDefault();
    // console.log(
    //   e.target.title.value ? e.target.title.value : this.state.movie.title
    // );
    // console.log(
    // e.target.director.value
    //   ? e.target.director.value
    //   : this.state.movie.director
    // );
    // console.log(
    //   metascore:e.target.metascore.value
    //     ? e.target.metascore.value
    //     : this.state.movie.metascore
    // );
    const movie = {
      ...this.state.movie,
      title: e.target.title.value
        ? e.target.title.value
        : this.state.movie.title,
      director: e.target.director.value
        ? e.target.director.value
        : this.state.movie.director,
      metascore: e.target.metascore.value
        ? e.target.metascore.value
        : this.state.movie.metascore,
      stars: e.target.stars.value
        ? e.target.stars.value.split(",")
        : this.state.movie.stars
    };
    // console.log(movie);
    axios
      .put(`http://localhost:5000/api/movies/${this.state.movie.id}`, movie)
      .then(res => {
        // this.setState({ movie: res.data });
        // console.log(res.data);
        this.props.history.push("/");
      })
      .catch(err => console.log(err.response));
  };

  fetchMovie = id => {
    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(res => this.setState({ movie: res.data }))
      .catch(err => console.log(err.response));
  };

  render() {
    // console.log(this.state.movie);
    if (!this.state.movie) {
      return <div>Loading movie information...</div>;
    }

    return (
      <div className="save-wrapper">
        {/* <MovieCard movie={this.state.movie} /> */}
        <div className="updateMovie">
          <form onSubmit={e => this.updateMovie(e)}>
            <input
              type="text"
              name="title"
              placeholder={this.state.movie.title}
            />
            <input
              type="text"
              name="director"
              placeholder={this.state.movie.director}
            />
            <input
              type="text"
              name="metascore"
              placeholder={this.state.movie.metascore}
            />
            <textarea
              cols="50"
              rows="2"
              name="stars"
              placeholder={this.state.movie.stars}
            />
            <button className="submit" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    );
  }
}
