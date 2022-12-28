import {GetStaticPaths, GetStaticProps, NextPage} from "next";
import {IGenre, IMovie} from "@/shared/types/movie.types";
import {Catalog} from "@/ui/catalog-movies/Catalog";

import Error404 from "../404";
import {MovieService} from "@/services/movie.service";
import {GenreService} from "@/services/genre.service";
import slug from "../actor/[slug]";

interface IGenrePageProps {
  movies: IMovie[]
  genre: IGenre | undefined
}

const GenrePage: NextPage<IGenrePageProps> = ({movies, genre}) => {
  return (
    genre
      ? <Catalog title={genre.name}
                 movies={movies || []}
                 description={genre.description}
      />
      :
      <Error404/>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: genres } = await GenreService.getAll()
    const paths = genres.map((g) => ({
      params: { slug: g.slug },
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
    const { data: genre } = await GenreService.getBySlug(String(params?.slug))

    const { data: movies } = await MovieService.getByGenres([genre._id])

    return {
      props: { movies, genre },
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}
export default GenrePage