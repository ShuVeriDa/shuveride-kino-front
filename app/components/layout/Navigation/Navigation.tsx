import {FC} from 'react';

import styles from './Navigation.module.scss'
import {MenuContainer} from "@/components/layout/Navigation/MenuContainer/MenuContainer";
import {Logo} from "@/components/layout/Navigation/Logo";

interface NavigationPropsType {
}

export const Navigation: FC<NavigationPropsType> = () => {
  return (
    <div className={styles.navigation}>
      <Logo />
      <MenuContainer />
    </div>
  );
};