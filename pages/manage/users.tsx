import {NextPage} from "next";
import {NextPageAuth} from "@/shared/types/auth.types";
import {UserList} from "@/screens/admin/users/UserList";

interface IUserListPageProps {
}

const UserListPage: NextPageAuth<IUserListPageProps> = () => {
  return (
   <UserList />
  );
};

UserListPage.isOnlyAdmin = true

export default UserListPage