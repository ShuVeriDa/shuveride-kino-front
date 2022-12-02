import {FC} from 'react';
import {Meta} from "@/utils/meta/Meta";
import {AdminNavigation} from "@/ui/adminNavigation/AdminNavigation";
import {Heading} from "@/ui/heading/Heading";
import {AdminHeader} from "@/ui/adminTable/AdminHeader/AdminHeader";
import {AdminTable} from "@/ui/adminTable/AdminTable/AdminTable";
import {useActors} from "@/screens/admin/actors/useActors";

interface IActorListProps {
}

export const ActorList: FC<IActorListProps> = () => {

  const {isLoading, handleSearch, searchTerm, data, deleteAsync} = useActors()
  return (
  <Meta title={'Actors'}>
    <AdminNavigation />
    <Heading title={'Actors'} />

    <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm}  />
    <AdminTable isLoading={isLoading} removeHandler={deleteAsync} headerItems={['Name', 'Count movies']} tableItems={data || []}/>

  </Meta>
  );
};