import {NextPageAuth} from "@/shared/types/auth.types";
import {MovieEdit} from "@/screens/admin/movie/MovieEdit";

interface IMovieEditPageProps {}

const MovieEditPage: NextPageAuth<IMovieEditPageProps> = () => {
  return (
    <MovieEdit />
  );
};

MovieEditPage.isOnlyAdmin = true
  export default MovieEditPage