import { createSlice } from "@reduxjs/toolkit";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        trailerVideo:null,
        topRated:null,
        upComming:null,
    },
    reducers:{

        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload
        },
        addUpComming:(state,action)=>{
            state.upComming=action.payload
        },
     
    },
});
export const{addNowPlayingMovies,addTrailerVideo,addPopularMovies,addUpComming,addTopRated}=moviesSlice.actions;
export default moviesSlice.reducer;