import Error404 from "../404";
import {GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage} from "next";
import {ActorService} from "@/services/actor.service";
import {MovieService} from "@/services/movie.service";
import {IActor, IMovie} from "@/shared/types/movie.types";
import Catalog from "@/ui/catalog-movies/Catalog";

interface IActorPageProps {
  movies: IMovie[]
  actor: IActor | undefined
}

const ActorPage: NextPage<IActorPageProps> = ({movies, actor}) => {
  return (
    actor
      ? <Catalog title={actor.name}
                 movies={movies || []}
      />
      :
      <Error404/>
  );
};


export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: actors } = await ActorService.getAll()
    const paths = actors.map((g) => ({
      params: { slug: g.slug },
    }))

    return {
      paths,
      fallback: 'blocking',
    }
  } catch (e) {
    // console.log(errorCatch(e))

    return {
      paths: [],
      fallback: false,
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data: actor } = await ActorService.getBySlug(String(params?.slug))

    const { data: movies } = await MovieService.getByActor(actor._id)

    return {
      props: { movies, actor },
    }
  } catch (e) {
    // console.log(errorCatch(e))

    return {
      notFound: true,
    }
  }
}
export default ActorPage