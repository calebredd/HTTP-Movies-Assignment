import React from "react";
import axios from "axios";
export default class MovieAdd extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   movie: { id: "", title: "", director: "", metascore: "", stars: [] }
    // };
  }
  // componentDidMount() {
  //   this.fetchMovie(this.props.match.params.id);
  // }

  // componentWillReceiveProps(newProps) {
  //   if (this.props.match.params.id !== newProps.match.params.id) {
  //     this.fetchMovie(newProps.match.params.id);
  //   }
  // }
  updateMovie = e => {
    e.preventDefault();
    // console.log(e.target.title.value);
    // console.log(e.target.director.value);
    // console.log(e.target.metascore.value);
    const movie = {
      // id: Date.now(),
      title: e.target.title.value,
      director: e.target.director.value,
      metascore: e.target.metascore.value,
      stars: e.target.stars.value.split(",")
    };
    console.log(movie);
    axios
      .post(`http://localhost:5000/api/movies/`, movie)
      .then(res => {
        // console.log(res.data);
        this.props.history.push("/");
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div className="save-wrapper">
        <div className="updateMovie">
          <form onSubmit={e => this.updateMovie(e)}>
            <input type="text" name="title" placeholder="Title" />
            <input type="text" name="director" placeholder="Director" />
            <input
              type="text"
              name="metascore"
              placeholder="Rating out of 100"
            />
            <textarea cols="50" rows="2" name="stars" placeholder="Stars" />
            <button className="submit" type="submit">
              Add Movie
            </button>
          </form>
        </div>
      </div>
    );
  }
}
