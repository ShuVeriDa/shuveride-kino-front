import {FC} from 'react';

import styles from './AdminTable.module.scss';
import cn from "classnames";

interface IAdminTableHeaderProps {
  headerItems: string[]
}


export const AdminTableHeader: FC<IAdminTableHeaderProps> = ({headerItems}) => {
  return (
    <div className={cn(styles.item, styles.itemHeader)}>
      {headerItems.map(value => <div key={value}>{value}</div>)}
      <div>actions</div>
    </div>
  );
};