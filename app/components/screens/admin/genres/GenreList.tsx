import {FC} from 'react';
import {Meta} from "@/utils/meta/Meta";
import {AdminNavigation} from "@/ui/adminNavigation/AdminNavigation";
import {Heading} from "@/ui/heading/Heading";
import {AdminHeader} from "@/ui/adminTable/AdminHeader/AdminHeader";

import {AdminTable} from "@/ui/adminTable/AdminTable/AdminTable";
import {useGenres} from "@/screens/admin/genres/useGenres";

interface IGenreListProps {
}

export const GenreList: FC<IGenreListProps> = () => {

  const {isLoading, handleSearch, searchTerm, data, deleteAsync, createAsync} = useGenres()
  return (
  <Meta title={'Genres'}>
    <AdminNavigation />
    <Heading title={'Genres'} />

    <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm}  onClick={createAsync}/>
    <AdminTable isLoading={isLoading} removeHandler={deleteAsync} headerItems={['Name', 'Slug']} tableItems={data || []}/>

  </Meta>
  );
};