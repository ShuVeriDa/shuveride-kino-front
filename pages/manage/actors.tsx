import {NextPageAuth} from "@/shared/types/auth.types";
import {UserList} from "@/screens/admin/users/UserList";
import {ActorList} from "@/screens/admin/actors/ActorList";

interface IActorListPageProps {
}

const ActorListPage: NextPageAuth<IActorListPageProps> = () => {
  return (
   <ActorList />
  );
};

ActorListPage.isOnlyAdmin = true

export default ActorListPage