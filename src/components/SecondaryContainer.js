import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer=()=>{
    const movies=useSelector((store)=>store.movies)
    return(
        movies.nowPlayingMovies &&(
    <div className="bg-black">
        <div className="-mt-52 z-20 pl-14 relative">
        <MovieList  title={"Now Playing"}  movies={movies.nowPlayingMovies}   />
        <MovieList  title={"Top Rated "}  movies={movies.topRated}   />
        <MovieList  title={"UpComming "}  movies={movies.upComming}   />
        <MovieList  title={"Horror "}  movies={movies.nowPlayingMovies}   />
        <MovieList  title={"Popular"}  movies={movies.popularMovies}   />
        </div>
    </div>
        )
    )
}
export default SecondaryContainer;