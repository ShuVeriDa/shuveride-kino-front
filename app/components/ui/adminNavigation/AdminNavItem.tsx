import {FC} from 'react';
import {INavItem} from "@/ui/adminNavigation/admin-navigation.interface";
import {useRouter} from "next/router";
import Link from "next/link";
import cn from "classnames";

import styles from './AdminNavigation.module.scss';

interface IAdminNavItemProps {
}

export const AdminNavItem: FC<IAdminNavItemProps & { item: INavItem }> = ({item: {title, link}}) => {
  const {asPath} = useRouter()

  return (
    <li>
      <Link href={link} className={cn({[styles.active]: asPath === link})}>
        {title}
      </Link>
    </li>
  );
};