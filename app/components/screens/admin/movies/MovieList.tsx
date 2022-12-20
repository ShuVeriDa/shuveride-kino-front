import {FC} from 'react';
import {Meta} from "@/utils/meta/Meta";
import {AdminNavigation} from "@/ui/adminNavigation/AdminNavigation";
import {Heading} from "@/ui/heading/Heading";
import {AdminHeader} from "@/ui/adminTable/AdminHeader/AdminHeader";

import {AdminTable} from "@/ui/adminTable/AdminTable/AdminTable";
import {useMovies} from "@/screens/admin/movies/useMovies";

interface IUserListProps {
}

export const MovieList: FC<IUserListProps> = () => {

  const {isLoading, handleSearch, searchTerm, data, deleteAsync, createAsync} = useMovies()

  return (
  <Meta title={'Movies'}>
    <AdminNavigation />
    <Heading title={'Movies'} />

    <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} onClick={createAsync} />
    <AdminTable isLoading={isLoading} removeHandler={deleteAsync} headerItems={['Title', 'Genre', 'Rating']} tableItems={data || []}/>

  </Meta>
  );
};