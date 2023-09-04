import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();
    // const [trailerId,setTrailerId]=useState(null)
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.lengh ? filterData[0] : json.results[0];

    
    dispatch(addTrailerVideo(trailer))

  };
  useEffect(() => {
    getMovieVideo();
  });

}
export default useMovieTrailer;