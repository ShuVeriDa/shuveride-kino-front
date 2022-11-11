import {FC} from 'react';
import {useRouter} from "next/router";
import cn from 'classnames'
import Link from "next/link";

import styles from '../Menu.module.scss'
import {IMenuItem} from "@/components/layout/Navigation/MenuContainer/menu.interface";
import {MaterialIcon} from "@/ui/MaterialIcon";

export const MenuItem: FC<{ item: IMenuItem }> = ({item}) => {
  const {asPath} = useRouter()

  return (
    <li className={cn({[styles.active]: asPath === item.link})}>
      <Link href={item.link}>
        <MaterialIcon name={item.icon}/>
        <span>{item.title}</span>
      </Link>
    </li>
  );
};