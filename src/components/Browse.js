import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";


const Browse = () => {
  // custom hook call
  useNowPlayingMovies(); 

  return (
    <div> 
      <Header />
      <MainContainer/>

      {/*<MainContainer />
      <SecondaryContainer />
      {/**
       * - Main Container
       *    - Video background
       *    - Video title name and description 
       * - Secondary Container 
       *    - MovieList * N
       *       - MovieCard * N
       */}
    </div>
  );
};

export default Browse;
