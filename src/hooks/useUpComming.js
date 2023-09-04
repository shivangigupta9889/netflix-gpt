

import { useDispatch } from "react-redux";
import { addUpComming } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpComing=()=>{
    const dispatch=useDispatch();
    const getUpComming=async()=>{

        const data =await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS);
        const json=await data.json()

        dispatch(addUpComming(json.results))
    }
    useEffect(()=>{
        getUpComming();
    },[])
}

export default useUpComing;




