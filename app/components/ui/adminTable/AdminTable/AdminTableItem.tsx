import {FC} from 'react';
import {IAdminTableItem} from "@/ui/adminTable/AdminTable/admin-table.interface";
import styles from './AdminTable.module.scss';
import {AdminActions} from "@/ui/adminTable/AdminTable/AdminActions/AdminActions";

interface IAdminTableItemProps {
}

export const AdminTableItem: FC<IAdminTableItemProps & IAdminTableItem> = ({tableItem, removeHandler}) => {
  return (
    <div className={styles.item}>
      {tableItem.items.map(value => <div key={value}>{value}</div>)}

      <AdminActions editUrl={tableItem.editUrl} removeHandler={removeHandler} />
    </div>
  );
};