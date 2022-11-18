import {NextPage} from "next";
import {NextPageAuth} from "@/shared/types/auth.types";
import {Admin} from "@/screens/admin/Admin";

interface IAdminPageProps {
}

const AdminPage: NextPageAuth<IAdminPageProps> = () => {
  return (
    <div>
      <Admin />
    </div>
  );
};

AdminPage.isOnlyAdmin = true

export default AdminPage