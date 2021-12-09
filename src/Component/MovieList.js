import Movie from "./Movie.js";
const MovieList = ({ movies, inputT, value }) => {
  return (
    <div>
      <div className="movie">
        {movies
          .filter(
            (movie) =>
              movie.title.toUpperCase().includes(inputT.toUpperCase()) &&
              movie.rating >= value
          )
          .map((card, i) => (
            <Movie cardMovie={card} key={i} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
