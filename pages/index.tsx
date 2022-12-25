
import {Home} from "@/screens/home/Home";
import {GetStaticProps, NextPage} from "next";
import {MovieService} from "@/services/movie.service";
import {ISlide} from "@/ui/slider/slider.interface";
import {getMovieUrl} from "@/config/url.config";
import {getGenresList} from "@/utils/movie/getGenresListEach";
import {IHome} from "@/screens/home/home.interface";
import {IGalleryItem} from "@/ui/gallery/gallery.interface";
import {ActorService} from "@/services/actor.service";
import {getActorsUrl} from "@/config/api.config";

const HomePage: NextPage<IHome> = ({slides, trendingMovies, actors}) => {
  return (
    <div>
      <Home slides={slides} actors={actors} trendingMovies={trendingMovies}/>
    </div>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  try {
    const {data: movies} = await MovieService.getAll()

    const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
      _id: m._id,
      link: getMovieUrl(m.slug),
      bigPoster: m.bigPoster,
      subTitle: getGenresList(m.genres),
      title: m.title,
    }))

    const {data: dataActors} = await ActorService.getAll()

    const actors:IGalleryItem[] = dataActors.slice(0,7).map(a => ({
      name: a.name,
      posterPath: a.photo,
      link: getActorsUrl(a.slug),
      content: {
        title: a.name,
        subTitle: `+${a.countMovies} movies`
      }
    }))

    const dataTrendingMovies = await MovieService.getMostPopularMovies()

    const trendingMovies: IGalleryItem[] = dataTrendingMovies.slice(0,7).map(m => ({
      name: m.title,
      posterPath: m.poster,
      link: getMovieUrl(m.slug)
    }))

    return {
      props: {
        slides,
        actors,
        trendingMovies
      } as IHome
    }
  } catch (error) {
    return {
      props: {
        slides: [],
        actors: [],
        trendingMovies: []
      }
    }
  }
}

export default HomePage
