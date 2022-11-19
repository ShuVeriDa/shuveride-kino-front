import {FC} from 'react';

import styles from './AdminTable.module.scss';
import {ITableItem} from "@/ui/adminTable/AdminTable/admin-table.interface";
import {AdminTableHeader} from "@/ui/adminTable/AdminTable/AdminTableHeader";
import {SkeletonLoader} from "@/ui/SkeletonLoader";
import {AdminTableItem} from "@/ui/adminTable/AdminTable/AdminTableItem";

interface IAdminTableProps {
  tableItems: ITableItem[]
  isLoading: boolean
  headerItems: string[]
  removeHandler: (id: string) => void
}

export const AdminTable: FC<IAdminTableProps> = ({tableItems, headerItems, removeHandler, isLoading}) => {
  return (
    <div>
      <AdminTableHeader headerItems={headerItems} />

      {isLoading
        ? <SkeletonLoader count={1} height={48} className="mt-4"/>
        : tableItems.length
          ? tableItems.map(tableItem => <AdminTableItem key={tableItem._id} tableItem={tableItem} removeHandler={() => removeHandler(tableItem._id)} />)
          : <div className={styles.notFound}>Elements Not found</div>
      }
    </div>
  );
};