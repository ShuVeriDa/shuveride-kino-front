import {NextPageAuth} from "@/shared/types/auth.types";
import {ActorEdit} from "@/screens/admin/actor/ActorEdit";

interface IActorEditPageProps {}

const ActorEditPage: NextPageAuth<IActorEditPageProps> = () => {
  return (
    <ActorEdit />
  );
};

ActorEditPage.isOnlyAdmin = true
  export default ActorEditPage