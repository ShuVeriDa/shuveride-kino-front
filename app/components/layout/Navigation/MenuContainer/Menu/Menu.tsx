import {FC} from 'react';
import {IMenu} from "@/components/layout/Navigation/MenuContainer/menu.interface";

import styles from '../Menu.module.scss'
import {MenuItem} from "@/components/layout/Navigation/MenuContainer/MenuItem/MenuItem";
import dynamic from "next/dynamic";

const DynamicAuthItems = dynamic(() => import('@/components/layout/Navigation/MenuContainer/auth/AuthItems'), {
  ssr: false
})

export const Menu: FC<{ menu: IMenu }> = ({menu: {items, title}}) => {
  return (
    <div className={styles.menu}>
      <div className={styles.heading}>{title}</div>
      <ul className={styles.ul}>
        {items.map(item => (
          <MenuItem item={item} key={item.link}/>
        ))}
        {title === 'General' ? <DynamicAuthItems />  : null}
      </ul>
    </div>
  );
};