import {ChangeEvent, FC} from 'react';

import styles from './AdminHeader.module.scss';
import {SearchField} from "@/ui/search-field/SearchField";
import {AdminCreateButton} from "@/ui/adminTable/AdminHeader/AdminCreateButton";

interface IAdminHeaderProps {
  onClick?: () => void
  searchTerm: string
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

export const AdminHeader: FC<IAdminHeaderProps> = ({handleSearch, searchTerm, onClick}) => {
  return (
    <div className={styles.header}>
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
      {onClick && <AdminCreateButton onClick={onClick} />}
    </div>
  );
};