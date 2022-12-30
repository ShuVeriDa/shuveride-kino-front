import Error404 from "../404";
import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {MovieService} from "@/services/movie.service";
import {IMovie} from "@/shared/types/movie.types";
import {IGalleryItem} from "@/ui/gallery/gallery.interface";
import {getMovieUrl} from "@/config/url.config";
import SingleMovie from "@/screens/single-movie/SingleMovie";

export interface IMoviePageProps {
  similarMovies: IGalleryItem[]
  movie: IMovie
}

const MoviePage: NextPage<IMoviePageProps> = ({movie, similarMovies}) => {
  return (
    movie ? <SingleMovie similarMovies={similarMovies || []} movie={movie}/> : <Error404/>
  );
};


export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const {data: movies} = await MovieService.getAll()
    const paths = movies.map((g) => ({
      params: {slug: g.slug},
    }))

    return {
      paths,
      fallback: 'blocking',
    }
  } catch (error) {
    return {
      paths: [],
      fallback: false,
    }
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  try {
    const {data: movie} = await MovieService.getBySlug(String(params?.slug))

    const {data: dataSimilarMovies} = await MovieService.getByGenres(movie.genres.map(g => g._id))

    const similarMovies: IGalleryItem[] = dataSimilarMovies.filter(m => m._id !== movie._id).map((m) => ({
      name: m.title,
      posterPath: m.poster,
      link: getMovieUrl(m.slug)
    }))

    return {
      props: {similarMovies, movie},
    }
  } catch (e) {
    // console.log(errorCatch(e))

    return {
      notFound: true,
    }
  }
}
export default MoviePage