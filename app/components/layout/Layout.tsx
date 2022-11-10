import {FC} from 'react';

import styles from './Layout.module.scss'
import {Navigation} from "@/components/layout/Navigation/Navigation";
import {Sidebar} from "@/components/layout/Sidebar/Sidebar";

interface LayoutPropsType {
  children: any
}

export const Layout: FC<LayoutPropsType> = ({children}) => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <div className={styles.center}>{children}</div>
      <Sidebar />
    </div>
  );
};