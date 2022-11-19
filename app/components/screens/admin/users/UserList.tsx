import {FC} from 'react';
import {Meta} from "@/utils/meta/Meta";
import {AdminNavigation} from "@/ui/adminNavigation/AdminNavigation";
import {Heading} from "@/ui/heading/Heading";
import {AdminHeader} from "@/ui/adminTable/AdminHeader/AdminHeader";
import {useUsers} from "@/screens/admin/users/useUsers";
import {AdminTable} from "@/ui/adminTable/AdminTable/AdminTable";

interface IUserListProps {
}

export const UserList: FC<IUserListProps> = () => {

  const {isLoading, handleSearch, searchTerm, data, deleteAsync} = useUsers()
  return (
  <Meta title={'Users'}>
    <AdminNavigation />
    <Heading title={'Users'} />

    <AdminHeader handleSearch={handleSearch} searchTerm={searchTerm}  />
    <AdminTable isLoading={isLoading} removeHandler={deleteAsync} headerItems={['Email', 'Date register']} tableItems={data || []}/>

  </Meta>
  );
};