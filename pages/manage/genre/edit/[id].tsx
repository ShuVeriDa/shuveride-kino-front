import {NextPageAuth} from "@/shared/types/auth.types";
import {GenreEdit} from "@/screens/admin/genre/GenreEdit";

interface IGenreEditPageProps {}

const GenreEditPage: NextPageAuth<IGenreEditPageProps> = () => {
  return (
    <GenreEdit />
  );
};

GenreEditPage.isOnlyAdmin = true
  export default GenreEditPage