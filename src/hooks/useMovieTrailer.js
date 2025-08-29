import { useEffect, useState } from "react";
import { Api_options } from "../utils/constant";

const useMovieTrailer = (movieId) => {
  const [trailerKey, setTrailerKey] = useState(null);

  const getMovieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        Api_options
      );
      const json = await data.json();
      console.log(json);

      // Filter only Trailer type from YouTube
      const trailers = json.results.filter(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );

      if (trailers.length > 0) {
        setTrailerKey(trailers[0].key);
      }
    } catch (error) {
      console.error("Error fetching movie videos:", error);
    }
  };

  useEffect(() => {
    if (movieId) getMovieVideos();
  }, [movieId]);

  return trailerKey;
};

export default useMovieTrailer;
