import {FC} from 'react';

import styles from './AdminNavigation.module.scss';
import {AdminNavItem} from "@/ui/adminNavigation/AdminNavItem";
import {navItems} from "@/ui/adminNavigation/admin-navigation.data";

interface IAdminNavigationProps {
}

export const AdminNavigation: FC<IAdminNavigationProps> = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        {navItems.map(item => <AdminNavItem item={item} key={item.link}/>)}
      </ul>
    </nav>
  );
};