import {NextPage} from "next";
import {NextPageAuth} from "@/shared/types/auth.types";

interface IAdminPageProps {
}

const AdminPage: NextPageAuth<IAdminPageProps> = () => {
  return (
    <div>
      Admin Page
    </div>
  );
};

AdminPage.isOnlyAdmin = true

export default AdminPage