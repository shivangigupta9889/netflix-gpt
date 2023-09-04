import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-6">
    <h1 className="  text-3xl  text-white  m-6">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies ? (
            movies.map(movie => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p>No movies available</p>
          )}
        </div>
      </div>
    </div>
  );
  
}
export default MovieList;
