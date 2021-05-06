import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      const title = location.state.title;
      const poster = location.state.poster;
      const year = location.state.year;
      const genres = location.state.genres;
      const summary = location.state.summary;
      return (
        <div className="movies">
          <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
              <h3 className="movie__title">{title}</h3>
              <h5 className="movie__year">{year}</h5>
              <ul className="movie__genres">
                {genres.map((genre, index) => (
                  <li key={index} className="genres__genre">
                    {genre}
                  </li>
                ))}
              </ul>
              <p className="movie__summary">{summary}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
export default Detail;
