import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  // custom hook ka return value
  const trailerKey = useMovieTrailer(movieId);

  return (
    <div className="w-full h-[80vh] relative overflow-hidden">
      {trailerKey ? (
        <iframe
          className="w-full h-full absolute top-0 left-0"
          src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerKey}`}
          title="Movie Trailer"
          allow="autoplay; encrypted-media"
        ></iframe>
      ) : (
        <p className="text-white">Loading trailer...</p>
      )}
    </div>
  );
};

export default VideoBackground;
