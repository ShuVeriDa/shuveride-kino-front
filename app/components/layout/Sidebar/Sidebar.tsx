import {FC} from 'react';

import styles from './Sidebar.module.scss'
import {Search} from "@/components/layout/Sidebar/Search/Search";
import {MoviesContainer} from "@/components/layout/Sidebar/Search/MoviesContainer/MoviesContainer";

interface SidebarPropsType {

}

export const Sidebar: FC<SidebarPropsType> = () => {
  return (
    <div className={styles.sidebar}>
      <Search />
     <MoviesContainer />
    </div>
  );
};