
const VideoTitle=({title,overview})=>{
    return(
        <div className=" w-screen aspect-video pt-[20%] px-6 md:p-24 absolute text-white bg-gradient-to-r  from-black">
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="py-6 text-lg w-1/4">{overview}</p>
          <div>
            <button className="bg-white text-black p-4 px-12 rounded-lg hover:bg-opacity-50">▶Play </button>
            <button className="bg-gray-500 text-xl text-white  p-4 px-12 mx-2 rounded-lg bg-opacity-50">More Info</button>
          </div>
        </div>
    );
}
export default VideoTitle;