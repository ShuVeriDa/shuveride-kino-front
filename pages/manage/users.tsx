import {NextPage} from "next";
import {NextPageAuth} from "@/shared/types/auth.types";

interface IUserListPageProps {
}

const UserListPage: NextPageAuth<IUserListPageProps> = () => {
  return (
    <div>
      User List Page
    </div>
  );
};

UserListPage.isOnlyAdmin = true

export default UserListPage