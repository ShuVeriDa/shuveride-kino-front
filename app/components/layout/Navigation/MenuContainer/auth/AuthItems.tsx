import {FC} from 'react';
import {useAuth} from "@/hooks/useAuth";
import {LogoutButton} from "@/components/layout/Navigation/MenuContainer/auth/LogoutButton";
import {MenuItem} from "@/components/layout/Navigation/MenuContainer/MenuItem/MenuItem";
import {getAdminHomeUrl} from "@/config/url.config";

interface AuthItemsPropsType {
}

export const AuthItems: FC<AuthItemsPropsType> = () => {
  const {user} = useAuth()
  return (
    <>
      {user
        ? <>
          <MenuItem item={{
            icon: 'MdSettings',
            link: '/profile',
            title: 'Profile'
          }}
          />
          <LogoutButton/>
        </>
        : <>
          <MenuItem item={{
            icon: 'MdLogin',
            link: '/auth',
            title: 'Login'
          }}/>
        </>
      }

      {user?.isAdmin && <MenuItem item={{
        icon: 'MdOutlineLock',
        link: getAdminHomeUrl(),
        title: 'Admin panel'
      }}/>
      }
    </>
  );
};