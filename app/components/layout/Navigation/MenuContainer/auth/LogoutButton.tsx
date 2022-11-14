import {FC, MouseEvent} from 'react';
import {useActions} from "@/hooks/useActions";
import {MaterialIcon} from "@/ui/MaterialIcon";

interface ILogoutButtonProps {
}

export const LogoutButton: FC<ILogoutButtonProps> = () => {

  const {logout} = useActions()

  const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    logout()
  }
  return <li>
    <a onClick={handleLogout}>
      <MaterialIcon name="MdLogout" />
      <span>Logout</span>
    </a>
    </li>

};