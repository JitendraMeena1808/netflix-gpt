import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  // movies ke andar ab directly array milega
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return <h1 className="text-white">Loading...</h1>;

  const mainMovie = movies[0];
  console.log("Main Movie:", mainMovie);

  return (
    <div className="relative w-full h-screen">
      <VideoBackground movieId={mainMovie.id} />
      <VideoTitle title={mainMovie?.title} overview={mainMovie?.overview} />
    </div>
  );
};

export default MainContainer;
