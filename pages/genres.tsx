import {GetStaticProps, NextPage} from "next";
import {ICollection} from "@/screens/collections/collections.interface";
import {Collections} from "@/screens/collections/Collections";
import {GenreService} from "@/services/genre.service";
import Error404 from "./404";

interface IGenresPageProps {
}

const GenresPage: NextPage<{ collections: ICollection[] }> = ({collections}) => {
  return (
    collections ? <Collections collections={collections || []}/> : <Error404 />
  );
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  try {
    const {data: collections} = await GenreService.getCollections()
    return {
      props: {
        collections
      }
    }
  } catch (error) {
    return {
      notFound: true
    }
  }
}
export default GenresPage