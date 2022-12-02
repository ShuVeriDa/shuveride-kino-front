import {NextPageAuth} from "@/shared/types/auth.types";
import {UserList} from "@/screens/admin/users/UserList";
import {MovieList} from "@/screens/admin/movies/MovieList";

interface IMovieListPageProps {
}

const MovieListPage: NextPageAuth<IMovieListPageProps> = () => {
  return (
   <MovieList />
  );
};

MovieListPage.isOnlyAdmin = true

export default MovieListPage