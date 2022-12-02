import {NextPageAuth} from "@/shared/types/auth.types";
import {UserList} from "@/screens/admin/users/UserList";
import {GenreList} from "@/screens/admin/genres/GenreList";

interface IGenreListPageProps {
}

const GenreListPage: NextPageAuth<IGenreListPageProps> = () => {
  return (
   <GenreList />
  );
};

GenreListPage.isOnlyAdmin = true

export default GenreListPage