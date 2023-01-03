import {GetStaticProps, NextPage} from "next";
import {IMovie} from "@/shared/types/movie.types";
import Catalog from "@/ui/catalog-movies/Catalog";
import {MovieService} from "@/services/movie.service";

interface IFreshProps {
}

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({movies}) => {
  return (
    <Catalog title='Trending movies'
             movies={movies || []}
             description='New movies and series in excellent quality: legal, safe, without ads'
    />
  );
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  try {
    const movies = await MovieService.getMostPopularMovies()
    return {
      props: {
        movies
      }
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}
export default TrendingPage