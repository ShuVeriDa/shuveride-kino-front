
import {Home} from "@/screens/home/Home";
import {GetStaticProps, NextPage} from "next";
import {MovieService} from "@/services/movie.service";
import {ISlide} from "@/ui/slider/slider.interface";
import {getMovieUrl} from "@/config/url.config";
import {getGenresList} from "@/utils/movie/getGenresListEach";
import {IHome} from "@/screens/home/home.interface";

const HomePage: NextPage<IHome> = ({slides}) => {
  return (
    <div>
      <Home slides={slides}/>
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

    return {
      props: {
        slides,
      } as IHome
    }
  } catch (error) {
    return {
      props: {
        slides: []
      }
    }
  }
}

export default HomePage
