import {NextPageAuth} from "@/shared/types/auth.types";

interface IProfilePageProps {
}

const ProfilePage: NextPageAuth = () => {
  return (
    <div>
      Profile
    </div>
  );
};

ProfilePage.isOnlyUser = true

export default ProfilePage